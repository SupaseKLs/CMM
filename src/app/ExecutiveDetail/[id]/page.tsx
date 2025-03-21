"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Chanin from "@/assets/img/CHANIN.jpg";
import Link from 'next/link';
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
    second: {
        period: string;
        position: string;
    };
}

interface User {
    id: string;
    name: {
        TH: string;
        EN: string;
    };
    position: string;
    email: string;
    educational: Educational;
    expertise: Expertise;
    work_experience: WorkExperience;
    certification: any;
}

const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();
    const { id } = router.query; // Get the ID from the URL

    useEffect(() => {
        if (!id) return; // If there's no ID in the URL, do not fetch data

        // Fetch the data for the user based on the ID
        axios.get<User[]>(`/test.json`)
            .then(response => {
                console.log("Fetched user data:", response.data); // Log fetched user data

                const fetchedUser = response.data.find(user => user.id === id); // Find the user by ID
                if (fetchedUser) {
                    setUser(fetchedUser);
                } else {
                    console.log("User not found");
                    setError('User not found');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading user data:", err);
                setError('Error loading user data');
                setLoading(false);
            });
    }, [id]); // Re-fetch if the ID changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    // Log the user data once it is loaded
    console.log("User data in state:", user);

    // Ensure fallback values for empty fields
    const safeGet = (value: string, fallback: string = 'N/A') => value || fallback;

    // Extract expertise values from the user object
    const expertiseValues = Object.values(user?.expertise || {});

    return (
        <>
            <div className='bg-white'>
                <div className="bg-green-200 h-80 md:h-full grid grid-cols-[80%_20%]">
                    <div className='flex flex-col text-xl md:text-5xl justify-center items-center'>
                        <h1>{safeGet(user?.name?.TH || '')}</h1>
                        <h1>{safeGet(user?.name?.EN || '')}</h1>
                    </div>
                    <div>
                        <Image height={500} src={Chanin} alt='test' />
                    </div>
                </div>
                <div className="mt-10 lg:mt-20">
                    <div className="w-11/12 mx-auto h-full bg-white flex flex-col-reverse lg:flex-row">
                        <div className='w-full lg:w-[70%] pb-10 mx-auto'>
                            <div className="w-full px-5 lg:px-20 h-full flex flex-col justify-center text-center">
                                <h1 className='text-3xl lg:text-5xl'>
                                    Je combine esthétique et fonctionnalité pour offrir des expériences utilisateur intuitives et engageantes
                                </h1>
                                <div className="flex justify-start mt-4">
                                    <Link className='mt-10 border-2 text-xl border-black rounded-full px-16 py-4 transition-all duration-300 hover:bg-black hover:text-white' href="">ติดต่อฉัน</Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[30%] py-20'>
                            <div>
                                <h1 className='text-xl'>ชื่อ</h1>
                                <h1 className='border-b-2 border-black text-2xl font-semibold pb-2'>{safeGet(user?.name?.TH || '')}</h1>
                            </div>
                            <div>
                                <h1 className='pt-12 text-xl'>ตำแหน่ง</h1>
                                <h1 className='border-b-2 border-black text-2xl font-semibold pb-2'>{safeGet(user?.position || '')}</h1>
                            </div>
                            <div>
                                <h1 className='pt-12 pb-6 text-xl'>ความเชี่ยวชาญ</h1>
                                {/* Responsive Expertise Section */}
                                <div className="flex flex-wrap gap-4 justify-start">
                                    {expertiseValues.map((item, index) => (
                                        <h1 key={index} className="border-2 transition-all duration-300 hover:bg-black hover:text-white text-2xl border-black rounded-full px-4 py-3">
                                            {item}
                                        </h1>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full bg-gray-100'>
                        <div className="w-11/12 mx-auto">
                            <div className="flex flex-col lg:flex-row pt-20">
                                <div>
                                    <h1 className='text-2xl border-2 px-4 py-2 mb-10 border-black rounded-full w-[200px] text-center'>
                                        ประวัติการศึกษา
                                    </h1>
                                </div>
                                <div className='pl-0 lg:pl-96'>
                                    <p className='w-11/12 lg:w-[700px] text-3xl lg:text-4xl'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos assumenda ipsum est harum pariatur velit, voluptas necessitatibus impedit magnam nobis aliquam dolorum nemo, rem quasi quidem. Minus cumque temporibus vero.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-col-1 lg:grid-cols-3 gap-10">
                                {[ 
                                    { level: 'ปริญญาตรี', field: user?.educational?.bachelor?.field, university: user?.educational?.bachelor?.university },
                                    { level: 'ปริญญาโท', field: user?.educational?.graduate?.field, university: user?.educational?.graduate?.university },
                                    { level: 'ปริญญาเอก', field: user?.educational?.master?.field, university: user?.educational?.master?.university },
                                ].map((edu, index) => (
                                    <div key={index} className='my-10 lg:my-20 relative bg-white rounded-xl h-96'>
                                        <div className="absolute bottom-0 pb-8 pl-6">
                                            <h1 className='text-4xl font-semibold'>{edu.level}</h1>
                                            <h1 className='text-xl'>{safeGet(edu.university || '')}</h1>
                                            <p>{safeGet(edu.field || '')}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* The rest of the content... */}
                    
                </div>
            </div>
        </>
    );
};

export default UserProfile;
