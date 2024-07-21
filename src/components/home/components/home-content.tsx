'use client';
import { SiteLayout } from '@/layout';
import Link from 'next/link';
import React from 'react';
import { RouteContent } from '../../../constants/route';

const HomeContent = () => {
  return (
    <SiteLayout className="bg-slate-300 p-8 min-h-screen">
      <div className="flex  gap-4  flex-wrap justify-center">
        {RouteContent.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <div className="md:text-3xl text-xl border-2 md:px-8 px-4 rounded-lg shadow-md hover:bg-gray-100  md:h-48 h-32 flex items-center justify-center">
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
    </SiteLayout>
  );
};

export default HomeContent;
