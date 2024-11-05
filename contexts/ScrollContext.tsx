// contexts/ScrollContext.tsx
'use client';
import React, { createContext, useContext, useRef, RefObject } from 'react';

// Define the type for our refs
interface ScrollRefs {
  contact: RefObject<HTMLDivElement>;
  feature: RefObject<HTMLDivElement>;
  // Add more refs as needed
}

// Define the type for our context
const ScrollContext = createContext<ScrollRefs | undefined>(undefined);

// Define props interface for the provider
interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const refs: ScrollRefs = {
    contact: useRef<HTMLDivElement>(null),
    feature: useRef<HTMLDivElement>(null),
  };

  return (
    <ScrollContext.Provider value={refs}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook with type safety
export const useScroll = (): ScrollRefs => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};