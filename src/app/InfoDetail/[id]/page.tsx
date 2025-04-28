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
