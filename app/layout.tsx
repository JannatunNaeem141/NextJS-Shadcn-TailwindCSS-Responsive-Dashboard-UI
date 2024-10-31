import { SiteThemeProviders } from '@/providers/theme.provider';
import { Inter } from '@next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'NextJS + Shadcn Dashboard',
  description: 'This is dashboard made with NextJS + Shadcn.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SiteThemeProviders>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </SiteThemeProviders>
      </body>
    </html>
  );
}
