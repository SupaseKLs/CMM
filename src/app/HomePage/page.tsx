"use client";
import React, { useEffect } from "react";
import Carousel from "@/components/Carousel/page";
import { AuroraText } from "@/components/ui/aurora";
import Button from "@/components/ui/button";
import Counter from "@/components/Counter/page";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import "aos/dist/aos.css"; // นำเข้า AOS styles
import VideoScroller from "@/components/VideOnScroll/page";

export default function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // กำหนดความเร็วของการทำ animation
            easing: 'ease-in-out', // กำหนด easing ของ animation
            once: true, // ให้แสดงผลแค่ครั้งเดียว
        });
    }, []);

    return (
        <>
            <div>
                {/* <Parallax /> */}
            </div>
            <header>
                <div className="w-full">
                    <div className="relative">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="w-full h-screen object-cover"
                        >
                            <source
                                src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/8198509-hd_1920_1080_25fps.mp4?sv=2023-01-03&st=2025-03-12T04%3A42%3A52Z&se=2029-07-13T04%3A42%3A00Z&sr=b&sp=r&sig=9GzE54p4jn80XlqFiFcWRFOIkQzyKpRT1sn3W9ycew0%3D"
                                type="video/mp4"
                            />
                        </video>
                        <div className="absolute bottom-0 mb-4">
                            <div className="w-11/12 mx-auto">
                                <div className="text-white text-[8vw] md:text-[5vw] font-semibold">
                                    <h1>DIVISION OF COMPUTER AND INFORMATION TECHNOLOGY</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="bg-white h-full py-20">
                <div className="w-11/12 mx-auto">
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

                            <div className="text-[4vw] md:text-[1.7vw] w-[80%] md:w-[40%]" data-aos="fade-up">
                                ก้าวสู่โลกแห่งความคิดสร้างสรรค์และเทคโนโลยีที่ครบวงจรด้วยการเรียนรู้ทั้งการผลิตสื่อมัลติมีเดียการถ่ายภาพการจัดแสงและการตัดต่อวิดีโอที่มืออาชีพเลือกใช้พร้อมพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทยโลกดิจิทัลอีกทั้งยังเสริมสร้างความสามารถ
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-40">
                        {[
                            { src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3870&auto=format&fit=crop', label: 'ผลงานนักศึกษา' },
                            { src: 'https://images.unsplash.com/photo-1560264357-8d9202250f21?q=80&w=3000&auto=format&fit=crop', label: 'บริการ' },
                            { src: 'https://images.unsplash.com/photo-1590070302028-b9a00b0c5354?q=80&w=2262&auto=format=fit=crop', label: 'ข่าวสาร' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative w-full overflow-hidden rounded-md group"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-[500px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end pl-10 pb-6">
                                    <span className="text-white text-5xl font-semibold">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="font-semibold text-[6vw] w-full md:text-[2.5vw] md:w-[200px] 2xl:w-[350px]" data-aos="fade-up">
                            <h1>เพลิดเพลินไปกับการเรียน</h1>
                        </div>
                        <div className="text-[4vw] md:text-[1.7vw] w-[80%] md:w-[40%]" data-aos="fade-up">
                            มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-11/12 mx-auto">
                    <div className="py-20 text-white">
                        <h1 className="text-[6vw] md:text-[4vw]" data-aos="fade-up">เราเรียนเกี่ยวกับไรบ้าง</h1>
                        <h1 className="w-[80%} md:w-[50%] pt-10 text-[4vw] md:text-[1.8vw]" data-aos="fade-up">มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</h1>
                    </div>
                    <div className="my-20">
                        <Carousel />
                    </div>
                    <h1 className="text-6xl py-20 text-white">ผลงานนักศึกษา</h1>
                </div>
                <div className="relative">
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="w-full opacity-60 h-[800px] md:h-screen object-cover"
                    >
                        <source
                            src="https://cmmworkspace.blob.core.windows.net/cmmsource/Final%20Vidieo2.mp4?sv=2023-01-03&st=2025-03-12T04%3A41%3A39Z&se=2029-07-13T04%3A41%3A00Z&sr=b&sp=r&sig=zLfBseXGfT6YQFWAWR%2FIw%2Fbqo%2FV7uZ48NUHU1jXeYUA%3D"
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
                            <div>
                                <h1 className="text-white text-[8vw] md:text-[4vw] font-semibold">Explore to Project</h1>
                                <div className="my-10">
                                    <Button text="อ่านเพิ่มเติม" onClick={() => alert("Submitted!")} />
                                </div>
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
                            <h1>คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</h1>
                            <h1 className="text-gray-400 pt-2">สาขาวิชาวิทยาการคอมพิวเตอร์<br />ประยุกต์-มัลติมีเดีย</h1>
                        </div>
                        <div className="text-[4vw] md:text-[1.7vw] w-full md:w-[40%]" data-aos="fade-up">
                            คำตอบสำหรับคนที่มีความฝันอยากสร้างอนาคตในสายเทคโนโลยีและมัลติมีเดียด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์สื่อมัลติมีเดียเข้าด้วยกันอย่างลงตัว
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
