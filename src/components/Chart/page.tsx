'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'กิจกรรมการจัดการโพสต์รายวัน',
    },
  },
}

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export const data = {
  labels,
  datasets: [
    {
      label: 'เพิ่มโพสต์',
      data: [5, 8, 6, 7, 5, 4, 6],
      backgroundColor: 'rgba(34, 197, 94, .8)', // เขียว
    },
    {
      label: 'แก้ไขโพสต์',
      data: [2, 3, 4, 1, 5, 2, 3],
      backgroundColor: 'rgba(234, 179, 8, .8)', // เหลือง
    },
    {
      label: 'ลบโพสต์',
      data: [1, 2, 0, 3, 2, 1, 1],
      backgroundColor: 'rgba(239, 68, 68, .8)', // แดง
    },
  ],
}

export default function BarChart() {
  return <Bar className="p-12 2xl:p-24" options={options} data={data} />
}
