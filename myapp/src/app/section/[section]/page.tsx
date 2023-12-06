import Section from '@/components/section/Section';
import { Url } from '@/lib/Url';
import { Metadata } from 'next';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: { section: string };
}): Promise<Metadata> {
  const section = params.section;

  try {
    const response = await fetch(`${Url}api/seats/${section}`);

    if (!response.ok) {
      console.error(`Failed to fetch section data. Status: ${response.status}`);
      return {
        title: 'Section - Level',
      };
    }

    const data = await response.json();

    if (!data) {
      console.error('Invalid section data received');
      return {
        title: 'Section - Level',
      };
    }

    return {
      title: `Level ${data.level} - Section (${data.section})`,
    };
  } catch (error) {
    console.error('An error occurred while fetching Section data:', error);
    return {
      title: 'Section - Level',
    };
  }
}

export default function Page() {
  return (
    <div>
      <Section />
    </div>
  );
}
