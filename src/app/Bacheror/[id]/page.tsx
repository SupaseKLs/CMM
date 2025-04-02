import Image from "next/image"
import CardStacking from "@/components/CardStacking/page"
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
                    <div className="text-6xl md:text-9xl font-bold w-[50%]">
                        <h1>Applied Computer <br /> Science-Multimedia</h1>
                    </div>
                    <div className="text-2xl w-full md:w-[30%]">
                        <h1>พร้อมหรือยังที่จะก้าวเข้าสู่โลกดิจิทัลอย่างสร้างสรรค์และเต็มไปด้วยโอกาสใหม่ร่วมเป็นส่วนหนึ่งของสาขาวิชาที่ผสมผสานความรู้ด้านเทคโนโลยีคอมพิวเตอร์และการสร้างสรรค์มัลติมีเดียเพื่อพัฒนาทักษะที่ตอบโจทย์อุตสาหกรรมยุคใหม่</h1>
                    </div>
                </div>

                <div className="bg-red-200 flex rounded-2xl">
                    <div className="w-[60%]">
                        <Image src={Student} className="rounded-2xl w-auto h-[900px]" alt="" />
                    </div>
                    <div className="h-full px-10 pt-10 w-[70%]">
                        <div>
                            <h1 className="font-bold text-3xl pb-6">ชื่อปริญญาและสาขาวิชา</h1>
                            <div className="grid grid-rows-2">
                                <div className="text-xl grid grid-cols-3">
                                    <div>
                                        <h1>ชื่อเต็ม</h1>
                                    </div>
                                    <div>
                                        <h1>(ภาษาไทย)</h1>
                                    </div>
                                    <div>
                                        <h1>วิทยาศาสตรบัณฑิต (วิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย)</h1>
                                    </div>
                                </div>
                                <div className="text-xl grid grid-cols-3">
                                    <div>
                                    </div>
                                    <div>
                                        <h1>(ภาษาอังกฤษ)</h1>
                                    </div>
                                    <div>
                                        <h1>of Science (Applied Computer Science-Multimedia)</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xl grid grid-rows-2">
                                <div className="grid grid-cols-3">
                                    <div>
                                        <h1>ชื่อย่อ</h1>
                                    </div>
                                    <div>
                                        <h1>(ภาษาไทย)</h1>
                                    </div>
                                    <div>
                                        <h1>วท.บ. (วิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย) </h1>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3">
                                    <div>
                                    </div>
                                    <div>
                                        <h1>(ภาษาอังกฤษ)</h1>
                                    </div>
                                    <div>
                                        <h1>B.Sc (Applied Computer Science-Multimedia)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-6">
                            <h1 className="font-bold text-3xl pb-6">หน่วยกิต</h1>
                            <ul className="text-xl">
                                <li>หมวดวิชาเลือกศึกษาทั่วไป 31 หน่วยกิต</li>
                                <li>หมวดวิชาเสรี 6 หน่วยกิต</li>
                                <li>หมวดวิชาเฉพาะ 101 หน่วยกิต</li>
                                <li>รวม 138 หน่วยกิต</li>
                            </ul>
                        </div>

                        <div className="py-6">
                            <h1 className="font-bold text-3xl pb-6">คุณสมบัติของผู้เข้าศึกษา</h1>
                            <ul className="text-xl ">
                                <li>เป็นผู้สำเร็จการศึกษาระดับมัธยมศึกษาตอนปลาย กลุ่มสาระการเรียนรู้วิทยาศาสตร์ และกลุ่มสาระการเรียนรู้คณิตศาสตร์ หรือสายการเรียนวิทยาศาสตร์-คณิตศาสตร์ หรือประกาศนียบัตรที่กระทรวงศึกษาการเทียบเท่าสายวิทยาศาสตร์</li>
                                <li>ผู้ที่ไม่อยู่ในเกณฑ์ข้างต้นให้อยู่ในดุลยพินิจของคณะกรรมการประจำหลักสูตร</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <CardStacking />

                <div className="min-h-screen p-8">
                    <h1 className="text-8xl font-bold mt-32 mb-12">หลักสูตรการศึกษา</h1>
                    <div className="rounded-lg border shadow-sm">
                        <Table className="text-xl">
                            <TableHeader>
                                <TableRow className="divide-x">
                                    <TableHead className="font-bold w-1/4">ก. หมวดวิชาศึกษาทั่วไป</TableHead>
                                    <TableHead className="w-1/4"></TableHead>
                                    <TableHead className="w-1/4"></TableHead>
                                    <TableHead className="w-1/4">31 หน่วยกิต</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="divide-x bg-gray-100">
                                    <TableCell className="font-bold">ข. หมวดวิชาเฉพาะ</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>101 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x">
                                    <TableCell className="font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.1 วิชาหลัก</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>15 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x bg-gray-100">
                                    <TableCell className="font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.2 วิชาเฉพาะด้าน</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>80 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x">
                                    <TableCell className="font-medium">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.2.1 กลุ่มวิชาศิลปะและการออกแบบมัลติมีเดีย</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>36 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x bg-gray-100">
                                    <TableCell className="font-medium">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.2.2 กลุ่มวิชาวิทยาการคอมพิวเตอร์</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>21 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x">
                                    <TableCell className="font-medium">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.2.3 กลุ่มวิชาฮาร์ดแวร์สำหรับมัลติมีเดีย</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>5 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x bg-gray-100">
                                    <TableCell className="font-medium">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.2.4 กลุ่มวิชาบริหารจัดการโครงงาน</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>16 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x">
                                    <TableCell className="font-medium">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.2.5 กลุ่มวิชาฝึกงาน</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>2 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x bg-gray-100">
                                    <TableCell className="font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข.3 วิชาเลือก</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>6 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x ">
                                    <TableCell className="font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ค. หมวดวิชาเลือกเสรี</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell>6 หน่วยกิต</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <h1 className="text-8xl font-bold mt-32 mb-12">ค่าบำรุงการศึกษา</h1>
                    <div className="rounded-lg border shadow-sm">
                        <Table className="text-xl">
                            <TableHeader>
                                <TableRow className="divide-x">
                                    <TableHead className="font-bold w-1/4">ค่าบำรุงการศึกษา</TableHead>
                                    <TableHead className="w-1/4">14,500 บาท/ภาคการศึกษา</TableHead>
                                    <TableHead className="w-1/4">8 ภาคการศึกษา</TableHead>
                                    <TableHead className="font-bold w-1/4">116000 บาท</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="divide-x bg-gray-100">
                                    <TableCell className="font-bold">ค่าลงทะเบียน</TableCell>
                                    <TableCell className="font-medium truncate">500 บาท/หน่วยกิต</TableCell>
                                    <TableCell className="truncate">138 หน่วยกิต</TableCell>
                                    <TableCell className="font-bold">31 หน่วยกิต</TableCell>
                                </TableRow>
                                <TableRow className="divide-x bg-white">
                                    <TableCell className="font-bold">ค่าใช้จ่ายตลอดหลักสูตร</TableCell>
                                    <TableCell className="font-medium truncate"></TableCell>
                                    <TableCell className="truncate"></TableCell>
                                    <TableCell className="font-bold">205,200 บาท</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}