import Link from 'next/link';

function Header() {
  return (
    <header className="mb-6 flex justify-between items-end">
      <Link href="/">
        <span className="text-lg font-bold">{`dkmqflx's blog`}</span>
      </Link>
      <a href="https://github.com/dkmqflx" target="_blank">
        <span className="text-xs text-slate-400  cursor-pointer">Github</span>
      </a>
    </header>
  );
}

export default Header;
