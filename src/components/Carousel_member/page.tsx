import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '@/components/core/carousel';
import Image from 'next/image';
import Chanin from "@/assets/img/CHANIN.jpg"
export default function CarouselSpacing() {
    return (
        <>
            <div className="hidden md:block">
                <div className='flex'>
                    <div className='basis-1/3 bg-white rounded-xl'>
                       <div className="w-11/12 mx-auto pl-5 pt-6">
                       <h1 className='text-5xl'>Baristers</h1>
                       <p className='pt-10 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                       </div>
                    </div>
                    <div className='relative w-full px-4'>
                        <Carousel>
                            <CarouselContent className='-ml-4'>
                                <CarouselItem className='basis-2/5 pl-10'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute top-0 pt-6 pl-8'>
                                            <h1 className='text-3xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-3xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-2/5 pl-10'>
                                <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute top-0 pt-6 pl-8'>
                                            <h1 className='text-3xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-3xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-2/5 pl-10'>
                                <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute top-0 pt-6 pl-8'>
                                            <h1 className='text-3xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-3xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-2/5 pl-10'>
                                <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute top-0 pt-6 pl-8'>
                                            <h1 className='text-3xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-3xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-2/5 pl-10'>
                                <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute top-0 pt-6 pl-8'>
                                            <h1 className='text-3xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-3xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-2/5 pl-10'>
                                <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute top-0 pt-6 pl-8'>
                                            <h1 className='text-3xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-3xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-2/5 pl-10'>
                                <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute top-0 pt-6 pl-8'>
                                            <h1 className='text-3xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-3xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselNavigation
                                className='absolute w-full bottom-0 mt-40 justify-start items-end gap-2'
                                classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
                                alwaysShow
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="block md:hidden">
                <div className='flex'>
                    <div className='w-4/12 basis-4/5 bg-red-600'>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                    </div>
                    <div className='relative w-full px-4'>
                        <Carousel>
                            <CarouselContent className='-ml-4'>
                                <CarouselItem className='basis-7/8 pl-4'>
                                    <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                        1
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-7/8 pl-4'>
                                    <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                        2
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-7/8 pl-4'>
                                    <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                        3
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-7/8 pl-4'>
                                    <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                        4
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-7/8 pl-4'>
                                    <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                        5
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-7/8 pl-4'>
                                    <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                        6
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-7/8 pl-4'>
                                    <div className='flex aspect-square items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                                        7
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselNavigation
                                className='absolute w-full justify-start bottom-[-500px] gap-2'
                                classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
                                alwaysShow
                            />
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}
