"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollBaseAnimation from "@/components/ui/text.marquee";
import Admissions from "@/assets/img/Admission.jpg";
import InfoDetails from "@/components/InfoDetail/page";

type InfoData = {
    id: number;
    cards: {
        image: string;
        date: string;
        title: string;
        description: string;
    };
    info: {
        title: string;
        description: {
            first: string;
        };
        image: {
            first: string;
            second: string;
            third: string;
            fourth: string;
            fifth: string;
            sixth: string;
            seventh: string;
        };
    };
};

export default function Info() {
    const [info, setInfo] = useState<InfoData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data/info.json");
                console.log("Fetched data:", response.data); // เช็กว่าข้อมูลมาก่อน
                setInfo(response.data);
            } catch (error) {
                console.error("Error fetching info.json:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="bg-white h-full">
            <div className="w-11/12 mx-auto">
                <div className="pt-40 pb-20 flex flex-col md:flex-row justify-between">
                    <div className="w-full font-bold md:w-[60%] text-8xl">
                        {info && <h1>
                            we strive <br /> to innovate
                        </h1>}
                    </div>
                    <div className="w-full md:w-[40%] pt-4 md:pt-0 text-xl">
                        <h1>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, aut illo fuga ex
                            cumque, totam odio vel in, cum voluptas ducimus? Labore quos at voluptate
                            necessitatibus mollitia sint eum repellendus.
                        </h1>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center">
                <div className="w-11/12 mx-auto">
                    <div className="relative w-full h-[300px] md:h-[400px] 2xl:h-[900px] overflow-hidden">
                        <Image
                            src={Admissions}
                            className="w-full h-full object-cover rounded-full"
                            alt="test"
                            placeholder="blur"
                        />
                        <div className="absolute top-0 left-0 w-full h-full grid place-content-center">
                            <ScrollBaseAnimation baseVelocity={3} scrollDependent={true}>
                                &nbsp;・ Applied Computer Science Multimedia
                            </ScrollBaseAnimation>
                        </div>
                    </div>


                    <div>
                        <InfoDetails />
                    </div>
                </div>
            </div>
        </section>
    );
}
