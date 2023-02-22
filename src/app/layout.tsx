'use client';
import './globals.css';
import { Raleway } from '@next/font/google';
import { Suspense } from 'react';

import Loading from './loading';

const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR" className={raleway.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="bg-gray-900 flex w-full h-full lg:h-[100vh]">
          <Suspense fallback={<Loading />} />
          {children}
        </main>
      </body>
    </html>
  );
}
