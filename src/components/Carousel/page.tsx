import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/core/carousel';
import Image from 'next/image';

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <>
        <h1 className='text-center text-4xl font-semibold pb-4'>Autoplay</h1>
        <Carousel options={OPTIONS} isAutoPlay={true} className='w-4/5 mx-auto'>
          <SliderContainer className='gap-2'>
            <Slider className='w-full'>
              <div className='bg-red-500 rounded-xl h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-cottonbro-6804068.jpg?sv=2023-01-03&st=2025-03-10T07%3A19%3A30Z&se=2025-03-11T07%3A19%3A30Z&sr=b&sp=r&sig=Hyy5HJJNldZuyduILtLLZSVQmBddcPHmJHHOCXkhzcU%3D" alt="" />
              </div>
            </Slider>
            <Slider className='w-full'>
              <div className='bg-blue-500 rounded-xl h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-cottonbro-6892709.jpg?sv=2023-01-03&st=2025-03-10T07%3A20%3A49Z&se=2025-03-11T07%3A20%3A49Z&sr=b&sp=r&sig=PzDebCADtbkwy%2BTeV6mf8UVrjrS6VBrM%2BXsqe9mM1uQ%3D" alt="" />
              </div>
            </Slider>
            <Slider className='w-full'>
              <div className='bg-green-500 rounded-xl h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-divinetechygirl-1181346.jpg?sv=2023-01-03&st=2025-03-10T07%3A21%3A06Z&se=2025-03-11T07%3A21%3A06Z&sr=b&sp=r&sig=XsfgyG%2BKmEEQWbiFvPTxQHRi3NvFgCIRPry6G1fvhLE%3D" alt="" />
              </div>
            </Slider>
            <Slider className='w-full'>
              <div className='rounded-xl h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-expect-best-79873-1046151.jpg?sv=2023-01-03&st=2025-03-10T07%3A21%3A21Z&se=2025-03-11T07%3A21%3A21Z&sr=b&sp=r&sig=vmsqJMgobS0ZEH6QoLulwUEEf3RNRVtwDu0nzQiGKIg%3D" alt="" />
              </div>
            </Slider>
          </SliderContainer>
          <div className='flex justify-center py-4'>
            <SliderDotButton />
          </div>
        </Carousel>
      </>
    </>
  );
}

export default index;
