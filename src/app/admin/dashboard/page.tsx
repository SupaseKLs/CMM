'use client'

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Plus from "@/assets/svg/plus.svg";
import Recent from '@/components/Recent/page';
import Sidebar from '@/components/Sidebar/index';

const BarChart = dynamic(() => import('@/components/Chart/page'), { ssr: false });

const AdminDashboard = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('AdminProfile').select('*');
      if (error) {
        console.error('Error fetching users:', error.message);
      } else {
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-6' : 'ml-0'} flex-1 p-6`}>
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">DashBoard</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => router.push('/admin/add-user')}
            >
              <div className="flex gap-2">
                Add Post <Image src={Plus} width={15} height={15} alt='plus' />
              </div>
            </button>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-4 gap-4">
              <div className='w-full flex justify-center flex-col items-center h-40 rounded-xl bg-white inset-shadow-sm'>
                <h2 className='text-6xl text-green-500 mb-2 p-1 font-semibold pl-4'>12</h2>
                <p className='text-md'>เพิ่มโพสต์</p>
              </div>
              <div className='w-full flex justify-center flex-col items-center h-40 rounded-xl bg-white inset-shadow-sm'>
                <h2 className='text-6xl text-yellow-500 mb-2 p-1 font-semibold'>24</h2>
                <p className='text-md'>แก้ไขโพสต์</p>
              </div>
              <div className='w-full flex justify-center flex-col items-center h-40 rounded-xl bg-white inset-shadow-sm'>
                <h2 className='text-6xl text-red-500 mb-2 p-1 font-semibold'>24</h2>
                <p className='text-md'>ลบโพสต์</p>
              </div>
              <div className='w-full flex justify-center flex-col items-center h-40 rounded-xl bg-gradient-to-b text-white from-blue-700 via-blue-500 to-blue-400 inset-shadow-sm'>
                <h2 className='text-6xl mb-1 p-1 font-semibold'>24</h2>
                <p className='text-md'>โพสต์ทั้งหมด</p>
              </div>
            </div>

            <div className='bg-white my-10'>
              <BarChart />
            </div>
              <div className='w-auto overflow-x-auto bg-white py-10 inset-shadow-sm rounded-xl shadow-lg'>
                <Recent />
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;