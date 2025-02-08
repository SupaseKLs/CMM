"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Chanin from "@/assets/img/CHANIN.jpg"
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
    id: string; // "id" can be a string as in your example
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

    useEffect(() => {
        // Fetch the local JSON file from the public directory
        axios.get<User[]>('/test.json')
            .then(response => {
                console.log("Fetched user data:", response.data); // Log fetched user data

                const fetchedUser = response.data[0]; // Assuming the first user in the array
                if (fetchedUser) {
                    setUser(fetchedUser);
                } else {
                    console.log("User not found");
                    setError('User not found');
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error loading user data:", err); // Log error if something goes wrong
                setError('Error loading user data');
                setLoading(false);
            });
    }, []);

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
                                <h1 className='border-b-2 border-black text-2xl font-semibold pb-2'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
                            </div>
                            <div>
                                <h1 className='pt-12 text-xl'>ตำแหน่ง</h1>
                                <h1 className='border-b-2 border-black text-2xl font-semibold pb-2'>ผศ.ดร. ชนินทร์ ตั้งพานทอง</h1>
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
                    <div className='bg-black h-full'>
                        <div className="w-11/12 mx-auto">
                            <div className="flex flex-col lg:flex-row justify-between py-20">
                                <div className='text-5xl text-white'>
                                    <h1>ประวัติการทำงาน</h1>
                                </div>
                                <div>
                                    <div className='text-white pt-6 lg:pt-0'>
                                        <h1 className='text-4xl'>
                                            {safeGet(user?.work_experience?.first?.period || '')}
                                        </h1>
                                        <p className='text-2xl pt-8 w-11/12 lg:w-[700px]'>{safeGet(user?.work_experience?.first?.position || '')}</p>
                                    </div>
                                    <div className='pt-20 text-white'>
                                        <h1 className='text-4xl'>
                                            {safeGet(user?.work_experience?.second?.period || '')}
                                        </h1>
                                        <p className='text-2xl pt-8 w-11/12 lg:w-[700px]'>{safeGet(user?.work_experience?.second?.position || '')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-white'>
                                <div>
                                    <h1 className='text-8xl'>60+</h1>
                                    <p className='text-3xl'>Projects</p>
                                </div>
                                <div>
                                    <h1 className='text-8xl'>60+</h1>
                                    <p className='text-3xl'>Projects</p>
                                </div>
                                <div>
                                    <h1 className='text-8xl'>60+</h1>
                                    <p className='text-3xl'>Projects</p>
                                </div>
                                <div>
                                    <h1 className='text-8xl'>60+</h1>
                                    <p className='text-3xl'>Projects</p>
                                </div>
                            </div>

                        </div>
                        <div className='h-full py-20 bg-white'>
                            <div className="w-11/12 mx-auto">
                                <h1 className='text-5xl pb-10'>งานวิจัย</h1>
                                <div className='flex px-10 hover:bg-gray-100 transition-all duration-300  justify-between border-b-2 border-black py-8'>
                                    <div className='rounded'>
                                        <h1>ชื่อผลงาน</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                </div>
                                <div className='flex px-10 hover:bg-gray-100 transition-all duration-300  justify-between border-b-2 border-black py-8'>
                                    <div className='rounded'>
                                        <h1>ชื่อผลงาน</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                </div>
                                <div className='flex px-10 hover:bg-gray-100 transition-all duration-300  justify-between border-b-2 border-black py-8'>
                                    <div className='rounded'>
                                        <h1>ชื่อผลงาน</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                </div>
                                <div className='flex px-10 hover:bg-gray-100 transition-all duration-300  justify-between border-b-2 border-black py-8'>
                                    <div className='rounded'>
                                        <h1>ชื่อผลงาน</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                </div>
                                <div className='flex px-10 hover:bg-gray-100 transition-all duration-300  justify-between border-b-2 border-black py-8'>
                                    <div className='rounded'>
                                        <h1>ชื่อผลงาน</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                </div>
                                <div className='flex px-10 hover:bg-gray-100 transition-all duration-300  justify-between border-b-2 border-black py-8'>
                                    <div className='rounded'>
                                        <h1>ชื่อผลงาน</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                    <div className='rounded'>
                                        <h1>ออกโดยใคร</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
