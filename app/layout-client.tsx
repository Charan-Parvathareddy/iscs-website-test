"use client";

import { Footer } from "@/components/Footer/Footer";
import Navigation from "@/components/Navbar/Navigation";
import { ScrollProvider } from '@/contexts/ScrollContext';
import React from 'react';

type LayoutClientProps = {
  children: React.ReactNode;
  geistSans: string;
  geistMono: string;
};

export default function LayoutClient({ children, geistSans, geistMono }: LayoutClientProps) {
  return (
    <body className={`${geistSans} ${geistMono} antialiased`}>
      <ScrollProvider>          
        <Navigation/>
      </ScrollProvider>
      {children}
      <Footer/>
    </body>
  );
}