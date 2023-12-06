import SeatSelection from './SeatSelection';

function Main() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-20 gap-5">
      <div className="flex flex-col w-2/3 gap-4 justify-center items-center text-center">
        <h1 className="text-6xl max-md:text-5xl tracking-tight font-bold">
          Curious what is like your seat view in Stadium Bukit Jalil?
        </h1>
        <p className="text-zinc-500 font-semibold leading-8">
          Check out our website now that provide view image experience, feedback
          and more. Developed by Malaysian devs community.
        </p>
      </div>
      <div>
        <SeatSelection />
      </div>
    </div>
  );
}

export default Main;
