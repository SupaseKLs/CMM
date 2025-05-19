'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/core/carousel';
import Image from 'next/image';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=3003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Art',
  },
  {
    src: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Software',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1663013244412-1153aabaa1bc?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Hardware',
  },
];

const CarouselPage = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <Carousel options={OPTIONS} isAutoPlay className="w-full mx-auto">
      <SliderContainer className="gap-2">
        {slides.map((slide, index) => (
          <Slider key={index} className="w-full">
            <div className="relative rounded-xl h-[200px] md:h-[500px] 2xl:h-[800px] w-full overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h2 className="text-white text-3xl md:text-6xl pb-1 md:pb-6 pl-6 md:pl-10 font-bold">
                  {slide.label}
                </h2>
              </div>
            </div>
          </Slider>
        ))}
      </SliderContainer>

      <div className="flex justify-center py-4">
        <SliderDotButton />
      </div>
    </Carousel>
  );
};

export default CarouselPage;
