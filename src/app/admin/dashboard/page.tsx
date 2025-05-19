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

interface User {
  id: number;
  name: string;
  email?: string;
  // เพิ่ม field ตามที่มีจริงใน AdminProfile
}

const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('AdminProfile').select('*');
      if (error) {
        console.error('Error fetching users:', error.message);
      } else {
        setUsers(data || []);
      }
    };
    fetchUsers();
  }, []);

  // สมมติอยากเพิ่มปุ่ม logout ใช้ handleLogout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-6 flex-1 p-6 transition-all duration-300">
        <div className="w-11/12 mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">DashBoard</h1>
            <div className="flex gap-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => router.push('/admin/add-user')}
              >
                <div className="flex gap-2 items-center">
                  Add Post <Image src={Plus} width={15} height={15} alt='plus' />
                </div>
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-4 gap-4">
              {/* ตัวอย่างแสดงจำนวน users */}
              <div className='w-full flex justify-center flex-col items-center h-40 rounded-xl bg-white inset-shadow-sm'>
                <h2 className='text-6xl text-green-500 mb-2 p-1 font-semibold pl-4'>{users.length}</h2>
                <p className='text-md'>จำนวนผู้ใช้</p>
              </div>
              {/* ... การ์ดอื่น ๆ ตามเดิม */}
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
