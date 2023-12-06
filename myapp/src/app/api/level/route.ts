import { LevelsProps, levels } from '@/lib/data';
import { NextResponse } from 'next/server';

// GET All level
export const GET = async () => {
  try {
    // Find the All artist
    const level: LevelsProps[] = levels;

    if (!level || level.length === 0) {
      // If no artist is found, return a 404 response
      return new NextResponse(JSON.stringify({ message: 'artists not found' }));
    }

    return new NextResponse(JSON.stringify(level));
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' })
    );
  }
};
