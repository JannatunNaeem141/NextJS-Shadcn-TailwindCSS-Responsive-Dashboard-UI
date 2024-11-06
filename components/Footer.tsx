export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full sm:p-6 p-3">
      <div className="bg-card w-full py-4 sm:px-6 px-3 rounded-md border border-default">
        <div className="flex items-center sm:justify-between justify-center sm:flex-row flex-col text-muted">
          <p className="sm:mb-0 text-xs md:text-sm sm:text-start text-center">COPYRIGHT © {currentYear}. All rights Reserved.</p>
          <p className="mb-0 text-xs md:text-sm sm:text-start text-center">
            Developed by{' '}
            <a className="text-primary font-medium" target="__blank" href="https://naaeem.com/">
              Jannatun Naeem
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
