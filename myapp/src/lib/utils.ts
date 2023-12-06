import { type ClassValue, clsx } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  description = 'Field view from seats in each sections inside of the Stadium Nasional Bukit Jalil',
  image = '/og.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: [];
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      template: '%s - BukitJalilStadium.com',
      default: 'Stadium Bukit Jalil Seating View - BukitJalilStadium.com',
    },
    description,
    openGraph: {
      title: {
        template: '%s - BukitJalilStadium.com',
        default: 'Stadium Bukit Jalil Seating View - BukitJalilStadium.com',
      },
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: {
        template: '%s - BukitJalilStadium.com',
        default: 'Stadium Bukit Jalil Seating View - BukitJalilStadium.com',
      },
      description,
      images: '/og.png',
      creator: ' Built by @afrieirham',
    },
    icons,
    metadataBase: new URL('https://afrieirham.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
