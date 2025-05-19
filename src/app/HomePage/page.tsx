"use client";
import React, { useEffect } from "react";
import Carousel from "@/components/Carousel/page";
import { AuroraText } from "@/components/ui/aurora";
import Button from "@/components/ui/button";
import Counter from "@/components/Counter/page";
import AOS from 'aos';
import Image from "next/image";
import "aos/dist/aos.css";
import VideoScroller from "@/components/VideOnScroll/page";

export default function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <header>
                <div className="w-full">
                    <div className="relative h-screen">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="w-full h-screen object-cover"
                        >
                            <source
                                src="https://eldxcanxwvrnsvxkoaiv.supabase.co/storage/v1/object/public/storage/Video/HomePage.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div className="absolute bottom-0 z-10 mb-4">
                            <div className="w-11/12 mx-auto">
                                <div className="text-white text-[8vw] md:text-[5vw] font-semibold">
                                    <h2>DIVISION OF COMPUTER AND INFORMATION TECHNOLOGY</h2>
                                </div>
                            </div>
                        </div>
                       <div className="absolute bottom-0 z-0 left-0 w-full h-96 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                    </div>
                </div>
            </header>

            <section className="bg-white h-full py-20">
                <div className="w-10/12 mx-auto">
                    <div>
                        <div className="py-20">
                            <div className="bg-black h-[2px]" />
                        </div>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="hidden md:block w-[80%] md:w-[60%]">
                                <h1 className="text-4xl font-bold tracking-tighter md:text-3xl lg:text-[3vw]">
                                    CMM KMUTT&nbsp;&nbsp;|&nbsp;&nbsp; <AuroraText>Multimedia</AuroraText>
                                </h1>
                            </div>
                            <div className="w-[80%] block md:hidden md:w-[60%]">
                                <h1 className="text-4xl font-bold tracking-tighter md:text-3xl lg:text-[3vw]">
                                    CMM KMUTT&nbsp;&nbsp;|&nbsp;&nbsp;
                                </h1>
                                <AuroraText className="text-[8vw] font-bold">Multimedia</AuroraText>
                            </div>

                            <div className="text-[4vw] md:text-[1.2vw] w-[80%] md:w-[40%]" data-aos="fade-up">
                                <p>เรียนรู้การผลิตสื่อมัลติมีเดียอย่างมืออาชีพ ทั้งการถ่ายภาพ การจัดแสง และการตัดต่อวิดีโอ พร้อมเสริมทักษะการออกแบบและพัฒนาเว็บไซต์ให้ทันสมัย พัฒนาความสามารถทั้งด้านเทคนิคและความคิดสร้างสรรค์ เพื่อก้าวสู่สายอาชีพยุคใหม่ได้อย่างมั่นใจ</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-40">
                        {[
                            { src: 'https://eldxcanxwvrnsvxkoaiv.supabase.co/storage/v1/object/public/storage/Image/work.jpg', label: 'ผลงานนักศึกษา', link: '/works' },
                            { src: 'https://eldxcanxwvrnsvxkoaiv.supabase.co/storage/v1/object/public/storage/Image/services.jpg', label: 'บริการ', link: '/Services' },
                            { src: 'https://eldxcanxwvrnsvxkoaiv.supabase.co/storage/v1/object/public/storage/Image/IMG_9136-Enhanced-NR.png', label: 'ข่าวสาร', link: '/Info' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative w-full h-auto overflow-hidden rounded-md group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <a href={item.link}>
                                    <Image
                                        src={item.src}
                                        width={800}
                                        height={800}
                                        alt={item.label}
                                        className="w-full h-[300px] 2xl:h-[500px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end pl-10 pb-6">
                                        <span className="text-white text-5xl font-semibold">{item.label}</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="font-semibold text-[6vw] w-full md:text-[2.5vw] md:w-[200px] 2xl:w-[350px]" data-aos="fade-up">
                            <h2>เพลิดเพลินไปกับการเรียน</h2>
                        </div>
                        <div className="text-[4vw] md:text-[1.2vw] w-[80%] md:w-[40%]" data-aos="fade-up">
                            สำหรับคนที่มีความสนใจในด้านเทคโนโลยีและมัลติมีเดีย นี่คือหลักสูตรที่ออกแบบมาเพื่อคุณ เรียนรู้การเขียนโปรแกรม พัฒนาเว็บไซต์ สร้างเกม ออกแบบแอนิเมชัน 2D/3D
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-11/12 mx-auto">
                    <div className="py-20 text-white">
                        <h2 className="text-[6vw] md:text-[4vw]" data-aos="fade-up">เราเรียนเกี่ยวกับไรบ้าง</h2>
                        <h2 className="w-[80%} md:w-[50%] pt-10 text-[4vw] md:text-[1.8vw]"></h2>
                    </div>
                    <div className="my-20">
                        <Carousel />
                    </div>
                    <h3 className="text-6xl py-20 text-white">ผลงานนักศึกษา</h3>
                </div>
                <div className="relative">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="w-full opacity-80 h-[800px] md:h-screen object-cover"
                    >
                        <source
                            src="/video/thesis.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute top-0 mt-12 w-full">
                        <div className="w-11/12 mx-auto">
                            <div className="text-white font-semibold grid grid-cols-3 gap-10">
                                <div className="flex justify-center items-center">
                                    <div className="text-white text-[8vw] md:text-[5vw]">
                                        <Counter value={20} />+
                                    </div>
                                </div>
                                <div className="border-l-4 flex justify-center items-center">
                                    <div className="text-white text-[8vw] md:text-[5vw]">
                                        <Counter value={120} />+
                                    </div>
                                </div>
                                <div className="border-l-4 flex justify-center items-center">
                                    <div className="text-white text-[8vw] md:text-[5vw]">
                                        <Counter value={220} />+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 mb-12 w-full">
                        <div className="w-11/12 mx-auto">
                            <h2 className="text-white text-[8vw] md:text-[4vw] font-semibold">Explore to Project</h2>
                            <div className="my-10">
                                <Button text="อ่านเพิ่มเติม" onClick={() => alert("Submitted!")} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <VideoScroller />
            </div>

            <section className="bg-white h-full">
                <div className="w-11/12 mx-auto">
                    <div className="pt-20 md:pt-60 flex flex-col md:flex-row justify-between">
                        <div className="text-[5vw] md:text-[2vw] font-bold" data-aos="fade-up">
                            <h2 className="text-black pt-2">สาขาวิชาวิทยาการคอมพิวเตอร์<br />ประยุกต์-มัลติมีเดีย</h2>
                        </div>
                        <div className="text-[4vw] md:text-[1.2vw] w-full md:w-[40%]" data-aos="fade-up">
                            จุดเริ่มต้นสำหรับผู้มีความฝันในสายเทคโนโลยีและมัลติมีเดีย ด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์กับการสร้างสรรค์สื่อมัลติมีเดีย เปิดโอกาสให้คุณได้เรียนรู้ สร้างสรรค์ และเติบโตไปพร้อมกับอนาคตแห่งโลกดิจิทัล
                        </div>
                    </div>
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="py-20 md:py-40 w-full h-full md:h-[800px] 2xl:h-[1200px] rounded-xl object-cover"
                    >
                        <source
                            src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/3256542-uhd_3840_2160_25fps.mp4?sv=2023-01-03&st=2025-03-12T04%3A44%3A48Z&se=2029-06-13T04%3A44%3A00Z&sr=b&sp=r&sig=SylGBn%2F8ilCRf6b0Ozd9UnzZnDQkNA7N%2FZ4H%2BQtO%2B64%3D"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </section>
        </>
    );
}
