"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Carousel from "@/components/Carousel/page"
import StickyCard from "@/components/StickyCard/page";
export default function HomePage() {

    const testimonials = [
        {
            quote:
                "Get in touch",
        },
        {
            quote:
                "Get in touch",
        },
        {
            quote:
                "Get in touch",
        },
        {
            quote:
                "Get in touch",
        },
        {
            quote:
                "Get in touch",
        },
    ];
    return (
        <>
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
                            <source src="/video/Homepagebg.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 mb-4">
                            <div className="w-11/12 mx-auto">
                                <div className="text-white text-[5vw] font-semibold">
                                    <h1>DIVISION OF COMPUTER AND INFORMATION TECHNOLOGY</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="bg-white h-full rounded-b-[50px] pb-20">
                <div className="w-11/12 mx-auto">
                    <div className="text-black max-w-[500px]">
                        <h1 className="pt-10 font-semibold uppercase text-xl">cmm kmutt</h1>
                        <p className="pt-4">ก้าวสู่โลกแห่งความคิดสร้างสรรค์และเทคโนโลยีที่ครบวงจรด้วยการเรียนรู้ทั้งการผลิตสื่อมัลติมีเดียการถ่ายภาพการจัดแสงและการตัดต่อวิดีโอที่มืออาชีพเลือกใช้พร้อมพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์โลกดิจิทัลอีกทั้งยังเสริมสร้างความสามารถในการพัฒนาเกมที่เต็มไปด้วยจินตนาการและความสนุกเรามุ่งเน้นการเรียนรู้ผ่านการปฏิบัติจริงพร้อมอุปกรณ์ทันสมัยและทีมผู้เชี่ยวชาญที่พร้อมสนับสนุนคุณในทุกก้าวของการสร้างสรรค์งาน!</p>
                    </div>

                    <div className="my-24 flex justify-center items-center">
                        <div className="rounded-xl w-80 h-96 bg-gray-400">
                            1
                        </div>
                        <div className="rounded-xl w-80 mx-10 h-96 bg-gray-400">
                            2
                        </div>
                        <div className="rounded-xl w-80 h-96 bg-gray-400">
                            3
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="text-[3vw] w-60 font-semibold">
                            <h1>เพลิดเพลินไปกับการเรียน</h1>
                        </div>
                        <div className="text-[1.4vw] w-[500px]">
                            <p>มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-11/12 mx-auto">
                    <div className="text-white pt-10">
                        <h1 className="text-[3vw]">เราเรียนเกี่ยวกับไรบ้าง</h1>
                        <p className="text-[1.3vw] w-7/12">มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</p>
                    </div>
                    <Carousel />
                </div>
            </section>

            <section className="h-full bg-white rounded-t-[50px] mt-40">
                <StickyCard />
                <div className="pt-10 w-11/12 mx-auto">
                    <div className="flex justify-between">
                        <div className="text-[2.2vw] font-semibold">
                            <h1>คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</h1>
                            <h1 className="text-gray-600">สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย</h1>
                        </div>
                        <div className="w-[500px]">
                            <p>คำตอบสำหรับคนที่มีความฝันอยากสร้างอนาคตในสายเทคโนโลยีและมัลติมีเดียด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์สื่อมัลติมีเดียเข้าด้วยกันอย่างลงตัว</p>
                        </div>
                    </div>
                    <div className="py-20 flex justify-center items-center">
                        <video
                            playsInline
                            autoPlay
                            loop
                            muted
                            className="w-full rounded-xl h-[500px] object-cover"
                        >
                            <source src="/video/Teacher.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            <section>
                <div className="rounded-md flex flex-col antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </section>
        </>
    )
}