import { Skeleton } from '../ui/skeleton';

function Skeletons() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center py-10 px-5">
      <Skeleton className="rounded-lg">
        <div className="h-10 w-[20em] rounded-lg bg-background/40"></div>
      </Skeleton>
      <div className="flex max-md:flex-col p-5 gap-5">
        <Skeleton className="rounded-lg">
          <div className="h-[280px] md:h-[400px] w-[30em] max-lg:w-[20em] rounded-lg bg-background/40"></div>
        </Skeleton>
        <Skeleton className="rounded-lg">
          <div className="h-[280px] md:h-[400px] w-[30em] max-lg:w-[20em] rounded-lg bg-background/40"></div>
        </Skeleton>
      </div>
    </div>
  );
}

export default Skeletons;
