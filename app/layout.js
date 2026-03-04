import { Sora, Fraunces } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces'
});

export const metadata = {
  title: 'NH Decor | Complete Furnishing Destination',
  description:
    'Premium furnishing collections for retail and wholesale needs across India.',
  icons: {
    icon: [
      { url: '/favicon-v2.ico' },
      { url: '/favicon-v2.ico', rel: 'shortcut icon' }
    ],
    apple: [{ url: '/apple-icon.png?v=2' }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${fraunces.variable}`}>{children}</body>
    </html>
  );
}
