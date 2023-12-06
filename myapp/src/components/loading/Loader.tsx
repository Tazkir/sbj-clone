import { Skeleton } from '../ui/skeleton';

function Skeletons() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center py-10">
        <Skeleton className="rounded-lg">
          <div className="h-10 w-[20em] rounded-lg bg-background/40"></div>
        </Skeleton>

        <div className="flex flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4 justify-center mt-8 px-4 items-center w-full mx-auto max-w-screen-xl">
          <Skeleton className="rounded-lg">
            <div className="h-[280px] md:h-[400px] w-[30em] rounded-lg bg-background/40"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-[280px] md:h-[400px] w-[30em] rounded-lg bg-background/40"></div>
          </Skeleton>
        </div>
      </div>
    </>
  );
}

export default Skeletons;
