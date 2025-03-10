import Image from "next/image"
import ScrollBaseAnimation from "@/components/ui/text.marquee"
import Admissions from "@/assets/img/Admission.jpg"
import Filter from "@/components/Filter/page"
export default function Info() {
    const categories = [
        "Electronics",
        "Clothing",
        "Books",
        "Sports",
        "Home & Garden",
        "Toys",
        "Automotive",
        "Health & Beauty",
    ];

    const month = [
        "Under $25",
        "$25 - $50",
        "$50 - $100",
        "$100 - $200",
        "$200 - $500",
        "Over $500",
    ];

    const brands = ["Apple", "Samsung", "Nike", "Adidas", "Sony", "LG", "Dell", "HP"];
    return (
        <>
            <section className="bg-white h-full">
                <div className="w-11/12 mx-auto">
                    <div className='pt-40 pb-20 flex justify-between'>
                        <div className='w-[60%] text-8xl'>
                            <h1>we strive <br />to innovate</h1>
                        </div>
                        <div className='w-[40%] text-xl'>
                            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, aut illo fuga ex cumque, totam odio vel in, cum voluptas ducimus? Labore quos at voluptate necessitatibus mollitia sint eum repellendus.</h1>
                        </div>
                    </div>
                </div>
                <div className='relative flex justify-center'>
                    <div className="relative w-[90%] h-[500px] overflow-hidden">
                        <Image src={Admissions} className='w-full h-full rounded-full' alt='test' />
                        <div className='absolute top-0 left-0 w-full h-full grid place-content-center'>
                            <ScrollBaseAnimation
                                baseVelocity={3}
                                scrollDependent={true}
                            >
                                Top-Tier Multimedia
                            </ScrollBaseAnimation>
                        </div>
                    </div>
                </div>

                <div className="pt-20">
                    <Filter
                        categories={categories}
                        prices={month}
                        brands={brands}
                        categoryPlaceholder="Select Category"
                        pricePlaceholder="Select Month"
                        brandPlaceholder="Select Brand" />
                </div>
            </section>
        </>
    )
}