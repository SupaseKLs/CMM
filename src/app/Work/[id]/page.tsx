"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface WorkItem {
  id: number;
  name: string;
  industry: string;
  year: string;
  product: string;
  video: string;
  categories: {
    first: string;
    second: string;
    third: string;
  };
  image: {
    first: string;
    second: string;
    third: string;
  };
  detail: {
    first: string;
    second: string;
    third: string;
  };
}

const Work: React.FC = () => {
  const [work, setWork] = useState<WorkItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const workId = window.location.pathname.split("/").pop(); // Extract the ID from the URL

  useEffect(() => {
    if (!workId) {
      setError("No ID provided in the URL");
      setLoading(false);
      return;
    }

    axios
      .get<WorkItem[]>("/testwork.json")
      .then((response) => {
        const selectedWork = response.data.find((item) => item.id === parseInt(workId)) || null;
        setWork(selectedWork);
        setLoading(false);
        console.log("Video URL:", selectedWork?.video);  // Display video link
      })
      .catch((err) => {
        console.error("Error loading work data:", err);
        setError("Error loading work data");
        setLoading(false);
      });
  }, [workId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!work) return <div>No data available for ID {workId}</div>;

  const firstDetail = work.detail.first;
  const SecondDetail = work.detail.second;
  const ThirdDetail = work.detail.third;

  const mappedCategories = Object.values(work.categories).map((category) => category.toUpperCase());
  const mappedImages = Object.values(work.image);

  const imagesToDisplay = mappedImages.slice(1, 3);

  return (
    <div className="bg-white h-full">
      <div className="w-11/12 mx-auto">
        <div className="pt-60 pb-10 text-left font-semibold text-8xl w-[40%]">
          <h1>{work.name}</h1>
        </div>

        <div className="mt-4">
          <iframe
            width="100%"
            height={1000}
            src={work.video.replace("watch?v=", "embed/")}
            title="YouTube video"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        <div className="flex justify-between py-20 w-full">
          <div className="flex gap-10 w-[40%]">
            <div>
              <h1 className="text-gray-500">Industry</h1>
              <h1 className="text-2xl">{work.industry}</h1>
            </div>
            <div>
              <h1 className="text-gray-500">Year</h1>
              <h1 className="text-2xl">{work.year}</h1>
            </div>
            <div>
              <h1 className="text-gray-500">Product</h1>
              <h1 className="text-2xl">{work.product}</h1>
            </div>
          </div>
          <div className="pl-20 w-[60%]">
            <h1 className="text-5xl">{firstDetail}</h1>
          </div>
        </div>
      {/* Display Images 2 and 3 */}
      <div className="mt-8 flex items-center justify-center gap-20">
        {imagesToDisplay.map((image, index) => (
          <div key={index} className="mb-6">
            <img src={image} alt={`Image ${index + 2}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2">
        <div>

        </div>
        <div>
          <h1 className="py-20  text-5xl">{ThirdDetail}</h1>
        </div>

        <div>
          <h1>our more project</h1>
        </div>
      </div>
      </div>


    </div>
  );
};

export default Work;
