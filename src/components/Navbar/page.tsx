"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialHandle } from "@/utils/interface";
import { TextReveal } from "@/components/ui/typography";
import Link from "next/link";
import { FaChevronDown } from 'react-icons/fa';
import { useMediaQuery } from "@/utils/useMediaQuery";
interface NavbarHeaderProps {
    social: SocialHandle[];
}


const menuItems = [
    { title: "หน้าหลัก", href: "/" },
    { title: "บุคลากร", href: "/Executive" },
    {
        title: "หลักสูตร",
        links: [
            {
                label: "ปริญญาตรี",
                href: "/Syllabus/Bacheror",
                image: "/images/image 161.png",
            },
            {
                label: "ปริญญาโท",
                href: "/Syllabus/Graduate",
                image: "/images/image 162.png",
            },
        ],
    },
    { title: "บริการ", href: "/Services" },
    { title: "ข่าวสาร", href: "/Info" },
    { title: "ติดต่อเรา", href: "/Contact" },
];
const navLinks = [
    { title: "หน้าหลัก", href: "/" },
    { title: "บุคลากร", href: "/Executive" },
    { title: "หลักสูตร", href: "#", hasChevron: true },
    { title: "บริการ", href: "/Services" },
    { title: "ข่าวสาร", href: "/Info" },
    { title: "ติดต่อเรา", href: "/Contact" },
];

