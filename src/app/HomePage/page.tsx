"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Carousel from "@/components/Carousel/page"
import Workspace from "@/assets/img/Workspace.jpg"
import Services from "@/assets/img/Services.jpg"
import Admission from "@/assets/img/Admission.jpg"
import Parallax from "@/components/parallax/page"
import Image from "next/image";
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

            <section className="bg-white h-full rounded-b-[50px] py-60">
                <div className="w-11/12 mx-auto">
                    <div className="text-black w-11/12 md:w-8/12">
                        <h1 className="font-semibold uppercase text-2xl">MULTIMEDIA, KMUTT</h1>
                        <p className="pt-2 text-2xl">ก้าวสู่โลกแห่งความคิดสร้างสรรค์และเทคโนโลยีที่ครบวงจรด้วยการเรียนรู้ทั้งการผลิตสื่อมัลติมีเดียการถ่ายภาพการจัดแสงและการตัดต่อวิดีโอที่มืออาชีพเลือกใช้พร้อมพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์โลกดิจิทัลอีกทั้งยังเสริมสร้างความสามารถในการพัฒนาเกมที่เต็มไปด้วยจินตนาการและความสนุกเรามุ่งเน้นการเรียนรู้ผ่านการปฏิบัติจริงพร้อมอุปกรณ์ทันสมัยและทีมผู้เชี่ยวชาญที่พร้อมสนับสนุนคุณในทุกก้าวของการสร้างสรรค์งาน!</p>
                    </div>

                    <div className="my-60 flex flex-col md:flex-row w-full justify-center space-x-2 md:space-x-10 items-center">
                        <div className="relative rounded-xl w-96 h-[600px] bg-gray-400">
                            <Image src={Workspace} alt="Workspace" layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>

                        <div className="relative rounded-xl w-96 h-[600px] bg-gray-400">
                            <Image src={Services} alt="Services" layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>

                        <div className="relative rounded-xl w-96 h-[600px] bg-gray-400">
                            <Image src={Admission} alt="Admission   " layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="text-3xl md:text-6xl font-semibold">
                            <h1>เพลิดเพลิน<br />ไปกับการเรียน</h1>
                        </div>
                        <div className="w-11/12 md:w-4/12 text-2xl">
                            <p>มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-11/12 mx-auto">
                    <div className="text-white py-10">
                        <h1 className="text-4xl md:text-[3vw] pt-40 pb-8">เรียนอะไรบ้าง</h1>
                        <p className="text-xl md:text-2xl w-11/12 md:w-7/12">มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</p>
                    </div>
                    <Carousel />
                </div>
            </section>

            <section className="h-full bg-white rounded-t-[50px] mt-40 pt-10">
                <div className="pt-10 w-11/12 mx-auto">
                    <div className="text-gray-800 pt-40 pb-14">
                        <h1 className="text-4xl md:text-[3vw] font-semibold py-4">ผลงานชาวมัลติ</h1>
                        <p className="text-xl md:text-2xl w-11/12 md:w-6/12 pt-4">มหาวิทยาลัยมีหลักสูตรวิชาการนานาชาติที่หลากหลายให้เลือกเรียน ภาษาทางการ ได้แก่ อังกฤษ อิตาลี เยอรมัน และฝรั่งเศสซึ่งสร้างสภาพแวดล้อมที่สมบูรณ์แบบสำหรับการเรียนรู้และการวิจัยทางวิทยาศาสตร์</p>
                    </div>
                    <div className="grid my-10 grid-cols-[60%_40%]">
                        <Image className="rounded-xl" src={Admission} alt="img" />
                        <div className="p-4">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <p className="w-9/12 text-2xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                <div className="mt-20">
                                    <Link href=""
                                        className='pb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                                    >
                                        ดูผลงานเพิ่มเติม
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40%_60%]">
                        <div className="p-4">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <p className="w-9/12 text-2xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                <div className="mt-20">
                                    <Link href=""
                                        className='pb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                                    >
                                        ดูผลงานเพิ่มเติม
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div> <Image className="rounded-xl" src={Admission} alt="img" /></div>
                    </div>
                    <div className="grid my-10 grid-cols-[60%_40%]">
                        <Image className="rounded-xl" src={Admission} alt="img" />
                        <div className="p-4">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <p className="w-9/12 text-2xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                <div className="mt-20">
                                    <Link href=""
                                        className='pb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                                    >
                                        ดูผลงานเพิ่มเติม
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40%_60%]">
                        <div className="p-4">
                            <div className="w-full h-full flex flex-col justify-center items-center">
                                <p className="w-9/12 text-2xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                <div className="mt-20">
                                    <Link href=""
                                        className='pb-4 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                                    >
                                        ดูผลงานเพิ่มเติม
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div> <Image className="rounded-xl" src={Admission} alt="img" /></div>
                    </div>

                    <div className="flex flex-col pt-10 mt-40 md:mt-52 md:flex-row justify-between">
                        <div className="text-2xl md:text-4xl pb-3 font-semibold">
                            <h1>คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</h1>
                            <h1 className="text-gray-600">สาขาวิชาวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย</h1>
                        </div>
                        <div className="w-full text-xl md:text-2xl md:w-4/12">
                            <p>คำตอบสำหรับคนที่มีความฝันอยากสร้างอนาคตในสายเทคโนโลยีและมัลติมีเดียด้วยหลักสูตรที่ผสมผสานความรู้ด้านการพัฒนาเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์สื่อมัลติมีเดียเข้าด้วยกันอย่างลงตัว</p>
                        </div>
                    </div>
                    <div className="py-20 md:py-40 flex justify-center items-center">
                        <video
                            playsInline
                            autoPlay
                            loop
                            muted
                            className="w-full rounded-xl h-[300px] md:h-[650px] lg:h-[900px] object-cover"
                        >
                            <source src="/video/Teacher.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="rounded-md flex flex-col antialiased bg-primary dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </section> */}
        </>
    )
}