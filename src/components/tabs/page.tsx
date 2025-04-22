'use client';
import React from 'react';
import Image from 'next/image';
import { TabsBtn, TabsContent, TabsProvider } from '@/components/core/tabs';

function Tab() {
  return (
    <div className='p-4 py-12 relative'>
      <TabsProvider defaultValue={'design'}>
        <div className='flex justify-center mt-2'>
          <div className='flex items-center w-fit dark:bg-[#1d2025] bg-gray-200 p-1 dark:text-white text-black rounded-md border'>
            <TabsBtn value='design'>
              <span className='relative z-[2] uppercase'>design</span>
            </TabsBtn>
            <TabsBtn value='collaborate'>
              <span className='relative z-[2] uppercase'>collaborate</span>
            </TabsBtn>
            <TabsBtn value='share'>
              <span className='relative z-[2] uppercase'>share</span>
            </TabsBtn>
            <TabsBtn value='publish'>
              <span className='relative z-[2] uppercase'>publish</span>
            </TabsBtn>
          </div>
        </div>

        {[
          {
            value: 'design',
            src: 'https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&w=1000&auto=format&fit=crop',
          },
          {
            value: 'collaborate',
            src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
          },
          {
            value: 'share',
            src: 'https://images.unsplash.com/photo-1665470909901-162912ec16f7?q=80&w=1000&auto=format&fit=crop',
          },
          {
            value: 'publish',
            src: 'https://images.unsplash.com/photo-1694022861804-840f61d1c452?q=80&w=1000&auto=format&fit=crop',
          },
        ].map((tab) => (
          <TabsContent value={tab.value} key={tab.value}>
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-6xl mx-auto rounded-md overflow-hidden'>
                <Image
                  src={tab.src}
                  width={1000}
                  height={1000}
                  alt='preview_img'
                  className='w-full object-cover h-auto rounded-md'
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </TabsProvider>
    </div>
  );
}

export default Tab;
