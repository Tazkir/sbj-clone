import { Seats, seats } from '@/lib/data';

import { NextResponse } from 'next/server';

// GET All Seates
export const GET = async () => {
  try {
    // Find the All Seates
    const seat: Seats[] = seats;

    if (!seat || seat.length === 0) {
      // If no album is found, return a 404 response
      return new NextResponse(JSON.stringify({ message: 'Seates not found' }));
    }

    return new NextResponse(JSON.stringify(seat));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' })
    );
  }
};
