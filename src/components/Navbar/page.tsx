import Image from "next/image";
import Logo from "@/assets/img/Logo.png";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            {/* Parent Container */}
            <div className="relative w-11/12 mx-auto">
                {/* Navbar with absolute position */}
                <div className="absolute top-0 left-0 w-full z-20">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo Section */}
                        <div>
                            <Image src={Logo} width={150} height={150} alt="Logo" />
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center text-white">
                            <Link className="px-3 border-l-2 border-white" href="">
                                หน้าหลัก
                            </Link>
                            <Link className="px-3 border-l-2 border-white" href="">
                                บุคลากร
                            </Link>
                            <Link className="px-3 border-l-2 border-white" href="">
                                หลักสูตร
                            </Link>
                            <Link className="px-3 border-l-2 border-white" href="">
                                บริการ
                            </Link>
                            <Link className="px-3 border-l-2 border-white" href="">
                                ข่าวสาร
                            </Link>
                            <Link className="px-3 border-l-2 border-white" href="">
                                ติดต่อเรา
                            </Link>
                            <div>
                                <Link
                                    className="bg-primary px-5 py-2 rounded-full text-white hover:bg-opacity-90"
                                    href=""
                                >
                                    สมัครเรียน
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