const Navbar: React.FC<NavbarHeaderProps> = ({ social = [] }) => {
    const isMobile = useMediaQuery("(max-width:768px)");
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
    const [isActive, setIsActive] = useState(false);
    const MotionLink = motion.create(Link);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollState = window.scrollY;
            if (currentScrollState > scrollPosition && currentScrollState > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setScrollPosition(currentScrollState);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };


    }, [scrollPosition]);
    const variants = {
        open: {
            clipPath: `inset(0% 0% 0% 0% round ${isMobile ? 0 : "24px"})`,
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
            clipPath: `inset(5% 12% 100% 85% round ${isMobile ? 0 : "24px"})`,
            transition: {
                duration: 0.75,
                delay: 0.35,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };
    const currentImage =
        menuItems
            .find((item) => item.title === "หลักสูตร")
            ?.links?.find((link) => link.label === hoveredSubItem)?.image || "";

    return (
        <>
            {/* Desktop Navbar */}
            <AnimatePresence>
                {hoveredMenu === "หลักสูตร" && hoveredSubItem && (
                    <motion.div
                        key={hoveredSubItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-64 h-40 z-50"
                    >
                        <img
                            src={currentImage}
                            alt=""
                            className="ml-20 mt-24 w-full h-full object-cover rounded-r-lg shadow-lg"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.nav
                onMouseEnter={() => { }}
                onMouseLeave={() => {
                    setHoveredMenu(null);
                    setHoveredSubItem(null);
                }}
                animate={{ height: hoveredMenu === "หลักสูตร" || hoveredSubItem ? 280 : 80 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="hidden lg:block fixed top-0 left-0 z-40 w-full overflow-hidden 
  bg-black/30 backdrop-blur-md backdrop-saturate-150 shadow"
            >

                <div className="w-11/12 mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <img src="/images/Logo.png" width={150} alt="" />
                    </Link>

                    <div className="flex space-x-10">
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="relative"
                                onMouseEnter={() => item.links && setHoveredMenu(item.title)}
                            >
                                <Link
                                    href={item.href ?? "#"}
                                    className="text-white text-md 2xl:text-2xl font-medium hover:text-red-400 transition flex items-center" // Added flex for alignment
                                >
                                    {item.title}

                                    {item.links && (
                                        <motion.div
                                            className="ml-2"
                                        >
                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                animate={{
                                                    rotate: hoveredMenu === item.title ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <FaChevronDown className="text-white" />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </Link>

                                <AnimatePresence>
                                    {hoveredMenu === item.title && item.links && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                            className="absolute top-10 left-0 mt-4 w-64 p-4 z-40"
                                        >
                                            {item.links?.map((link) => (
                                                <Link
                                                    key={link.label}
                                                    href={link.href}
                                                    onMouseEnter={() => setHoveredSubItem(link.label)}
                                                    onMouseLeave={() => setHoveredSubItem(null)}
                                                    className="block text-4xl text-white py-1 hover:text-blue-500 transition"
                                                >
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navbar */}
            <motion.header className="block lg:hidden fixed top-0 right-0 z-20">
                <div className="fixed lg:top-0 pt-5 top-2 md:left-8 left-6 z-30">
                    <Link href={"/"}>
                        <div>
                            <img src="/images/Logo.png" width={150} height={150} alt="Logo" />
                        </div>
                    </Link>
                </div>
                <motion.div
                    initial={false}
                    animate={isActive ? "open" : "closed"}
                    variants={variants}
                    className="absolute top-0 right-0 w-dvw lg:w-[840px] h-dvh lg:h-[calc(100dvh_-_3.5rem)] bg-primary"
                >
                    {isActive && (
                        <nav className="flex justify-between items-center flex-col w-full h-full px-10 pt-[100px] pb-[50px]">
                            <div className="flex gap-2 flex-col">
                                {navLinks.map((link, i) => (
                                    <div key={`b_${i}`} onClick={() => setIsActive(false)}>
                                        <Link href={link.href} className="text-white flex flex-wrap overflow-hidden">
                                            <motion.div
                                                variants={{
                                                    initial: { y: 50 },
                                                    enter: {
                                                        y: 0,
                                                        transition: {
                                                            duration: 0.65,
                                                            delay: 0.5 + i * 0.1,
                                                            ease: [0.215, 0.61, 0.355, 1],
                                                            opacity: { duration: 0.35 },
                                                        },
                                                    },
                                                }}
                                                initial="initial"
                                                animate="enter"
                                                whileHover="whileHover"
                                                whileTap="whileHover"
                                                exit="exit"
                                                className="text-5xl text-background flex items-center justify-between"
                                            >
                                                <motion.span
                                                    variants={{
                                                        initial: { x: -20 },
                                                        whileHover: { x: 0 },
                                                    }}
                                                />
                                                <motion.span
                                                    variants={{
                                                        initial: { x: 0 },
                                                        whileHover: { x: 20 },
                                                    }}
                                                >
                                                    {link.title}
                                                </motion.span>
                                            </motion.div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <motion.div className="flex flex-wrap">
                                {social.map((link, i) => (
                                    <MotionLink
                                        href={link.url}
                                        target="_blank"
                                        className=" w-1/2 mt-1 text-background"
                                        variants={{
                                            initial: { opacity: 0, y: 20 },
                                            enter: (i: number) => ({
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.75 + i * 0.1,
                                                    ease: [0.215, 0.61, 0.355, 1],
                                                },
                                            }),
                                            exit: { opacity: 0, transition: { duration: 0.5, type: "tween", ease: "easeInOut" } },
                                        }}
                                        custom={i}
                                        key={link._id}
                                    >
                                        <TextReveal>{link.platform}</TextReveal>
                                    </MotionLink>
                                ))}
                            </motion.div>
                        </nav>
                    )}
                </motion.div>
                <Button
                    isActive={isActive}
                    toggleMenu={() => {
                        setIsActive(!isActive);
                    }}
                />
            </motion.header>
        </>
    );
};

function Button({
    isActive,
    toggleMenu,
}: {
    isActive: boolean;
    toggleMenu: () => void;
}) {
    return (
        <div className="absolute mt-9 mr-7 top-0 right-0 w-[100px] h-10 rounded-full overflow-hidden cursor-pointer">
            <motion.div
                className="relative w-full h-full"
                animate={{ top: isActive ? "-100%" : "0%" }}
                transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
            >
                <motion.div
                    className="bg-primary h-full w-full grid place-items-center text-white"
                    onClick={() => {
                        toggleMenu();
                    }}
                >
                    <TextReveal>Menu</TextReveal>
                </motion.div>
                <motion.div
                    className="bg-white h-full w-full grid place-items-center"
                    onClick={() => {
                        toggleMenu();
                    }}
                >
                    <TextReveal>Close</TextReveal>
                </motion.div>
            </motion.div>
        </div>
    );
}


export default Navbar;
