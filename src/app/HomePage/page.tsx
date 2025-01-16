
export default function HomePage() {
    return (
        <>
            <header>
                <div className="w-full">
                    <div className="relative">
                        <video
                            playsInline
                            autoPlay
                            muted
                            loop
                            className="w-full h-screen object-cover"
                        >
                            <source src="/video/Homepagebg.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute bottom-0 mb-4">
                            <div className="w-11/12 mx-auto">
                                <div className="text-white text-[5vw] font-semibold">
                                    <h1>DIVISION OF COMPUTER AND INFORMATION TECHNOLOGY</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section>
                <div className="w-11/12 mx-auto">
                    <div className="text-black max-w-[500px]">
                        <h1 className="pt-10 font-semibold uppercase text-xl">cmm kmutt</h1>
                        <p className="pt-4">ก้าวสู่โลกแห่งความคิดสร้างสรรค์และเทคโนโลยีที่ครบวงจรด้วยการเรียนรู้ทั้งการผลิตสื่อมัลติมีเดียการถ่ายภาพการจัดแสงและการตัดต่อวิดีโอที่มืออาชีพเลือกใช้พร้อมพัฒนาทักษะด้านการออกแบบและพัฒนาเว็บไซต์ให้ตอบโจทย์โลกดิจิทัลอีกทั้งยังเสริมสร้างความสามารถในการพัฒนาเกมที่เต็มไปด้วยจินตนาการและความสนุกเรามุ่งเน้นการเรียนรู้ผ่านการปฏิบัติจริงพร้อมอุปกรณ์ทันสมัยและทีมผู้เชี่ยวชาญที่พร้อมสนับสนุนคุณในทุกก้าวของการสร้างสรรค์งาน!</p>
                    </div>
                </div>
            </section>
        </>
    )
}