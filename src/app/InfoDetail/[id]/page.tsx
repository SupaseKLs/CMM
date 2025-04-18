"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation'; 
import Calendar from "@/assets/svg/calendar.svg"
interface Info {
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
}

interface Card {
    image: string;
    date: string;
    title: string;
    description: string;
}

interface EventData {
    id: number;
    cards: Card;
    info: Info;
}

const InfoDetail: React.FC = () => {
    const { id } = useParams(); // this gives the dynamic [id]
    const [eventData, setEventData] = useState<EventData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get<EventData[]>(`/data/info.json`)
            .then(response => {
                const data = response.data;
                const selected = data.find(item => item.id === Number(id)); // Find by id
                if (selected) {
                    setEventData(selected);
                } else {
                    setError('Event not found');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading event data:", err);
                setError('Error loading event data');
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='bg-white'>
            <div className="w-11/12 md:w-6/12 mx-auto">
                <div className="pt-20 flex justify-center items-center">
                    <Image src={eventData?.cards.image || ''} alt='Event Image' width={800} height={400} className="mt-10 w-full h-auto rounded-lg" />
                </div>
                <div className="flex items-center pt-10">
                    <Image src={Calendar} alt='' />
                    <h2 className='text-xl ml-4'>{eventData?.cards.date}</h2>
                </div>

                <h1 className='text-4xl md:text-5xl py-4 font-bold mt-2'>{eventData?.cards.title}</h1>
                <p className='mt-2 text-xl pb-10'>{eventData?.info.description.first}</p>
                <Image src={eventData?.info.image.first || ''} alt='Event Image 1' width={300} height={200} className="w-full h-auto rounded-lg" />
                <p className='mt-2 text-xl py-10'>{eventData?.info.description.second}</p>
                <p className='text-xl'>{eventData?.info.description.third}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 pb-20'>
                    <Image src={eventData?.info.image.second || ''} alt='Event Image 2' width={300} height={200} className="w-full h-[250px] 2xl:h-[520px] rounded-lg" />
                    <Image src={eventData?.info.image.third || ''} alt='Event Image 3' width={300} height={200} className="w-full h-[250px]  2xl:h-[520px] rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default InfoDetail;
