import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata = {
  title: 'My Awesome Store | Best Products Online',
  description: 'Shop the best products with amazing discounts. Fast shipping and secure payments guaranteed.',
  keywords: 'ecommerce, shop, products, online shopping',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'My Awesome Store',
    description: 'Shop the best products online',
    url: 'https://your-domain.com',
    siteName: 'My Awesome Store',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Awesome Store',
    description: 'Shop the best products online',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}