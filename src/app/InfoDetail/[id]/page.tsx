import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

// สร้าง Supabase Client
const supabaseUrl = "https://eldxcanxwvrnsvxkoaiv.supabase.co"; // เปลี่ยนเป็น URL ของคุณ
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZHhjYW54d3ZybnN2eGtvYWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MTU3MTgsImV4cCI6MjA2MTM5MTcxOH0.kieZ_9HbEFgZUqzIfoK9ae09BopPbcSXzjEFavk7GGI"; // เปลี่ยนเป็น Key ของคุณ
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface PageProps {
  params: Promise<{ id: string }>;  // เปลี่ยนเป็น Promise
}

export default async function InfoDetailPage({ params }: PageProps) {
  const awaitedParams = await params;  // await params ก่อนใช้งาน
  const id = awaitedParams.id;

  // เรียกข้อมูลจากตาราง News ที่ id ตรงกับพารามิเตอร์
  const { data, error } = await supabase
    .from("News")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase error:", error);
    return <div>❌ เกิดข้อผิดพลาด: {error.message}</div>;
  }

  if (!data) {
    return <div>⚠️ ไม่พบข้อมูลข่าว</div>;
  }

  // รวม descriptions และ pictures
  const descriptions = [
    data.description1,
    data.description2,
    data.description3,
    data.description4,
    data.description5,
  ];

  const pictures = [
    data.picture1,
    data.picture2,
    data.picture3,
    data.picture4,
    data.picture5,
  ];

  return (
    <div className="text-white max-w-4xl mx-auto py-8 px-4">
      {/* ชื่อข่าว */}
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      {/* วันที่ */}
      <p className="text-white mb-6">
        {new Date(data.date).toLocaleDateString()}
      </p>

      {/* ข้อความรายละเอียด */}
      {descriptions.map(
        (desc, idx) =>
          desc && (
            <p key={idx} className="mb-4 text-lg">
              {desc}
            </p>
          )
      )}

      {/* รูปภาพ */}
      {pictures.map(
        (pic, idx) =>
          pic && (
            <div key={idx} className="mb-8">
              <Image
                src={pic}
                alt={`Picture ${idx + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
                width={800}
                height={600}
                priority={idx === 0}
              />
            </div>
          )
      )}
    </div>
  );
}
