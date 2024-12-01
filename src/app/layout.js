import localFont from 'next/font/local';
import './globals.css';
import NavBar from './root-components/NavBar.js';
import Footer from './root-components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Direct Current Drilling & Sawing',
  description: 'Company Site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script
          src="https://kit.fontawesome.com/a38f17e504.js"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <div
          className="relative flex size-full min-h-screen flex-col bg-[#131C24] dark group/design-root overflow-x-hidden"
          style={{ fontFamily: `Manrope, Noto Sans, sans-serif` }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <NavBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
