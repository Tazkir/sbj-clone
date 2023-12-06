'use client';

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Seats } from '@/lib/data';
import { getSeats } from '@/components/actions/Actions';
import { Skeleton } from '../ui/skeleton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const FormSchema = z.object({
  section: z.string({ required_error: 'Please select an section to display.' }),
});

function SeatSelection() {
  const [seats, setSeats] = useState<Seats[] | null>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const route = useRouter();

  const fetchSeats = async () => {
    try {
      const data = await getSeats();
      setSeats(data);
    } catch (error) {
      console.error('Error fetching Seats:', error);
    }
  };

  fetchSeats();

  if (!seats) {
    return (
      <div className="flex max-md:flex-col gap-4">
        <Skeleton className="rounded-lg">
          <div className="h-10 w-[10em] rounded-lg bg-background/40"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-10 w-[8em] rounded-lg bg-background/40"></div>
        </Skeleton>
      </div>
    );
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    route.push(`/section/${data.section}`);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex max-md:flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="section"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Level & Section" />
                    </SelectTrigger>
                  </FormControl>
                  <FormMessage />
                  <SelectContent className="text-start">
                    <SelectGroup>
                      {seats.map((seat) => (
                        <SelectItem key={seat.id} value={seat.section}>
                          Level {seat.level} - Section {seat.section}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!form?.getValues().section}
            className="px-5 py-2 bg-foreground text-background hover:bg-primary hover:text-foreground border border-foreground transition-all rounded-md font-semibold"
          >
            Search
          </Button>
        </form>
      </Form>
    </>
  );
}

export default SeatSelection;
