import Stadium from '@/components/background/Stadium';
import Main from '@/components/mainpage/Main';

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Main />
      <Stadium />
    </div>
  );
}
