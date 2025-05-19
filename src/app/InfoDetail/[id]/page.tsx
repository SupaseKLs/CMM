<<<<<<< HEAD
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface NewsItem {
  id: number;
  title: string;
  desFirst: string;
  desSecond: string;
  desThird: string;
  desFourth: string;
  desFifth: string;
  createdAt: string;
  coverImage: string;
  secondImage: string;
  thirdImage: string;
  fourthImage: string;
  fifthImage: string;
}

const InfoDetailPage: React.FC = () => {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  const projectUrl = "https://ggbvtgyrzwbrtkxbiorx.supabase.co/storage/v1/object/public";
  const bucketName = "imgnews/News"; 

  function getImageUrl(fileName: string) {
    return `${projectUrl}/${bucketName}/${fileName}`;
  }

  useEffect(() => {
    if (!id) return;

    axios.get(`/api/news/${id}`)
      .then(response => {
        setNews(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!news) return <div className="text-center py-20">ไม่พบข่าว</div>;

  return (
    <div className="w-11/12 md:w-6/12 mx-auto pt-20">

      {/* รูปปก */}
      {news.coverImage && (
        <div className="flex justify-center items-center mb-10">
          <Image
            src={getImageUrl(news.coverImage)}
            alt="รูปปก"
            width={800}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      )}

      {/* หัวข้อข่าว */}
      <h1 className="text-4xl font-bold mb-4">{news.title}</h1>

      {/* วันที่ */}
      <p className="text-gray-400 text-sm mb-6">
        {new Date(news.createdAt).toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      {/* เนื้อหาข่าว */}
      <div className="space-y-6 text-lg leading-7 mb-10">
        <p>{news.desFirst}</p>
        {news.secondImage && (
          <Image
            src={getImageUrl(news.secondImage)}
            alt="รูปที่ 2"
            width={800}
            height={400}
            className="rounded-lg object-cover my-6"
          />
        )}
        <p>{news.desSecond}</p>

        {news.thirdImage && (
          <Image
            src={getImageUrl(news.thirdImage)}
            alt="รูปที่ 3"
            width={800}
            height={400}
            className="rounded-lg object-cover my-6"
          />
        )}
        <p>{news.desThird}</p>

        {news.fourthImage && (
          <Image
            src={getImageUrl(news.fourthImage)}
            alt="รูปที่ 4"
            width={800}
            height={400}
            className="rounded-lg object-cover my-6"
          />
        )}
        <p>{news.desFourth}</p>

        {news.fifthImage && (
          <Image
            src={getImageUrl(news.fifthImage)}
            alt="รูปที่ 5"
            width={800}
            height={400}
            className="rounded-lg object-cover my-6"
          />
        )}
        <p>{news.desFifth}</p>
      </div>

    </div>
  );
};

export default InfoDetailPage;
=======
import { createClient } from '@supabase/supabase-js'

// สร้าง Supabase Client
const supabaseUrl = 'https://eldxcanxwvrnsvxkoaiv.supabase.co'  // ของคุณ
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZHhjYW54d3ZybnN2eGtvYWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MTU3MTgsImV4cCI6MjA2MTM5MTcxOH0.kieZ_9HbEFgZUqzIfoK9ae09BopPbcSXzjEFavk7GGI' // ของคุณ
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface PageProps {
  params: { id: string }
}

export default async function InfoDetailPage({ params }: PageProps) {
  const id = params.id

  // ดึงข้อมูลจาก Table: News
  const { data, error } = await supabase
    .from('News')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error(error)
    return <div>❌ เกิดข้อผิดพลาด: {error.message}</div>
  }

  if (!data) {
    return <div>⚠️ ไม่พบข้อมูลข่าว</div>
  }

  // รวม descriptions และ pictures
  const descriptions = [
    data.description1,
    data.description2,
    data.description3,
    data.description4,
    data.description5,
  ]

  const pictures = [
    data.picture1,
    data.picture2,
    data.picture3,
    data.picture4,
    data.picture5,
  ]

  return (
    <div className="text-white max-w-4xl mx-auto py-8 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      {/* Date */}
      <p className="text-white mb-6">{new Date(data.date).toLocaleDateString()}</p>

      {/* Descriptions */}
      {descriptions.map((desc, idx) => desc && (
        <p key={idx} className="mb-4 text-lg">{desc}</p>
      ))}

      {/* Pictures (URL มาเต็มอยู่แล้ว) */}
      {pictures.map((pic, idx) => (
        pic && (
          <div key={idx} className="mb-8">
            <img
              src={pic} // <<< ใช้ URL ตรงๆเลย
              alt={`Picture ${idx + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )
      ))}
    </div>
  )
}
>>>>>>> 6ee66b7 (add video db)
