import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
  } from '@/components/core/carousel';
  import Web from "@/assets/img/Web.jpg"
  import Image from 'next/image';
  const CarouselDrag = () => {
    return (
      <>
        <div className='hidden md:block relative mt-10 w-full px-4'>
          <Carousel>
            <CarouselContent className='-ml-4'>
              <CarouselItem className='basis-2/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-2/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-2/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-2/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-2/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              {/* <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  4
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  5
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  6
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  7
                </div>
              </CarouselItem> */}
            </CarouselContent>
            <CarouselNavigation
              className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
              classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
              alwaysShow
            />
          </Carousel>
        </div>
  
        <div className='block md:hidden relative w-full px-4'>
          <Carousel>
            <CarouselContent className='-ml-4'>
              <CarouselItem className='basis-3/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-3/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-3/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-3/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className='basis-3/4 pl-4'>
                <div className='relative'>
                  <Image className='flex aspect-video items-center justify-center dark:border-zinc-800' src={Web} alt='Multimedia' />
                  <div className='absolute bottom-0 pb-10 pl-10'>
                    <h1 className='text-6xl text-white'>Web Development</h1>
                    <h1 className='text-4xl text-white'>การพัฒนาเว็ปไซต์</h1>
                  </div>
                </div>
              </CarouselItem>
              {/* <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  4
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  5
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  6
                </div>
              </CarouselItem>
              <CarouselItem className='basis-1/3 pl-4'>
                <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                  7
                </div>
              </CarouselItem> */}
            </CarouselContent>
            <CarouselNavigation
              className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
              classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
              alwaysShow
            />
          </Carousel>
        </div>
      </>
    );
  }
  export default CarouselDrag;