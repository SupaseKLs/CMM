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
  detail: {
    first: string;
    second: string;
    third: string;
  };
}

const Home: React.FC = () => {
  const [work, setWork] = useState<WorkItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Assuming the ID is part of the URL, for example /work/1
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{work.name}</h1>
      <p className="text-gray-600">Industry: {work.industry}</p>
      <p className="text-gray-600">Year: {work.year}</p>
      <p className="text-gray-600">Product: {work.product}</p>
      <p className="mt-2">{work.detail.first}</p>
      <p className="mt-2">{work.detail.second}</p>
      <p className="mt-2">{work.detail.third}</p>

      {/* Show video if the URL is correct */}
      <div className="mt-4">
        <iframe
          width="100%"
          height="315"
          src={work.video.replace("watch?v=", "embed/")}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
