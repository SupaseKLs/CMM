import Members from "@/components/Carousel_member/page"
import Image from "next/image"
export default function Executive() {
    return (
        <>
            <div>
                <Image className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={800}     // ระบุความกว้างที่ต้องการ
                    height={600} alt="test" />
            </div>

            <div>
                <div className="px-4 lg:pl-16 h-full py-20 bg-black">
                    <Members />
                </div>
            </div>
        </>
    )
}
