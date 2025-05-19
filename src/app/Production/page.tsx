"use client";
import { useRef } from "react"
import { TimelineContent } from "@/components/motion-timeline/page"
import type { Variants } from "motion/react"
import { useEffect, useState } from "react";
import ScrollBaseAnimation from "@/components/ui/text.marquee";
import Image from "next/image";
import Dara from "@/assets/img/dara.png"
import BtnProduction from "@/components/ui/btnproduction"
interface DataResponse {
  id: string;
  videoUrl: string;
  name: string;
}

const VFXPage = () => {
  const [data, setData] = useState<DataResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const heroRef = useRef(null)

  // Subtle reveal animation
  const revealVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hidden: {
      opacity: 0,
      y: 15,
    },
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/production.json");
        if (!response.ok) throw new Error("Failed to fetch data");
        const result: DataResponse[] = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
      <div className="w-11/12 mx-auto">
        <div ref={heroRef} className="text-white pt-60 pb-20 md:pb-40 flex flex-col md:flex-row justify-between">
          <div className="font-semibold w-[60%] text-[10vw] md:text-8xl">
            <h1>We strive <br />to innovate</h1>
          </div>
          <div className="w-[80%] md:w-[40%] text-[3vw] md:text-[1.5vw]">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-[90%] h-[800px] overflow-hidden">
            <Image src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg" className="w-full h-full rounded-full" alt="test" />
            <div className="absolute top-0 left-0 w-full h-full grid place-content-center">
              <ScrollBaseAnimation baseVelocity={3} scrollDependent={true}>
                Top-Tier Multimedia
              </ScrollBaseAnimation>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 py-20 md:py-40">
          {data.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden shadow-lg">
              {item.videoUrl ? (
                <iframe
                  className="w-full h-96"
                  src={`${item.videoUrl}?autoplay=0`}
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                />
              ) : (
                <p className="text-center text-gray-500 mt-4">No video available</p>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div ref={heroRef} className="flex">
          <div className="text-white w-[40%]">
            <TimelineContent
              as="h1"
              animationNum={0}
              timelineRef={heroRef}
              variants={revealVariants}
              className="text-4xl md:text-6xl font-medium mb-4 max-w-2xl"

            >Heading
            </TimelineContent>
            <TimelineContent
              as="p"
              animationNum={0}
              timelineRef={heroRef}
              variants={revealVariants}
              className="text-4xl md:text-2xl font-medium mb-4 max-w-2xl"

            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius voluptas itaque ratione odit animi pariatur at quidem aut ipsa nostrum nihil minima dolore, quis nisi vel, similique placeat neque!
            </TimelineContent>
            <div>
              <BtnProduction />
            </div>
          </div>
          <div className="w-[60%]">
            <Image src={Dara} width={990} alt="" />
          </div>
        </div>
      </div>
   
  );
};

export default VFXPage;