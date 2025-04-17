import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/core/carousel';

function index() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <>
      <>
        <Carousel options={OPTIONS} isAutoPlay={true} className='w-full mx-auto'>
          <SliderContainer className='gap-2'>
            <Slider className='w-full'>
              <div className='rounded-xl h-[200px] md:h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-cottonbro-6804068.jpg?sv=2023-01-03&st=2025-03-12T04%3A48%3A28Z&se=2029-07-13T04%3A48%3A00Z&sr=b&sp=r&sig=%2BSLd4UwYgmVr5qeIgNempDdxv2tGoN4nkmPDgLZUiJ4%3D" alt="" />
              </div>
            </Slider>
            <Slider className='w-full'>
              <div className='rounded-xl h-[200px] md:h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-cottonbro-6892709.jpg?sv=2023-01-03&st=2025-03-12T04%3A49%3A03Z&se=2029-06-13T04%3A49%3A00Z&sr=b&sp=r&sig=aXQDnFb5uxrkri6S4kH3e62zeYoBuFpAkK27rWgbOqg%3D" alt="" />
              </div>
            </Slider>
            <Slider className='w-full'>
              <div className='rounded-xl h-[200px] md:h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-divinetechygirl-1181346.jpg?sv=2023-01-03&st=2025-03-12T04%3A49%3A24Z&se=2029-07-13T04%3A49%3A00Z&sr=b&sp=r&sig=3ExYkDupSs69GnvLMqvdWBIFSvAZoo6%2Ftb8YBvcKdsU%3D" alt="" />
              </div>
            </Slider>
            <Slider className='w-full'>
              <div className='rounded-xl h-[200px] md:h-[800px] w-full'>
                <img src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/pexels-expect-best-79873-1046151.jpg?sv=2023-01-03&st=2025-03-12T04%3A49%3A44Z&se=2029-08-13T04%3A49%3A00Z&sr=b&sp=r&sig=FQfnXj8E3DSD68Zm8EIHTjQvltoMpcvYuLsY082Xi60%3D" alt="" />
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
