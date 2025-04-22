'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'หลักสูตรนี้เหมาะกับใคร?',
    answer: 'เหมาะสำหรับผู้ที่สนใจด้านมัลติมีเดีย วิทยาการคอมพิวเตอร์ และงานออกแบบดิจิทัล เช่น แอนิเมชัน เว็บไซต์ และแอปพลิเคชัน',
  },
  {
    question: 'เรียนแล้วสามารถทำอาชีพอะไรได้บ้าง?',
    answer: 'สามารถทำงานเป็นนักพัฒนาเว็บ นักออกแบบ UX/UI โปรแกรมเมอร์ แอนิเมเตอร์ หรือทำงานด้านสื่อดิจิทัลได้',
  },
  {
    question: 'จำเป็นต้องมีพื้นฐานก่อนเข้าเรียนไหม?',
    answer: 'ไม่จำเป็นต้องมีพื้นฐานลึก แต่ควรมีความสนใจและตั้งใจเรียนรู้ด้านเทคโนโลยีและการออกแบบ',
  },
  {
    question: 'เรียนแล้วสามารถทำอาชีพอะไรได้บ้าง?',
    answer: 'สามารถทำงานเป็นนักพัฒนาเว็บ นักออกแบบ UX/UI โปรแกรมเมอร์ แอนิเมเตอร์ หรือทำงานด้านสื่อดิจิทัลได้',
  },
  {
    question: 'จำเป็นต้องมีพื้นฐานก่อนเข้าเรียนไหม?',
    answer: 'ไม่จำเป็นต้องมีพื้นฐานลึก แต่ควรมีความสนใจและตั้งใจเรียนรู้ด้านเทคโนโลยีและการออกแบบ',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full mx-auto py-16 px-4">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden">
            <button
              className="flex justify-between items-center bg-gray-100 w-full p-4 text-left text-lg font-medium"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden bg-white text-gray-700"
                >
                  <div className="p-4">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
