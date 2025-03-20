"use client";
import { useEffect, useState, useRef } from "react";
import { TextAnimate } from "@/components/ui/text_animate";
import ScrollBaseAnimation from "@/components/ui/text.marquee";
import NumberTicker from "@/components/Counter/page";

interface DataResponse {
  id: string;
  videoUrl: string; // YouTube video URL
  name: string; // Name or description
}

const VFXPage = () => {
  const [data, setData] = useState<DataResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [popupVideo, setPopupVideo] = useState<string | null>(null);

  const videoRefs = useRef<Map<string, HTMLIFrameElement>>(new Map());
  const [isHovered, setIsHovered] = useState<string | null>(null);

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

  const handleMouseEnter = (id: string) => {
    setIsHovered(id);
    const video = videoRefs.current.get(id);
    if (video) {
      video.src = video.src.replace("autoplay=0", "autoplay=1"); // Enable autoplay on hover
    }
  };

  const handleMouseLeave = (id: string) => {
    setIsHovered(null);
    const video = videoRefs.current.get(id);
    if (video) {
      video.src = video.src.replace("autoplay=1", "autoplay=0"); // Disable autoplay when mouse leaves
    }
  };

  const handleVideoClick = (videoUrl: string) => {
    setPopupVideo(videoUrl);
  };

  const closePopup = () => {
    setPopupVideo(null);
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="w-11/12 mx-auto">
      <div className="text-white pt-60 pb-20 md:pb-40 flex flex-col md:flex-row justify-between">
        <div className="font-semibold w-[60%] text-[10vw] md:text-8xl">
          <h1>We strive <br />to innovate</h1>
        </div>
        <div className="w-[80%] md:w-[40%] text-[3vw] md:text-[1.5vw]">
          <TextAnimate animation="blurInUp" by="character" once>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, aut illo fuga ex cumque, totam odio vel in, cum voluptas ducimus? Labore quos at voluptate necessitatibus mollitia sint eum repellendus.
          </TextAnimate>
        </div>
      </div>

      <div className="relative flex justify-center">
        <div className="relative w-[90%] h-[200px] 2xl:h-[900px] overflow-hidden">
          <img src="https://images.pexels.com/photos/5676744/pexels-photo-5676744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full h-full rounded-full" alt="test" />
          <div className="absolute top-0 left-0 w-full h-full grid place-content-center">
            <ScrollBaseAnimation baseVelocity={3} scrollDependent={true}>
              Top-Tier Multimedia
            </ScrollBaseAnimation>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-20 md:py-40">
        <div className="text-white text-[4vw] md:text-[5vw] w-[80%] md:w-[40%]">
          <TextAnimate animation="blurInUp" by="character" once>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, aut illo fuga ex cumque, totam odio vel in, cum voluptas ducimus? Labore quos at voluptate necessitatibus mollitia sint eum repellendus.
          </TextAnimate>
        </div>
      </div>

      {/* Update this section for mobile responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            {item.videoUrl ? (
              <div>
                <iframe
                  id={`video-${item.id}`}
                  ref={(el) => el && videoRefs.current.set(item.id, el)}
                  className="w-full h-auto cursor-pointer"
                  src={`${item.videoUrl}?autoplay=0`} // Add autoplay param for YouTube
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                  onClick={() => handleVideoClick(item.videoUrl)}
                />
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-4">No video available</p>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-blue-600">{item.name}</h3>
            </div>
          </div>
        ))}

        {popupVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={closePopup}>
            <div className="relative">
              <iframe
                src={`${popupVideo}?autoplay=1`}
                className="w-[80vw] h-[80vh]"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
              <button onClick={closePopup} className="absolute top-2 right-2 bg-white p-2 rounded-full">✖</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VFXPage;
