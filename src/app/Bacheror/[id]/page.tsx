import Image from "next/image"
import CardStacking from "@/components/CardStacking/page"
import Tabs from "@/components/tabs/page"
import Student from "@/assets/img/Suti.png"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
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

                <div className="bg-red-200 flex flex-col md:flex-row rounded-2xl">
                    <div className="w-full md:w-[60%]">
                        <Image src={Student} className="rounded-2xl w-auto h-auto md:h-full" alt="" />
                    </div>
                    <div className="h-full px-5 pt-10 w-full md:w-[70%]">
                        <div>
                            <h1 className="font-bold text-xl md:text-2xl pb-6">ชื่อปริญญาและสาขาวิชา</h1>
                            <div className="grid grid-rows-2">
                                <div className="text-sm md:text-md grid" style={{ gridTemplateColumns: "20% 37% 1fr" }}>
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
                                <div className="text-sm md:text-md grid" style={{ gridTemplateColumns: "20% 37% 1fr" }}>
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
                                <div className="grid" style={{ gridTemplateColumns: "20% 37% 43%" }}>
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
                                <div className="grid" style={{ gridTemplateColumns: "20% 37% 1fr" }}>
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
                            <h1 className="font-bold text-xl md:text-2xl pb-6">หน่วยกิต</h1>
                            <ul className="text-sm md:text-md">
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
                            <h1 className="font-bold text-xl md:text-2xl pb-6">คุณสมบัติของผู้เข้าศึกษา</h1>
                            <ol className="px-3 list-decimal text-sm md:text-md">
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
                                {/* Mobile + Desktop rows */}
                                {[
                                    { name: "ก. หมวดวิชาศึกษาทั่วไป", credits: 31 },
                                    { name: "ข. หมวดวิชาเฉพาะ", credits: 101 },
                                    { name: "ข.1 วิชาหลัก", credits: 15 },
                                    { name: "ข.2 วิชาเฉพาะด้าน", credits: 80 },
                                    { name: "ข.2.1 กลุ่มวิชาศิลปะและการออกแบบมัลติมีเดีย", credits: 36 },
                                    { name: "ข.2.2 กลุ่มวิชาวิทยาการคอมพิวเตอร์", credits: 21 },
                                    { name: "ข.2.3 กลุ่มวิชาฮาร์ดแวร์สำหรับมัลติมีเดีย", credits: 5 },
                                    { name: "ข.2.4 กลุ่มวิชาบริหารจัดการโครงงาน", credits: 16 },
                                    { name: "ข.2.5 กลุ่มวิชาฝึกงาน", credits: 2 },
                                    { name: "ข.3 วิชาเลือก", credits: 6 },
                                    { name: "ค. หมวดวิชาเลือกเสรี", credits: 6 },
                                ].map((item, index) => (
                                    <TableRow
                                        key={item.name}
                                        className={`divide-x ${index % 2 === 0 ? "bg-gray-100" : ""}`}
                                    >
                                        <TableCell className="md:col-span-1 font-medium text-left">
                                            {item.name}
                                        </TableCell>
                                        <TableCell className="text-center">{item.credits} หน่วยกิต</TableCell>
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
                                {/* Mobile: 2 columns */}
                                <TableRow className="md:hidden divide-x">
                                    <TableHead className="w-2/3 font-bold text-center p-2">ค่าบำรุงการศึกษา</TableHead>  {/* กว้างขึ้นเป็น 2/3 */}
                                    <TableHead className="w-1/3 text-right p-2">116,000 บาท</TableHead>  {/* กว้างขึ้นเป็น 1/3 */}
                                </TableRow>

                                {/* Desktop: 4 columns */}
                                <TableRow className="hidden md:table-row divide-x">
                                    <TableHead className="w-2/4 font-bold">ค่าบำรุงการศึกษา</TableHead>  {/* กว้างขึ้นเป็น 2/4 */}
                                    <TableHead className="w-1/4">14,500 บาท/ภาคการศึกษา</TableHead>
                                    <TableHead className="w-1/4">8 ภาคการศึกษา</TableHead>
                                    <TableHead className="w-1/4 font-bold">116,000 บาท</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {/* Mobile: 3 columns */}
                                <TableRow className="md:hidden divide-x bg-gray-100">
                                    <TableCell className="w-1/3 font-bold text-left">ค่าบำรุงการศึกษา</TableCell>  {/* กว้างขึ้นเป็น 1/3 */}
                                    <TableCell className="w-1/3 text-left">14,500 บาท/ภาคการศึกษา</TableCell>  {/* กว้างขึ้นเป็น 1/3 */}
                                    <TableCell className="w-1/3 text-right">116,000 บาท</TableCell>  {/* กว้างขึ้นเป็น 1/3 */}
                                </TableRow>

                                <TableRow className="md:hidden divide-x">
                                    <TableCell className="w-1/3 font-bold text-left">ค่าลงทะเบียน</TableCell>  {/* กว้างขึ้นเป็น 1/3 */}
                                    <TableCell className="w-1/3 text-left">500 บาท/หน่วยกิต</TableCell>  {/* กว้างขึ้นเป็น 1/3 */}
                                    <TableCell className="w-1/3 text-right">138 หน่วยกิต</TableCell>  {/* กว้างขึ้นเป็น 1/3 */}
                                </TableRow>

                                <TableRow className="md:hidden divide-x">
                                    <TableCell className="w-1/3 font-bold text-left">ค่าใช้จ่ายตลอดหลักสูตร</TableCell>  {/* กว้างขึ้นเป็น 1/3 */}
                                    <TableCell className="w-2/3 text-right">205,200 บาท</TableCell>  {/* กว้างขึ้นเป็น 2/3 */}
                                </TableRow>

                                {/* Desktop: 4 columns */}
                                <TableRow className="hidden md:table-row divide-x bg-gray-100">
                                    <TableCell className="font-bold">ค่าบำรุงการศึกษา</TableCell>
                                    <TableCell className="truncate">14,500 บาท/ภาคการศึกษา</TableCell>
                                    <TableCell className="truncate">8 ภาคการศึกษา</TableCell>
                                    <TableCell className="font-bold">116,000 บาท</TableCell>
                                </TableRow>
                                <TableRow className="hidden md:table-row divide-x">
                                    <TableCell className="font-bold">ค่าลงทะเบียน</TableCell>
                                    <TableCell className="truncate">500 บาท/หน่วยกิต</TableCell>
                                    <TableCell className="truncate">138 หน่วยกิต</TableCell>
                                    <TableCell className="font-bold">69,000 บาท</TableCell>
                                </TableRow>
                                <TableRow className="hidden md:table-row divide-x">
                                    <TableCell className="font-bold">ค่าใช้จ่ายตลอดหลักสูตร</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell className="font-bold">205,200 บาท</TableCell>
                                </TableRow>
                            </TableBody>

                        </Table>
                    </div>
                </div>

                <div>
                    <div className="uppercase font-bold">
                        <h1 className="text-9xl">Future</h1>
                        <h1 className="text-9xl pl-60">Careers</h1>
                    </div>

                </div>
            </div>
        </section>
    )
}