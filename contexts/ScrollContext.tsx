// contexts/ScrollContext.tsx
import React, { createContext, useContext, useRef, RefObject } from 'react';

// Define the type for our refs
interface ScrollRefs {
  contact: RefObject<HTMLDivElement>;
  feature: RefObject<HTMLDivElement>;
  // Add scroll functions
  scrollToContact: () => void;
  scrollToFeature: () => void;
}

// Define the type for our context
const ScrollContext = createContext<ScrollRefs | undefined>(undefined);

// Define props interface for the provider
interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const contact = useRef<HTMLDivElement>(null);
  const feature = useRef<HTMLDivElement>(null);

  // Define scroll functions
  const scrollToContact = () => {
    contact.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToFeature = () => {
    feature.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const refs: ScrollRefs = {
    contact,
    feature,
    scrollToContact,
    scrollToFeature
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