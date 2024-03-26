import React from 'react';
import { ArrowCircleUpIcon } from '@heroicons/react/solid';

const GohomeButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-10 bg-gray-800 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none"
    >
      <ArrowCircleUpIcon className="w-8 h-8" />
    </button>
  );
};

export default GohomeButton;
