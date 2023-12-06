'use client';

import React, { useEffect, useState, CSSProperties } from 'react';
import { getSingleSeats } from '../actions/Actions';
import { Seats } from '@/lib/data';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Skeletons from '../loading/Loader';

interface Params {
  section: string;
  [key: string]: string;
}

function Section() {
  const params = useParams<Params>();
  const { section } = params;
  const [seats, setSeats] = useState<Seats[] | null>(null);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await getSingleSeats(section);

        if (Array.isArray(response)) {
          // If the response is an array, use it directly
          const foundSection = response.find(
            (a: Seats) => a.section === section
          );
          setSeats(foundSection);
        } else if (response && typeof response === 'object') {
          // If the response is a single object, convert it to an array
          setSeats([response] as Seats[]);
        } else {
          console.error('Invalid artist data received:', response);
        }
      } catch (error) {
        console.error('An error occurred while fetching artist data:', error);
      }
    };

    fetchSeats();
  }, [section]);

  if (!seats) {
    return (
      <>
        <Skeletons />
      </>
    );
  }

  return (
    <Dialog>
      <div className="w-full h-full flex flex-col items-center justify-center py-10 gap-5">
        <div key={seats[0]?.id}>
          <h1 className="text-3xl font-semibold">
            Level {seats[0]?.level} - Section ({seats[0]?.section})
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4 justify-center mt-8 px-4 items-center w-full mx-auto max-w-screen-xl">
          {seats[0].photosUrl?.map((item) => (
            <div
              key={`${item}`}
              className="relative h-[280px] md:h-[400px] w-full"
            >
              <DialogTrigger asChild className="bg-foreground/30 rounded-xl">
                <Image
                  fill
                  quality={100}
                  alt={`View stadium bukit jalil level ${seats[0].level} - section ${seats[0].section}`}
                  src={`/image/seats/${item}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer"
                />
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-transparent backdrop-blur-sm border-none shadow-none">
                <Swiper
                  style={
                    {
                      '--swiper-navigation-color': '#fb923c',
                      '--swiper-pagination-color': '#fb923c',
                    } as CSSProperties
                  }
                  slidesPerView={1}
                  spaceBetween={10}
                  rewind={true}
                  autoplay={false}
                  navigation={true}
                  pagination={{
                    type: 'bullets',
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper rounded-2xl"
                >
                  {seats[0].photosUrl?.map((item) => (
                    <SwiperSlide key={`${item}`}>
                      <Image
                        width={1000}
                        height={1000}
                        quality={100}
                        alt={`View stadium bukit jalil level ${seats[0].level} - section ${seats[0].section}`}
                        src={`/image/seats/${item}`}
                        className="object-contain cursor-pointer w-full h-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </DialogContent>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
}

export default Section;
