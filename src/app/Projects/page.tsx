import React from 'react';
import ScrollBaseAnimation from '@/components/ui/text.marquee';
import Admissions from "@/assets/img/Admission.jpg";
import Image from 'next/image';
import Scroll_Perspective from "@/components/Scroll_Perspective/page"
import { TextAnimate } from "@/components/ui/text_animate"
import NumberTicker from '@/components/Counter/page';
import Filter from "@/components/Filter/page"
import VideoPlayer from '@/components/VideoPlayer/videoplayer';
function Projects() {
    return (
        <>
            <section className="bg-white h-full">
                <div className="w-11/12 mx-auto">
                    <div className='pt-60 pb-40 flex flex-col md:flex-row justify-between'>
                        <div className='font-semibold w-[80%] md:w-[25%] text-[12vw] md:text-6xl'>
                            <h1>We strive to innovate</h1>
                        </div>
                        <div className="text-[4vw] md:text-[1.7vw] w-[80%] md:w-[40%]">
                            <TextAnimate animation="blurInUp" by="character" once>
                                คำตอบสำหรับคนที่มีความฝันอยากสร้างอนาคตในสายเทคโนโลยีและมัลติมีเดียด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์สื่อมัลติมีเดียเข้าด้วยกันอย่างลงตัว
                            </TextAnimate>
                        </div>
                    </div>
                </div>
                <div className='relative flex justify-center'>
                    <div className="relative w-[90%] h-[200px] 2xl:h-[900px] overflow-hidden">
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
                    <div className="grid grid-col-1 md:grid-cols-2 py-40">
                        <div className='w-[40%] relative'>
                            <div>
                                <NumberTicker className="font-Poppins text-[15vw] md:text-9xl font-bold text-purple-700" value={20} />
                            </div>
                            <div className='absolute text-2xl left-0 pl-48 pt-4 top-0 text-purple-700 font-semibold'>
                                <h1>qualifiled<br />specialists</h1>
                            </div>
                        </div>
                        <div className="text-[4vw] md:text-[1.7vw] w-[80%] md:w-[40%]">
                            <TextAnimate animation="blurInUp" by="character" once>
                                คำตอบสำหรับคนที่มีความฝันอยากสร้างอนาคตในสายเทคโนโลยีและมัลติมีเดียด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์สื่อมัลติมีเดียเข้าด้วยกันอย่างลงตัว
                            </TextAnimate>
                        </div>
                    </div>
                </div>
                <div>
                    <Scroll_Perspective />
                </div>

            </section>
        </>
    );
}

export default Projects;
