"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // for App Router
import Link from 'next/link'; // assuming you have Link for routing

// Define the structure based on your members.json data

interface Educational {
  bachelor: {
    field: string;
    university: string;
  };
  graduate: {
    field: string;
    university: string;
  };
  master: {
    field: string;
    university: string;
  };
}

interface Expertise {
  first: string;
  second: string;
  third: string;
}

interface WorkExperience {
  first: {
    period: string;
    position: string;
  };
}

interface Publications {
  first: string;
  second: string;
}

interface Member {
  id: number;
  name: {
    TH: string;
    EN: string;
  };
  image: string;
  position: string;
  email: string;
  educational: Educational;
  expertise: Expertise;
  work_experience: WorkExperience;
  publications: Publications;
  certification: Record<string, any>;
}

const InfoDetail: React.FC = () => {
  const { id } = useParams(); // This gives the dynamic [id]
  const [memberData, setMemberData] = useState<Member | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Safe getter to handle potential null/undefined values
  const safeGet = (value: string | undefined | null) => (value ? value : "ข้อมูลไม่ครบถ้วน");

  useEffect(() => {
    axios.get<Member[]>(`/data/members.json`)
      .then(response => {
        const data = response.data;
        const selected = data.find(item => item.id === Number(id)); // Find by id
        if (selected) {
          setMemberData(selected);
        } else {
          setError('Member not found');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading member data:", err);
        setError('Error loading member data');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='bg-white'>
      {/* Header */}
      <div className="bg-green-200 h-80 pt-20 md:h-full grid grid-cols-[80%_20%]">
    <div>
      
    </div>
        <div>
          <Image width={500} height={500} src={memberData?.image || ''} alt='Profile Image' />
        </div>
      </div>

      {/* About */}
      <div className="mt-10 lg:mt-20">
        <div className="w-11/12 mx-auto h-full bg-white flex flex-col-reverse lg:flex-row">
          <div className='w-full lg:w-[70%] pb-10 mx-auto'>
            <div className="w-full px-5 lg:px-20 h-full flex flex-col justify-center text-center">
              <h1 className='text-3xl lg:text-5xl'>
                <div className='flex flex-col text-xl md:text-5xl justify-center items-center'>
                  <h1>{safeGet(memberData?.name?.TH)}</h1>
                  <h1>{safeGet(memberData?.name?.EN)}</h1>
                </div>
              </h1>
              <div className="flex justify-start mt-4">
                <Link className='mt-10 border-2 text-xl border-black rounded-full px-16 py-4 transition-all duration-300 hover:bg-black hover:text-white' href="">
                  ติดต่อฉัน
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[30%] py-20'>
            <div>
              <h1 className='text-xl'>ชื่อ</h1>
              <h1 className='border-b-2 border-black text-2xl font-semibold pb-2'>{safeGet(memberData?.name?.TH)}</h1>
            </div>
            <div>
              <h1 className='pt-12 text-xl'>ตำแหน่ง</h1>
              <h1 className='border-b-2 border-black text-2xl font-semibold pb-2'>{safeGet(memberData?.position)}</h1>
            </div>
            <div>
              <h1 className='pt-12 pb-6 text-xl'>ความเชี่ยวชาญ</h1>
              <div className="flex flex-wrap gap-4 justify-start">
                {[
                  memberData?.expertise.first,
                  memberData?.expertise.second,
                  memberData?.expertise.third
                ].map((item, index) => item && (
                  <h1 key={index} className="border-2 transition-all duration-300 hover:bg-black hover:text-white text-2xl border-black rounded-full px-4 py-3">
                    {item}
                  </h1>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className='h-full bg-gray-100'>
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col lg:flex-row justify-between pt-20">
              <div>
                <h1 className='text-2xl border-2 px-4 py-2 mb-10 border-black rounded-full w-[200px] text-center'>
                  ประวัติการศึกษา
                </h1>
              </div>
              <div className='pl-0 lg:pl-96'>
                <p className='w-11/12 lg:w-10/12 text-3xl lg:text-4xl'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos assumenda ipsum est harum pariatur velit...
                </p>
              </div>
            </div>

            <div className="grid grid-col-1 lg:grid-cols-3 gap-10">
              {[
                { level: 'ปริญญาตรี', field: memberData?.educational.bachelor.field, university: memberData?.educational.bachelor.university },
                { level: 'ปริญญาโท', field: memberData?.educational.graduate.field, university: memberData?.educational.graduate.university },
                { level: 'ปริญญาเอก', field: memberData?.educational.master.field, university: memberData?.educational.master.university },
              ].map((edu, index) => (
                <div key={index} className='my-10 lg:my-20 relative bg-white rounded-xl h-96'>
                  <div className="absolute bottom-0 pb-8 pl-6">
                    <h1 className='text-4xl font-semibold'>{edu.level}</h1>
                    <h1 className='text-xl'>{safeGet(edu.university)}</h1>
                    <p>{safeGet(edu.field)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="bg-[#202020] py-20">
          <div className="w-11/12 mx-auto">
            <div className="flex justify-between">
              <div>
                <h1 className="text-2xl border-2 px-4 py-2 mb-10 border-white text-white rounded-full w-[250px] text-center">
                  ประวัติการทำงาน
                </h1>
              </div>
              <div>
                {[
                  { position: memberData?.work_experience.first.position, period: memberData?.work_experience.first.period }
                ].map((exp, index) => (
                  <div key={index} className="pl-16">
                    <h2 className="text-white text-xl font-semibold">{exp.position}</h2>
                    <p className="text-gray-300 mt-2">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="w-11/12 mx-auto py-20">
          <h1 className="text-3xl mb-6">ผลงานวิจัย</h1>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            {[
              memberData?.publications.first,
              memberData?.publications.second
            ].map((pub, index) => pub && (
              <li key={index}>{pub}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoDetail;
