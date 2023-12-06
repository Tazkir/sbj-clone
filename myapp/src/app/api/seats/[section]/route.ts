import { Seats, seats } from '@/lib/data';
import { NextRequest, NextResponse } from 'next/server';

// GET SINGLE ARTIST
export const GET = async (
  req: NextRequest,
  { params }: { params: { section: string } }
): Promise<NextResponse> => {
  const { section } = params;

  try {
    // Find the artist with the matching name
    const seat: Seats | undefined = seats.find((s) => s.section === section);

    if (!seat) {
      // If no seat is found, return a 404 response
      return new NextResponse(JSON.stringify({ message: 'Seats not found' }));
    }

    // If seat is found, return the seat data
    return new NextResponse(JSON.stringify(seat));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' })
    );
  }
};
