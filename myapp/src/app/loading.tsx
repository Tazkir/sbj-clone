import { Spinner } from '@/components/loading/Spinner';

export default function loading() {
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <Spinner />
    </div>
  );
}
