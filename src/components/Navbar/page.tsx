"use client";
import Image from "next/image";
import Logo from "@/assets/img/Logo.png";
import Link from "next/link";
import Chevron_Down from "@/assets/svg/chevron-down.svg"; // Imported Chevron_Down icon
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SocialHandle } from "@/utils/interface";
import { TextReveal } from "@/components/ui/typography";
import { useMediaQuery } from "@/utils/useMediaQuery";

interface NavbarHeaderProps {
    social: SocialHandle[];
}

const NavbarHeader = ({ social = [] }: NavbarHeaderProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown visibility
    const isMobile = useMediaQuery("(max-width:768px)");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const MotionLink = motion.create(Link);
    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollState = window.scrollY;

            if (currentScrollState > scrollPosition && currentScrollState > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setScrollPosition(currentScrollState);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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

    const navLinks = [
        { title: "หน้าหลัก", href: "/" },
        { title: "บุคลากร", href: "#" },
        { title: "หลักสูตร", href: "#", hasChevron: true }, 
        { title: "บริการ", href: "#" },
        { title: "ข่าวสาร", href: "#" },
        { title: "ติดต่อเรา", href: "#" },
    ];

    const courseDropdownLinks = [
        { title: "หลักสูตร A", href: "#" },
        { title: "หลักสูตร B", href: "#" },
        { title: "หลักสูตร C", href: "#" },
    ];

    return (
        <>
            <div className="flex justify-center">
                <motion.nav
                    className={`w-full z-50 px-10 md:px-10 py-10 fixed top-0 transition-all duration-700 ease-in-out h-16 font-medium flex items-center justify-center
        ${isVisible ? "translate-y-0" : "-translate-y-full"} 
        ${scrollPosition >= 50 ? 'py-14 bg-black bg-opacity-30 backdrop-blur-md' : 'bg-transparent'}`}
                    variants={{
                        visible: { y: 0 },
                        hidden: { y: '-130%' },
                    }}
                    initial={{ y: '-100%' }}
                    animate={isVisible ? 'visible' : 'hidden'}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                    <div className="hidden xl:block w-full z-20">
                        <div className="flex justify-between items-center ">
                            <div>
                                <Image src={Logo} className="w-20 md:w-32 lg:w-40 h-full" alt="Logo" />
                            </div>

                            <div className="flex items-center text-md 2xl:text-2xl text-white"
                            >
                                {navLinks.map((link, index) => (
                                    <div
                                        key={index}
                                        className="relative"
                                        onMouseEnter={() => link.title === "หลักสูตร" && setIsDropdownOpen(true)} // Show dropdown when hovering
                                        onMouseLeave={() => link.title === "หลักสูตร" && setIsDropdownOpen(false)} // Hide dropdown when mouse leaves
                                    >
                                        <Link
                                            className="px-3 border-l-2 border-white"
                                            href={link.href}
                                        >
                                            {link.title}
                                            {link.hasChevron && (
                                                <Image
                                                    src={Chevron_Down}
                                                    width={16}
                                                    height={16}
                                                    alt="Chevron Down"
                                                    className="inline ml-2"
                                                />
                                            )}
                                        </Link>

                                        {/* Dropdown menu for "หลักสูตร" with framer-motion */}
                                        {isDropdownOpen && link.title === "หลักสูตร" && (
                                            <motion.div
                                                className="absolute top-full left-0 w-48 bg-black bg-opacity-30 backdrop-blur-xl shadow-md mt- rounded-lg"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {courseDropdownLinks.map((dropdownLink, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={dropdownLink.href}
                                                        className="block px-4 py-2 hover:bg-gray-200"
                                                    >
                                                        {dropdownLink.title}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </div>
                                ))}

                                {/* สมัครเรียน Button */}
                                <div>
                                    <Link
                                        className="bg-primary px-5 py-2 rounded-full text-white hover:bg-opacity-90"
                                        href="#"
                                    >
                                        สมัครเรียน
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.header className="block lg:hidden fixed top-0 right-0 z-20">
                        <div className="fixed lg:top-0 pt-5 top-2 md:left-8 left-6 z-30">
                            <Link href={"/"}>
                                <div>
                                    <Image src={Logo} width={150} height={150} alt="Logo" />
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
                                            <div key={`b_${i}`} className="" onClick={() => setIsActive(false)}>
                                                <Link href={link.href} className="text-white flex flex-wrap overflow-hidden">
                                                    <motion.div
                                                        variants={{
                                                            initial: { y: 50},
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
                </motion.nav>
            </div>
        </>
    );
};

export default NavbarHeader;

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
