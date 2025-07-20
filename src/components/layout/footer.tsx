import { Socials } from '../socials';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Prabhat Kumar. All rights reserved.
        </p>
        <Socials />
      </div>
    </footer>
  );
}
