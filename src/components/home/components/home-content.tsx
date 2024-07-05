'use client';
import { SiteLayout } from '@/layout';
import Link from 'next/link';
import React from 'react';
import { RouteContent } from '../../../constants/route';

const HomeContent = () => {
  return (
    <SiteLayout className="bg-slate-300 p-8 min-h-screen">
      <div className="flex   gap-4 ">
        {RouteContent.map((item, index) => {
          return (
            <Link href={item.path} key={index}>
              <div className="text-3xl border-2 px-8 py-2 rounded-lg shadow-md hover:bg-gray-100  h-48 flex items-center justify-center">
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
