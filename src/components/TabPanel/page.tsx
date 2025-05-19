"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const tabs = [
  { id: "tab1", label: "ยืมอุปกรณ์", image: "/images/thing.jpg" },
  { id: "tab2", label: "จองห้องปฏิบัติการ", image: "/images/room.jpg" },
];

export default function TabsWithTransition() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full py-20 mx-auto p-4">
      <div className="flex justify-center space-x-2 border-b pb-2">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer my-10 p-2 rounded-lg text-lg font-semibold ${activeTab === tab.id ? "bg-gray-200" : "border-2 border-transparent"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={tab.image} width={150} height={150} alt={tab.label} className="w-10/12 mx-auto h-auto rounded-lg" />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
