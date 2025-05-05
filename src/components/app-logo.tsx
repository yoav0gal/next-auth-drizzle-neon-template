import Image from 'next/image';

export function AppLogo() {
  return (
    <Image
      src="/favicon.ico"
      alt="App Logo"
      width={24}
      height={24}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  );
}
