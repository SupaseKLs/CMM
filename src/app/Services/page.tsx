import Link from "next/link"
import Image from "next/image"
import TabPanel from "@/components/TabPanel/page"
import Download from "@/assets/svg/download.svg"
export default function Services() {
    return (
        <>
            <section className="bg-white h-full">

                {/* <img src="https://executivemembers.file.core.windows.net/executive/Screenshot%202025-02-06%20133214.png?sp=r&st=2025-02-11T10:06:51Z&se=2025-02-12T10:06:51Z&sv=2022-11-02&sig=5knQsyutevgN21%2B8X%2BwhvC3YTMDw3LkJuNmufmu2BVk%3D&sr=f" alt="" /> */}

                <video
                    playsInline
                    autoPlay
                    muted
                    loop
                >
                    <source src="https://executivemembers.file.core.windows.net/executive/2887463-hd_1920_1080_25fps.mp4?sp=r&st=2025-02-11T10:41:53Z&se=2030-02-12T10:41:00Z&sv=2022-11-02&sig=hYGanDs8HU0L9%2FEcwboVA2kQ77jSbdJcGldZGQCwugk%3D&sr=f" type="video/mp4" />
                </video>
                <div className="w-11/12 mx-auto">
                    <div className="py-20 flex justify-between">
                        <div className="text-6xl w-[40%]">
                            <h1>บริการของ<br />ทาง Multimedia</h1>
                        </div>
                        <div className="w-[40%]">
                            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni numquam architecto repellat vel laboriosam, quaerat amet dignissimos, cum consectetur laudantium, fugiat provident earum minus ducimus sint laborum. Itaque, corporis.</h1>
                        </div>
                    </div>
                    <TabPanel />
                </div>
                <div className="w-11/12 mx-auto pb-20">
                    <div className="flex py-4 duration-300 ease-in-out hover:bg-gray-100 hover:underline border-b-2 border-black">
                        <Image src={Download} width={30} height={30} alt="download" />
                        <Link
                            target='_blank'
                            href="/Resume.pdf"
                            className="text-xl text-blue-800 font-semibold pl-6"
                        >ฐานข้อมูลบริษัทฝึกงานของ CMM</Link>
                    </div>
                    <div className="flex py-4 duration-300 ease-in-out hover:bg-gray-100 hover:underline border-b-2 border-black">
                        <Image src={Download} width={30} height={30} alt="download" />
                        <Link
                            target='_blank'
                            href="/Resume.pdf"
                            className="text-xl text-blue-800 font-semibold pl-6"
                        >ใบลาป่วย / ลากิจ</Link>
                    </div>
                    <div className="flex py-4 duration-300 ease-in-out hover:bg-gray-100 hover:underline border-b-2 border-black">
                        <Image src={Download} width={30} height={30} alt="download" />
                        <Link
                            target='_blank'
                            href="/Resume.pdf"
                            className="text-xl text-blue-800 font-semibold pl-6"
                        >เอกสารอื่นๆ...   </Link>
                    </div>
                    <div className="flex py-4 duration-300 ease-in-out hover:bg-gray-100 hover:underline border-b-2 border-black">
                        <Image src={Download} width={30} height={30} alt="download" />
                        <Link
                            target='_blank'
                            href="/Resume.pdf"
                            className="text-xl text-blue-800 font-semibold pl-6"
                        >เอกสารอื่นๆ...   </Link>
                    </div>
                    <div className="flex py-4 duration-300 ease-in-out hover:bg-gray-100 hover:underline border-b-2 border-black">
                        <Image src={Download} width={30} height={30} alt="download" />
                        <Link
                            target='_blank'
                            href="/Resume.pdf"
                            className="text-xl text-blue-800 font-semibold pl-6"
                        >เอกสารอื่นๆ...   </Link>
                    </div>
                    <div className="flex py-4 duration-300 ease-in-out hover:bg-gray-100 hover:underline border-b-2 border-black">
                        <Image src={Download} width={30} height={30} alt="download" />
                        <Link
                            target='_blank'
                            href="/Resume.pdf"
                            className="text-xl text-blue-800 font-semibold pl-6"
                        >เอกสารอื่นๆ...   </Link>
                    </div>

                </div>

            </section>
        </>
    )
}