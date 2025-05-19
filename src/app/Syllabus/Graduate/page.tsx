import Image from "next/image"
import CardStacking from "@/components/CardStacking/page"
import Tabs from "@/components/tabs/page"
import Student from "@/assets/img/Suti.png"
import MarqueeCareers from "@/components/MarqueeCareers/page"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import FAQ from "@/components/Faq/page"
export default function Bacheror() {
    return (
        <section className="bg-white">
            <div>
                <Image src="" alt="bacheror_multi" />
            </div>

            <div className="w-11/12 mx-auto">
                <div className="py-32 flex flex-col md:flex-row justify-between">
                    <div className="text-4xl md:text-6xl font-bold w-full md:w-[50%]">
                        <h1>Applied Computer <br /> Science-Multimedia</h1>
                    </div>
                    <div className="pt-10 md:pt-0 text-xl w-full md:w-[40%]">
                        <h1>พร้อมหรือยังที่จะก้าวเข้าสู่โลกดิจิทัลอย่างสร้างสรรค์และเต็มไปด้วยโอกาสใหม่ร่วมเป็นส่วนหนึ่งของสาขาวิชาที่ผสมผสานความรู้ด้านเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์มัลติมีเดียเพื่อพัฒนาทักษะที่ตอบโจทย์อุตสาหกรรมยุคใหม่</h1>
                    </div>
                </div>

                <div className="bg-red-200 flex flex-col lg:flex-row rounded-2xl">
                    <div className="w-full lg:w-full 2xl:w-[40%]">
                        <Image src={Student} className="rounded-2xl w-full 2xl:w-auto h-auto md:h-full" alt="" />
                    </div>
                    <div className="h-full px-5 pt-10 w-full">
                        <div>
                            <h1 className="font-bold text-xl md:text-3xl 2xl:text-4xl pb-6">ชื่อปริญญาและสาขาวิชา</h1>
                            <div className="grid grid-rows-2">
                                <div className="text-sm md:text-2xl 2xl:text-xl grid" style={{ gridTemplateColumns: "20% 37% 1fr" }}>
                                    <div>
                                        <h1>ชื่อเต็ม</h1>
                                    </div>
                                    <div>
                                        <h1>(ภาษาไทย)</h1>
                                    </div>
                                    <div>
                                        <h1>วิทยาศาสตรบัณฑิต<br /> (วิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย)</h1>
                                    </div>
                                </div>
                                <div className="text-sm md:text-2xl 2xl:text-xl grid" style={{ gridTemplateColumns: "20% 37% 1fr" }}>
                                    <div>
                                    </div>
                                    <div>
                                        <h1>(ภาษาอังกฤษ)</h1>
                                    </div>
                                    <div>
                                        <h1>Bachelor of Science<br /> (Applied Computer Science-Multimedia)</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4 text-sm md:text-md grid grid-rows-2">
                                <div className="text-sm md:text-2xl 2xl:text-xl grid" style={{ gridTemplateColumns: "20% 37% 43%" }}>
                                    <div>
                                        <h1>ชื่อย่อ</h1>
                                    </div>
                                    <div>
                                        <h1>(ภาษาไทย)</h1>
                                    </div>
                                    <div>
                                        <h1>วท.บ.<br />(วิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย) </h1>
                                    </div>
                                </div>
                                <div className="text-sm md:text-2xl 2xl:text-xl grid" style={{ gridTemplateColumns: "20% 37% 1fr" }}>
                                    <div>
                                    </div>
                                    <div>
                                        <h1>(ภาษาอังกฤษ)</h1>
                                    </div>
                                    <div>
                                        <h1>B.Sc<br />(Applied Computer Science-Multimedia)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-6">
                            <h1 className="font-bold text-xl md:text-4xl 2xl:text-4xl pb-6">หน่วยกิต</h1>
                            <ul className="text-sm md:text-2xl 2xl:text-xl">
                                <li className="grid" style={{ gridTemplateColumns: "58% 10% 1fr" }}>
                                    <div>
                                        หมวดวิชาเลือกศึกษาทั่วไป
                                    </div>
                                    <div>
                                        31
                                    </div>
                                    <div>
                                        หน่วยกิต
                                    </div>
                                </li>
                                <li className="grid" style={{ gridTemplateColumns: "58% 10% 1fr" }}>
                                    <div>
                                        หมวดวิชาเสรี
                                    </div>
                                    <div>
                                        6
                                    </div>
                                    <div>
                                        หน่วยกิต
                                    </div>
                                </li>
                                <li className="grid" style={{ gridTemplateColumns: "58% 10% 1fr" }}>
                                    <div>
                                        หมวดวิชาเฉพาะ
                                    </div>
                                    <div>
                                        101
                                    </div>
                                    <div>
                                        หน่วยกิต
                                    </div>
                                </li>
                                <li className="grid" style={{ gridTemplateColumns: "58% 10% 1fr" }}>
                                    <div>
                                        รวม
                                    </div>
                                    <div>
                                        138
                                    </div>
                                    <div>
                                        หน่วยกิต
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="py-6">
                            <h1 className="font-bold text-xl md:text-4xl 2xl:text-4xl pb-6">คุณสมบัติของผู้เข้าศึกษา</h1>
                            <ol className="px-10 list-decimal text-sm md:text-2xl 2xl:text-xl">
                                <li>เป็นผู้สำเร็จการศึกษาระดับมัธยมศึกษาตอนปลาย กลุ่มสาระการเรียนรู้วิทยาศาสตร์ และกลุ่มสาระการเรียนรู้คณิตศาสตร์ หรือสายการเรียนวิทยาศาสตร์-คณิตศาสตร์ หรือประกาศนียบัตรที่กระทรวงศึกษาการเทียบเท่าสายวิทยาศาสตร์</li>
                                <li>ผู้ที่ไม่อยู่ในเกณฑ์ข้างต้นให้อยู่ในดุลยพินิจของคณะกรรมการประจำหลักสูตร</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <CardStacking />
                </div>
                <div className="h-[500px] md:h-full py-12">
                    <h1 className="text-4xl md:text-5xl font-bold">โครงสร้างหลักสูตร</h1>
                    <Tabs />
                </div>
                <div className="min-h-screen p-8">


                    <h1 className="text-4xl md:text-5xl font-bold mt-10 md:mt-32 mb-12">หลักสูตรการศึกษา</h1>

                    {/* ตารางหมวดวิชา */}
                    <div className="rounded-lg border shadow-sm">
                        <Table className="text-md md:text-xl">
                            <TableHeader>
                                {/* Mobile: 2 columns */}
                                <TableRow className="md:hidden divide-x">
                                    <TableHead className="w-2/3 font-bold text-center p-2">หมวดวิชา</TableHead>  {/* กว้างขึ้นเป็น 2/3 */}
                                    <TableHead className="w-1/3 text-right p-2">หน่วยกิต</TableHead>  {/* กว้างขึ้นเป็น 1/3 */}
                                </TableRow>

                                {/* Desktop: 4 columns */}
                                <TableRow className="hidden md:table-row divide-x">
                                    <TableHead className="w-2/4 font-bold text-center">หมวดวิชา</TableHead>  {/* กว้างขึ้นเป็น 2/4 */}
                                    <TableHead className="w-1/4"></TableHead>  {/* ยังอยู่ที่ 1/4 */}
                                    <TableHead className="w-1/4"></TableHead>  {/* ยังอยู่ที่ 1/4 */}
                                    <TableHead className="w-1/4 text-right">หน่วยกิต</TableHead>  {/* ยังอยู่ที่ 1/4 */}
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {[
                                    { name: "ก. หมวดวิชาศึกษาทั่วไป", credits: 31, type: "บังคับ", note: "-" },
                                    { name: "ข. หมวดวิชาเฉพาะ", credits: 101, type: "บังคับ", note: "-" },
                                    { name: "ข.1 วิชาหลัก", credits: 15, type: "บังคับ", note: "พื้นฐาน" },
                                    { name: "ข.2 วิชาเฉพาะด้าน", credits: 80, type: "เลือก", note: "-" },
                                    { name: "ข.3 วิชาเลือก", credits: 6, type: "เลือก", note: "เลือกเสรี" },
                                    { name: "ค. หมวดวิชาเลือกเสรี", credits: 6, type: "เลือก", note: "-" },
                                ].map((item, index) => (
                                    <TableRow
                                        key={item.name}
                                        className={`divide-x ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                                    >
                                        <TableCell className="w-1/2 font-medium text-left">{item.name}</TableCell>
                                        <TableCell className="w-1/5 text-center">{item.credits}</TableCell>
                                        <TableCell className="w-1/6 text-center">{item.type}</TableCell>
                                        <TableCell className="w-1/6 text-center">{item.note}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* ค่าบำรุงการศึกษา */}
                    <h1 className="text-4xl md:text-6xl font-bold mt-32 mb-12">ค่าบำรุงการศึกษา</h1>
                    <div className="rounded-lg border shadow-sm">
                        <Table className="text-md md:text-xl">
                            <TableHeader>
                                {/* Mobile View */}
                                <TableRow className="md:hidden divide-x">
                                    <TableHead className="w-2/3 text-center font-bold p-2">
                                        ค่าบำรุงการศึกษา
                                    </TableHead>
                                    <TableHead className="w-1/3 text-right p-2">
                                        116,000 บาท
                                    </TableHead>
                                </TableRow>

                                {/* Desktop View */}
                                <TableRow className="hidden md:table-row divide-x">
                                    <TableHead className="w-1/4 font-bold">ค่าบำรุงการศึกษา</TableHead>
                                    <TableHead className="w-1/4">14,500 บาท/ภาคการศึกษา</TableHead>
                                    <TableHead className="w-1/4">8 ภาคการศึกษา</TableHead>
                                    <TableHead className="w-2/4 font-bold">116,000 บาท</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {/* Mobile Rows */}
                                {[
                                    {
                                        label: 'ค่าบำรุงการศึกษา',
                                        detail: '14,500 บาท/ภาคการศึกษา',
                                        total: '116,000 บาท',
                                    },
                                    {
                                        label: 'ค่าลงทะเบียน',
                                        detail: '500 บาท/หน่วยกิต',
                                        total: '138 หน่วยกิต',
                                    },
                                ].map((item, i) => (
                                    <TableRow key={i} className="md:hidden divide-x bg-white odd:bg-gray-100">
                                        <TableCell className="w-1/3 font-bold text-left">{item.label}</TableCell>
                                        <TableCell className="w-1/3 text-left">{item.detail}</TableCell>
                                        <TableCell className="w-1/3 text-right">{item.total}</TableCell>
                                    </TableRow>
                                ))}

                                <TableRow className="md:hidden divide-x bg-white">
                                    <TableCell className="w-1/3 font-bold text-left">
                                        ค่าใช้จ่ายตลอดหลักสูตร
                                    </TableCell>
                                    <TableCell className="w-2/3 text-right">
                                        205,200 บาท
                                    </TableCell>
                                </TableRow>

                                {/* Desktop Rows */}
                                <TableRow className="hidden md:table-row divide-x bg-gray-100">
                                    <TableCell className="font-bold">ค่าบำรุงการศึกษา</TableCell>
                                    <TableCell>14,500 บาท/ภาคการศึกษา</TableCell>
                                    <TableCell>8 ภาคการศึกษา</TableCell>
                                    <TableCell className="font-bold">116,000 บาท</TableCell>
                                </TableRow>

                                <TableRow className="hidden md:table-row divide-x">
                                    <TableCell className="font-bold">ค่าลงทะเบียน</TableCell>
                                    <TableCell>500 บาท/หน่วยกิต</TableCell>
                                    <TableCell>138 หน่วยกิต</TableCell>
                                    <TableCell className="font-bold">69,000 บาท</TableCell>
                                </TableRow>

                                <TableRow className="hidden md:table-row divide-x bg-gray-100">
                                    <TableCell className="font-bold">ค่าใช้จ่ายตลอดหลักสูตร</TableCell>
                                    <TableCell />
                                    <TableCell />
                                    <TableCell className="font-bold">205,200 บาท</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="my-20">
                    <div className="uppercase font-bold">
                        <h1 className="text-9xl">Future</h1>
                        <h1 className="text-9xl pl-60">Careers</h1>

                        <div>
                            <FAQ />
                        </div>
                    </div>

                </div>

            </div>
            <MarqueeCareers />

        </section>
    )
}