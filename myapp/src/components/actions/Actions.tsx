import { cache } from 'react';

export const getSeats = cache(async function () {
  const res = await fetch(`../api/seats`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
});

export const getSingleSeats = cache(async function (section: string) {
  const res = await fetch(`../api/seats/${section}`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
});

export const getLevel = cache(async function () {
  const res = await fetch(`../api/level`, {
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
});
