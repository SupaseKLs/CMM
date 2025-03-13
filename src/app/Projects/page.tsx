import React from 'react';
import ScrollBaseAnimation from '@/components/ui/text.marquee';
import Admissions from "@/assets/img/Admission.jpg";
import Image from 'next/image';
import NumberTicker from '@/components/Counter/page';
import Filter from "@/components/Filter/page"
import VideoPlayer from '@/components/VideoPlayer/videoplayer';
function Index() {
    const categories = [
        "Electronics",
        "Clothing",
        "Books",
        "Sports",
        "Home & Garden",
        "Toys",
        "Automotive",
        "Health & Beauty",
      ];
      
      const prices = [
        "Under $25",
        "$25 - $50",
        "$50 - $100",
        "$100 - $200",
        "$200 - $500",
        "Over $500",
      ];
      
      const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony", "LG", "Dell", "HP"];
    return (
        <>
            <section className="bg-white h-full">
                <div className="w-11/12 mx-auto">
                    <div className='pt-60 pb-40 flex justify-between'>
                        <div className='font-semibold w-[60%] text-8xl'>
                            <h1>We strive <br />to innovate</h1>
                        </div>
                        <div className='w-[40%] text-2xl'>
                            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, aut illo fuga ex cumque, totam odio vel in, cum voluptas ducimus? Labore quos at voluptate necessitatibus mollitia sint eum repellendus.</h1>
                        </div>
                    </div>
                </div>
                <div className='relative flex justify-center'>
                    <div className="relative w-[90%] h-[900px] overflow-hidden">
                        <Image src={Admissions} className='w-full h-full rounded-full' alt='test' />
                        <div className='absolute top-0 left-0 w-full h-full grid place-content-center'>
                            <ScrollBaseAnimation
                                baseVelocity={3}
                                scrollDependent={true}
                            >
                                Top-Tier Multimedia
                            </ScrollBaseAnimation>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 mx-auto'>
                    <div className="flex justify-between py-40">
                        <div className='w-[40%] relative'>
                            <div>
                                <NumberTicker className="font-Poppins text-xl md:text-9xl font-bold text-purple-700" value={20} />
                            </div>
                            <div className='absolute text-2xl left-0 pl-48 pt-4 top-0 text-purple-700 font-semibold'>
                                <h1>qualifiled<br />specialists</h1>
                            </div>
                        </div>
                        <div className='text-2xl w-[40%]'>
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti facilis modi ipsum excepturi minima commodi quibusdam? Numquam dolorum neque omnis reprehenderit vitae non eligendi quod consectetur, odit cumque! Quaerat, incidunt?</h1>
                        </div>
                    </div>

                    <div className="pb-60 grid grid-cols-5 font-bold">
                        <div className='relative'>
                            <div>
                                <NumberTicker className="font-Poppins text-7xl md:text-9xl text-black" value={50} />
                            </div>
                            <div className='text-2xl absolute left-0 pl-48 pt-4 top-0 text-black font-semibold'>
                                <h1>3d<br />designers</h1>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <NumberTicker className="font-Poppins text-7xl md:text-9xl text-black" value={80} />
                            </div>
                            <div className='text-2xl absolute left-0 pl-48 pt-4 top-0 text-black font-semibold'>
                                <h1>ux/ui<br />designers</h1>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <NumberTicker className="font-Poppins text-7xl md:text-9xl text-black" value={30} />
                            </div>
                            <div className='text-2xl absolute left-0 pl-48 pt-4 top-0 text-black font-semibold'>
                                <h1>front-end<br />developers</h1>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <NumberTicker className="font-Poppins text-7xl md:text-9xl text-black" value={24} />
                            </div>
                            <div className='text-2xl absolute left-0 pl-48 pt-4 top-0 text-black font-semibold'>
                                <h1>back-end<br />developers</h1>
                            </div>
                        </div>
                        <div className='relative'>
                            <div>
                                <NumberTicker className="font-Poppins text-7xl md:text-9xl text-black" value={84} />
                            </div>
                            <div className='text-2xl absolute left-0 pl-48 pt-4 top-0 text-black font-semibold'>
                                <h1>mobile<br />developers</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <Filter 
                categories={categories} 
                prices={prices} 
                brands={brands}
                categoryPlaceholder="Select Category"
                pricePlaceholder="Select Price Range"
                brandPlaceholder="Select Brand" />
                </div>
                <div className="py-10 bg-black">
                    <div className="w-11/12 mx-auto">
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                            <div>
                                <VideoPlayer videoUrl="/video/Teacher.mp4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
