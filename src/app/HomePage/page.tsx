"use client";
import React, { useEffect, useState } from "react";
import Carousel from "@/components/Carousel/page"
import Image from "next/image";
import Link from "next/link";
export default function HomePage() {
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
                            <source src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/8198509-hd_1920_1080_25fps.mp4?sv=2023-01-03&st=2025-03-12T04%3A42%3A52Z&se=2029-07-13T04%3A42%3A00Z&sr=b&sp=r&sig=9GzE54p4jn80XlqFiFcWRFOIkQzyKpRT1sn3W9ycew0%3D" type="video/mp4" />
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

            <section className="bg-white h-full py-20">
                <div className="w-11/12 mx-auto">
                    <div>
                        <div className="py-20">
                            <div className="bg-black h-1" />
                        </div>
                        <div className="flex justify-between">
                            <div className="text-2xl w-[60%]">
                                <h1>CMM KMUTT | Multimedia</h1>
                            </div>

                            <div className="text-2xl w-[40%]">
                                <h1>ก้าวสู่โลกแห่งความคิดสร้างสรรค์และเทคโนโลยีที่ครบวงจรด้วยการเรียนรู้ทั้งการผลิตสื่อมัลติมีเดียการถ่ายภาพการจัดแสงและการตัดต่อวิดีโอที่มืออาชีพเลือกใช้พร้อมพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทยโลกดิจิทัลอีกทั้งยังเสริมสร้างความสามารถ</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-40">
                        <Image src="https://videowebsite1.file.core.windows.net/image/images.jpg?sp=r&st=2025-03-05T07:15:26Z&se=2025-03-06T07:15:26Z&spr=https&sv=2022-11-02&sig=VaQ%2FuXPRg%2F1KG379RwMbxeYwvuu8NA9J6%2FzV38XO1PY%3D&sr=f" width={750} height={750} alt="test" />
                        <Image src="https://videowebsite1.file.core.windows.net/image/images.jpg?sp=r&st=2025-03-05T07:15:26Z&se=2025-03-06T07:15:26Z&spr=https&sv=2022-11-02&sig=VaQ%2FuXPRg%2F1KG379RwMbxeYwvuu8NA9J6%2FzV38XO1PY%3D&sr=f" width={750} height={750} alt="test" />
                        <Image src="https://videowebsite1.file.core.windows.net/image/images.jpg?sp=r&st=2025-03-05T07:15:26Z&se=2025-03-06T07:15:26Z&spr=https&sv=2022-11-02&sig=VaQ%2FuXPRg%2F1KG379RwMbxeYwvuu8NA9J6%2FzV38XO1PY%3D&sr=f" width={750} height={750} alt="test" />
                    </div>

                    <div className="flex justify-between">
                        <div className="font-semibold text-5xl w-[280px]">
                            <h1>เพลิดเพลินไปกับการเรียน</h1>
                        </div>
                        <div className="text-2xl w-[30%]">
                            <h1>มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-11/12 mx-auto">
                    <div className="py-20 text-white">
                        <h1 className="text-6xl">เราเรียนเกี่ยวกับไรบ้าง</h1>
                        <h1 className="text-2xl">มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</h1>
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
                        className="w-full opacity-60 h-screen object-cover"
                    >
                        <source
                            src="https://cmmworkspace.blob.core.windows.net/cmmsource/Final%20Vidieo2.mp4?sv=2023-01-03&st=2025-03-12T04%3A41%3A39Z&se=2029-07-13T04%3A41%3A00Z&sr=b&sp=r&sig=zLfBseXGfT6YQFWAWR%2FIw%2Fbqo%2FV7uZ48NUHU1jXeYUA%3D"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute top-0 mt-24 w-full">
                        <div className="w-11/12 mx-auto">
                            <div className="text-white font-semibold grid grid-cols-3 gap-10">
                                <div className="flex justify-center items-center">
                                    <h1 className="text-9xl">840+</h1>
                                </div>
                                <div className="border-l-4 flex justify-center items-center">
                                    <h1 className="text-9xl">99%</h1>
                                </div>
                                <div className="border-l-4 flex justify-center items-center">
                                    <h1 className="text-9xl">240+</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 mb-24 w-full">
                        <div className="w-11/12 mx-auto">
                            <div>
                                <h1 className="text-white text-8xl font-semibold">Explore to Project</h1>
                                <div className="my-20">
                                    <Link href="" className="bg-white py-6 px-12 text-xl rounded-md">Explore Work</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white h-full">
                <div className="w-11/12 mx-auto">
                    <div className="pt-60 flex justify-between">
                        <div className="text-5xl font-semibold">
                            <h1>คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</h1>
                            <h1 className="text-gray-400 pt-6">สาขาวิชาวิทยาการคอมพิวเตอร์<br />ประยุกต์-มัลติมีเดีย</h1>
                        </div>
                        <div className="text-2xl w-[30%]">
                            <h1>คำตอบสำหรับคนที่มีความฝันอยากสร้างอนาคตในสายเทคโนโลยีและมัลติมีเดียด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์สื่อมัลติมีเดียเข้าด้วยกันอย่างลงตัว</h1>
                        </div>

                    </div>
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        className="py-40 w-full h-[1200px] rounded-xl object-cover"
                    >
                        <source
                            src="https://cmmworkspace.blob.core.windows.net/cmmsource/CMM/3256542-uhd_3840_2160_25fps.mp4?sv=2023-01-03&st=2025-03-12T04%3A44%3A48Z&se=2029-06-13T04%3A44%3A00Z&sr=b&sp=r&sig=SylGBn%2F8ilCRf6b0Ozd9UnzZnDQkNA7N%2FZ4H%2BQtO%2B64%3D"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </section>
        </>
    )
}