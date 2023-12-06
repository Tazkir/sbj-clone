'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Stadium() {
  const text = [
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  ];

  const [hover, setHover] = useState(false);

  function getVariants(index: number): Variants {
    const variants: Variants = {
      hover: {
        backgroundColor: cn('bg-foreground'),
        boxShadow: '0 0 8px 2px #f59e0b',
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
          delay: index * 0.05,
        },
      },
      default: {
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
    };

    return variants;
  }

  return (
    <div>
      {text.map((row, i) => (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          key={i}
          className="flex justify-center gap-4 cursor-pointer"
        >
          {row.map((col, j) => (
            <motion.button
              variants={getVariants(j)}
              key={j}
              animate={hover && col ? 'hover' : 'default'}
              className={`w-1 h-1 my-2 bg-foreground rounded-full transition-all`}
            ></motion.button>
          ))}
        </div>
      ))}
    </div>
  );
}
