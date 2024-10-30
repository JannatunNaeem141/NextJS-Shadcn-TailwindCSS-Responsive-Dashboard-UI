import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card w-full mt-6 py-4 px-6 rounded-md border-default">
      <div className="block md:flex md:justify-between text-muted">
        <p className="sm:mb-0 text-xs md:text-sm">
          COPYRIGHT © {currentYear} <Link href="#">Optimus Technologies</Link> All rights Reserved
        </p>
        <p className="mb-0 text-xs md:text-sm">
          Hand-crafted &amp; Made by{' '}
          <a className="text-primary" target="__blank" href="https://codeshaper.net">
            Codeshaper
          </a>
        </p>
      </div>
    </footer>
  );
}
