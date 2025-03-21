"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Define a TypeScript interface for member data
interface Member {
  id: string;
  image: string;
  name: {
    TH: string;
    EN: string;
  };
}

const CarouselSpacing = () => {
  const [members, setMembers] = useState<Member[]>([]);

  // Fetch members data from /data/members.json
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/members.json');
      const data = await response.json();
      setMembers(data);
    };

    fetchData();
  }, []);

  // Navigate to member's page
  const handleClick = (id: string) => {
    window.location.href = `/ExecutiveDetail/${id}`;
  };

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[3vw] text-white">หัวหน้าสาขาวิชา</h1>
      <div className="grid grid-cols-3">
        <div
          className="relative group overflow-hidden rounded-lg cursor-pointer"
          onClick={() => handleClick(members[0]?.id)}
        >
          <img
            className="w-full transition duration-300 group-hover:blur-md"
            src={members[0]?.image}
            alt={members[0]?.name.EN}
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <p className="absolute top-14 left-14 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">อาจารย์</p>
          <p className="absolute bottom-14 left-14 text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">{members[0]?.name.TH}</p>
        </div>
      </div>

      <h1 className="text-[3vw] text-white">คณาจารย์</h1>
      <div className="grid grid-cols-3 gap-10">
        {members.slice(1, 8).map((member) => (
          <div
            key={member.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleClick(member.id)}
          >
            <img
              className="w-full transition duration-300 group-hover:blur-md"
              src={member.image}
              alt={member.name.EN}
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <p className="absolute top-14 left-14 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">อาจารย์</p>
            <p className="absolute bottom-14 left-14 text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">{member.name.TH}</p>
          </div>
        ))}
      </div>

      <h1 className="text-[3vw] text-white">ฝ่ายสนับสนุน</h1>
      <div className="grid grid-cols-3 gap-10 justify-center">
        {members.slice(8).map((member) => (
          <div
            key={member.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleClick(member.id)}
          >
            <img
              className="w-full transition duration-300 group-hover:blur-md"
              src={member.image}
              alt={member.name.EN}
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <p className="absolute top-14 left-14 text-white text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">อาจารย์</p>
            <p className="absolute bottom-14 left-14 text-white text-6xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500">{member.name.TH}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSpacing;
