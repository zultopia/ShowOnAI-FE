"use client";

import React, { memo, useCallback } from 'react';
import Image from 'next/image';
import { HeaderProps } from '@/types';

const Navbar = memo(function Navbar({ onLoginClick, onDashboardClick }: HeaderProps) {
  const handleFeatureScroll = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('features');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handlePricingScroll = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleBlogClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/blog';
  }, []);

  return (
    <header className="relative z-50 px-3 sm:px-4 lg:px-8 pt-3 sm:pt-4 md:pt-6 lg:pt-12">
      <div className="max-w-7xl mx-auto flex justify-center">
        <nav className="flex items-center justify-between w-full max-w-5xl h-9 sm:h-10 md:h-12 lg:h-15 px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full border border-white/60 bg-white/30 backdrop-blur-lg">
          <div className="flex items-center">
            <Image 
              src="/showonai-white.svg" 
              alt="ShowOnAI" 
              width={176} 
              height={44} 
              className="h-5 sm:h-6 md:h-8 lg:h-11 w-auto"
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc2IiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgMTc2IDQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxNzYiIGhlaWdodD0iNDQiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg=="
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={handleFeatureScroll}
              className="text-white/90 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1"
            >
              기능
            </button>
            <button
              onClick={handlePricingScroll}
              className="text-white/90 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1"
            >
              가격정책
            </button>
            <button
              onClick={handleBlogClick}
              className="text-white/90 hover:text-white transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-2 py-1"
            >
              블로그
            </button>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={onDashboardClick}
              className="px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-white text-blue-600 font-semibold text-xs sm:text-xs md:text-sm lg:text-base hover:bg-gray-50 transition-colors active:scale-95 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              데모 요청
            </button>
            <button
              onClick={onLoginClick}
              className="px-1.5 sm:px-2 md:px-3 lg:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-blue-600 text-white font-semibold text-xs sm:text-xs md:text-sm lg:text-base hover:bg-blue-700 transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              로그인
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
});

export { Navbar };