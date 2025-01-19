import Image from "next/image";
import Link from "next/link";
import Arrow_right from "@/assets/svg/arrow-r.svg"
import P1 from "@/assets/img/p1.png"
import P2 from "@/assets/img/p2.png"
import P3 from "@/assets/img/p3.png"
import P4 from "@/assets/img/p4.png"
export default function StickyCard() {
  return (
    <main>
      <article>
        <section className='h-full md:h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
          <div className='absolute bottom-0 left-0 right-0 pb-10'>
            <div className="w-11/12 mx-auto">
              <div className="text-white">
                <div className="flex justify-between">
                  <div>
                    <div className="flex justify-center rounded-full px-4 py-3 backdrop-blur-sm bg-white/10 w-32">
                      <h1 className="text-base">Production</h1>
                    </div>
                    <div>
                      <h1 className="text-6xl">Just one more time</h1>
                    </div>
                  </div>

                  <div className="w-[500px]">
                    <h1>ข้อความนี้สื่อถึงความพยายามหรือความหวังที่จะทำบางสิ่งให้สำเร็จอีกครั้งหนึ่ง ไม่ว่าจะเป็นการทำซ้ำเพื่อให้ได้ผลลัพธ์ที่ดีที่สุดหรือเป็นโอกาสสุดท้ายที่จะพิสูจน์ตัวเอง เป็นคำที่สร้างแรงบันดาลใจและกระตุ้นให้ก้าวไปข้างหน้าแม้ในสถานการณ์ที่ท้าทาย</h1>
                    <div className="flex space-x-3 justify-center rounded-full my-4 px-4 py-2 text-black bg-white" >
                      <Link href="">ดูเพิ่มเติม</Link>
                      <Image width={15} height={15} src={Arrow_right} alt="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Image src={P1} alt="Production" />
        </section>
        <section className='h-full md:h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
          <div className='absolute bottom-0 left-0 right-0 pb-10'>
            <div className="w-11/12 mx-auto">
              <div className="text-white">
                <div className="flex justify-between">
                  <div>
                    <div className="flex justify-center rounded-full px-4 py-3 backdrop-blur-sm bg-white/10 w-32">
                      <h1 className="text-base">Production</h1>
                    </div>
                    <div>
                      <h1 className="text-6xl">Just one more time</h1>
                    </div>
                  </div>

                  <div className="w-[500px]">
                    <h1>ข้อความนี้สื่อถึงความพยายามหรือความหวังที่จะทำบางสิ่งให้สำเร็จอีกครั้งหนึ่ง ไม่ว่าจะเป็นการทำซ้ำเพื่อให้ได้ผลลัพธ์ที่ดีที่สุดหรือเป็นโอกาสสุดท้ายที่จะพิสูจน์ตัวเอง เป็นคำที่สร้างแรงบันดาลใจและกระตุ้นให้ก้าวไปข้างหน้าแม้ในสถานการณ์ที่ท้าทาย</h1>
                    <div className="flex space-x-3 justify-center rounded-full my-4 px-4 py-2 text-black bg-white" >
                      <Link href="">ดูเพิ่มเติม</Link>
                      <Image width={15} height={15} src={Arrow_right} alt="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={P2} alt="UXUI" />
        </section>
        <section className='h-full md:h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
          <div className='absolute bottom-0 left-0 right-0 pb-10'>
            <div className="w-11/12 mx-auto">
              <div className="text-white">
                <div className="flex justify-between">
                  <div>
                    <div className="flex justify-center rounded-full px-4 py-3 backdrop-blur-sm bg-white/10 w-32">
                      <h1 className="text-base">Production</h1>
                    </div>
                    <div>
                      <h1 className="text-6xl">Just one more time</h1>
                    </div>
                  </div>

                  <div className="w-[500px]">
                    <h1>ข้อความนี้สื่อถึงความพยายามหรือความหวังที่จะทำบางสิ่งให้สำเร็จอีกครั้งหนึ่ง ไม่ว่าจะเป็นการทำซ้ำเพื่อให้ได้ผลลัพธ์ที่ดีที่สุดหรือเป็นโอกาสสุดท้ายที่จะพิสูจน์ตัวเอง เป็นคำที่สร้างแรงบันดาลใจและกระตุ้นให้ก้าวไปข้างหน้าแม้ในสถานการณ์ที่ท้าทาย</h1>
                    <div className="flex space-x-3 justify-center rounded-full my-4 px-4 py-2 text-black bg-white" >
                      <Link href="">ดูเพิ่มเติม</Link>
                      <Image width={15} height={15} src={Arrow_right} alt="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={P3} alt="Animation" />
        </section>
        <section className='h-full md:h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden'>
          <div className='absolute bottom-0 left-0 right-0 pb-10'>
            <div className="w-11/12 mx-auto">
              <div className="text-white">
                <div className="flex justify-between">
                  <div>
                    <div className="flex justify-center rounded-full px-4 py-3 backdrop-blur-sm bg-white/10 w-32">
                      <h1 className="text-base">Production</h1>
                    </div>
                    <div>
                      <h1 className="text-6xl">Just one more time</h1>
                    </div>
                  </div>

                  <div className="w-[500px]">
                    <h1>ข้อความนี้สื่อถึงความพยายามหรือความหวังที่จะทำบางสิ่งให้สำเร็จอีกครั้งหนึ่ง ไม่ว่าจะเป็นการทำซ้ำเพื่อให้ได้ผลลัพธ์ที่ดีที่สุดหรือเป็นโอกาสสุดท้ายที่จะพิสูจน์ตัวเอง เป็นคำที่สร้างแรงบันดาลใจและกระตุ้นให้ก้าวไปข้างหน้าแม้ในสถานการณ์ที่ท้าทาย</h1>
                    <div className="flex space-x-3 justify-center rounded-full my-4 px-4 py-2 text-black bg-white" >
                      <Link href="">ดูเพิ่มเติม</Link>
                      <Image width={15} height={15} src={Arrow_right} alt="arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image src={P4} alt="Game" />
        </section>
      </article>
    </main>
  );
}