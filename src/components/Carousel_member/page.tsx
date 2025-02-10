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
                    <div className='basis-2/3 lg:basis-1/3 rounded-xl'>
                        <div className="bg-white w-full h-full mx-auto px-5 pt-6">
                            <h1 className='text-5xl'>Baristers</h1>
                            <p className='pt-10 text-xl lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='relative w-full px-4'>
                        <Carousel>
                            <CarouselContent className='-ml-2'>
                                <CarouselItem className='basis-3/4 lg:basis-2/5 pl-2'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute bottom-0 pb-6 pl-8'>
                                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-3/4 lg:basis-2/5 pl-2'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute bottom-0 pb-6 pl-8'>
                                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-3/4 lg:basis-2/5 pl-2'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute bottom-0 pb-6 pl-8'>
                                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-3/4 lg:basis-2/5 pl-2'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute bottom-0 pb-6 pl-8'>
                                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-3/4 lg:basis-2/5 pl-2'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute bottom-0 pb-6 pl-8'>
                                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-3/4 lg:basis-2/5 pl-2'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute bottom-0 pb-6 pl-8'>
                                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
                                            </h1>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='basis-3/4 lg:basis-2/5 pl-2'>
                                    <div className='relative flex aspect-square items-center border bg-green-500 border-zinc-200 dark:border-zinc-800'>
                                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                                        <div className='absolute bottom-0 pb-6 pl-8'>
                                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong
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
                <div className="bg-white w-full h-full mx-auto px-5 py-6">
                    <h1 className='text-5xl'>Baristers</h1>
                    <p className='pt-10 px-4 text-xl lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute bottom-0 pb-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full h-full mx-auto px-5 py-6 mt-4">
                    <h1 className='text-5xl'>Baristers</h1>
                    <p className='pt-10 px-4 text-xl lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute bottom-0 pb-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute bottom-0 pb-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute bottom-0 pb-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute bottom-0 pb-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute bottom-0 pb-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute bottom-0 pb-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full h-full mx-auto px-5 py-6 mt-4">
                    <h1 className='text-5xl'>Baristers</h1>
                    <p className='pt-10 px-4 text-xl lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div>
                    <div className='relative flex aspect-square items-center border bg-green-500 mt-4 border-zinc-200 dark:border-zinc-800'>
                        <Image className='w-full h-full' src={Chanin} alt='chanin' />
                        <div className='absolute top-0 pt-6 pl-8'>
                            <h1 className='text-2xl text-white font-semibold'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            <h1 className='text-xl text-white font-semibold'>Asst.Prof.Dr.Chanin Tungpantong</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
