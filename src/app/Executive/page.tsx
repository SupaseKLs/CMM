import Members from "@/components/Carousel_member/page"
import Image from "next/image"
import Services from "@/assets/img/Services.jpg"
export default function Executive() {
    return (
        <>
            <div>
                <Image className="h-screen" src={Services} alt="test" />
            </div>
            <div>
                <div className="px-4 lg:pl-16 h-full py-4 bg-gray-300">
                    <Members />
                </div>
            </div>
        </>
    )
}
