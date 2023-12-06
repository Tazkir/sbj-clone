import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo.png';
import { ThemeSwitcher } from './ThemeSwitcher';
import Sidebar from '../sidebar/Sidebar';

function Header() {
  return (
    <header className="h-16 flex flex-row justify-between items-center shadow-md px-3 z-50 top-0 inset-x-0 sticky bg-background">
      <div>
        <Link href="/">
          <Image
            src={logo}
            width={100}
            height={100}
            quality={100}
            alt="StadiumBukitJalil.com Logo"
            className="object-cover rounded-full w-12 h-12"
          />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-3">
        <Sidebar />
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
