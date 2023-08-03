import '../styles/global.css';
import Head from 'next/head';
import Link from 'next/link';
export const metadata = {
  title: 'Welcome to my Portfolio',
  description: 'Hire a senior software engineer for your scalable backends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,700;1,300;1,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/icons/devicon-master/devicon.min.css"></link>
      </head>
      <body style={{ fontFamily: 'Work Sans' }}>
        <div className="main-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
