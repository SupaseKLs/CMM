import Marquee from "@/components/Marquee/page"
import Image from "next/image"
import ScrollBaseAnimation from "@/components/ui/textthesis";
import ThesisMember from "@/assets/img/p66.png"
import Sapsu from "@/assets/img/sapsu 1.png"
import Suti from "@/assets/img/Suti.png"
import Spon from "@/assets/img/spon.png"
export default function thesis() {
    return (
        <>
            <section className="bg-black">
                <div>
                    <div>
                        <Image object-cover src={ThesisMember} className="h-screen w-full object-cover" alt="" />
                    </div>
                   
                    <div className="relative w-full overflow-hidden h-screen">
                        <div
                            className="absolute bottom-0 -left-32 md:-left-60 w-[350px] md:w-[500px] 2xl:w-[700px] h-[350px] md:h-[500px] 2xl:h-[700px] rounded-full bg-[#237E6C] opacity-70 
            filter blur-3xl shadow-lg"
                        />
                        <div
                            className="absolute top-0 -left-32 md:-left-60 w-[350px] md:w-[500px] 2xl:w-[700px] h-[350px] md:h-[500px] 2xl:h-[700px] rounded-full bg-[#EF2D84] opacity-70 
            filter blur-3xl shadow-lg"
                        />
                        <div
                            className="absolute top-0 -right-32 md:-right-60 w-[350px] md:w-[500px] 2xl:w-[700px] h-[350px] md:h-[500px] 2xl:h-[700px] rounded-full bg-[#237E6C] opacity-70 
            filter blur-3xl shadow-lg"
                        />
                        <div
                            className="absolute bottom-0 -right-32 md:-right-60 w-[350px] md:w-[500px] 2xl:w-[700px] h-[350px] md:h-[500px] 2xl:h-[700px] rounded-full bg-[#EF2D84] opacity-70 
            filter blur-3xl shadow-lg"
                        />

                        <ScrollBaseAnimation clasname="text-black uppercase bg-white " baseVelocity={3} scrollDependent={true}>
                            MultiExibition &nbsp;   &nbsp;
                        </ScrollBaseAnimation>

                        <div className="absolute inset-0 flex justify-center items-center">
                            <Image src={Sapsu} className="w-[80%] md:w-[25%] h-auto" alt="" />
                        </div>
                    </div>

                    <div>
                        <Marquee />

                    </div>

                    <div>
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="pt-20 md:pt-60 text-2xl md:text-7xl font-bold text-white">Special Thanks</h1>
                            <Image src={Spon} className="w-[60%]" alt=""></Image>
                            <Image src={Suti} className="w-full " alt=""></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}