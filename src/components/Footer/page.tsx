import Image from "next/image"
import Logo from "@/assets/img/Logo.png"
import Kmutt from "@/assets/img/Kmutt.png"
import Link from "next/link"
import Arrow_right from "@/assets/svg/arrow-right.svg"
import Multi from "@/assets/svg/multi.svg"
export default function Footer() {
    return (
        <footer className="pt-10 bg-[#0E0E0E] text-gray-800">
            <div className="mx-auto w-11/12">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h1 className="text-4xl uppercase text-[#535151] font-bold">get in touch</h1>
                        <div className="py-4 flex items-center text-white md:justify-center">
                            <Image src={Arrow_right} width={20} height={20} alt="arrow_right" />
                            <p className="pl-4 text-2xl">orgcomit@kmutt.ac.th</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="pr-10">
                            <h1 className="text-4xl text-[#535151] uppercase font-bold pb-4">Page</h1>
                            <div className="text-md text-white flex">
                                <ul>
                                    <li>
                                        <Link href="">หน้าหลัก</Link>
                                    </li>
                                    <li>
                                        <Link href="">บุคลากร</Link>
                                    </li>
                                    <li>
                                        <Link href="">หลักสูตร</Link>
                                    </li>
                                    <li>
                                        <Link href="">บริการ</Link>
                                    </li>
                                    <li>
                                        <Link href="">ข่าวสาร</Link>
                                    </li>
                                    <li>
                                        <Link href="">ติดต่อเรา</Link>
                                    </li>
                                </ul>
                                <ul className="px-4">
                                    <li>
                                        <Link href="">ปริญญาตรี</Link>
                                    </li>
                                    <li>
                                        <Link href="">ปริญญาโท</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-4xl text-[#535151] uppercase font-bold pb-4">contact</h1>
                            <ul className="text-md text-white">
                                <li><Link href="">Facebook</Link></li>
                                <li><Link href="">Instagram</Link></li>
                                <li><Link href="">Tiktok</Link></li>
                                <li><Link href="">Youtube</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-20 md:pt-0">
                    <h1 className="text-gray-600 text-2xl w-11/12 md:w-[860px]">Appiled Computer Science-Multimedia</h1>
                    <div className="pl-4 text-md w-full text-white">
                        <p>สาขาวิชาคอมพิวเตอร์และเทคโนโลยีสารสนเทศ คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี อาคารเรียนรวมชั้น 6 มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
                        <p>โทร. 02-470-8500</p>
                    </div>

                </div>
                <div className="pt-32">
                    <Image src={Multi} className="w-full" alt="" />
                </div>

                <div className="hidden md:flex justify-between text-2xl border-t-2 text-white items-center py-10">
                    <div className="flex space-x-8">
                        <Image src={Kmutt} width={40} height={10} alt="Multimedia" />
                        <Image src={Logo} width={130} height={10} alt="Multimedia" />
                    </div>
                    <div>
                        <h1>2024 © All rights reserved.</h1>
                    </div>
                    <div className="flex space-x-4">
                        <h1>Privacy Policy</h1>
                        <h1>Term and Conditions</h1>
                    </div>
                </div>

                <div className="md:hidden flex flex-col justify-between py-10">
                    <div className="flex space-x-8">
                        <Image src={Kmutt} className="w-12 h-12" alt="Multimedia" />
                        <Image src={Logo} className="w-auto h-12" alt="Multimedia" />
                    </div>
                    <div className="text-white flex flex-col">
                        <div className="py-2">
                            <h1>2024 © All rights reserved.</h1>
                        </div>
                        <div className="flex space-x-14">
                            <h1>Privacy Policy</h1>
                            <h1>Term and Conditions</h1>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}