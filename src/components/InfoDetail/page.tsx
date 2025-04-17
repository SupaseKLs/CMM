"use client";
import { useEffect, useState } from 'react';

// Define a TypeScript interface for the info data
interface InfoData {
  id: string;
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
      second: string;
      third: string;
    };
    image: {
      first: string;
      second: string;
      third: string;
    };
  };
}

const CarouselSpacing = () => {
  const [Info, setInfo] = useState<InfoData[]>([]);

  // Fetch info data from /data/info.json
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/info.json');
      const data = await response.json();
      setInfo(data);
    };

    fetchData();
  }, []);

  // Handle click and navigate to the detail page based on id
  const handleClick = (id: string) => {
    // Change window location to the corresponding detail page
    window.location.href = `/InfoDetail/${id}`;
  };

  if (Info.length === 0) {
    return <div>Loading...</div>; // Show loading state if data hasn't been fetched yet
  }

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[3vw] text-white">หัวหน้าสาขาวิชา</h1>

      {/* Display a list of info */}
      <h2 className="text-[2vw] text-white">ข้อมูลทั้งหมด</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Info.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden cursor-pointer"
            onClick={() => handleClick(item.id)} // Use handleClick with id for dynamic routing
          >
            <div className="relative overflow-hidden">
              <img
                className="w-full h-auto md:h-[500px] rounded-lg transition duration-300 group-hover:blur-sm"
                src={item.cards.image}
                alt={item.cards.title}
              />
            </div>

            {/* Text content */}
            <div className="p-4">
              <h2 className="text-black text-2xl font-semibold">{item.cards.title}</h2>
              <p className="text-black text-lg">{item.cards.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSpacing;
