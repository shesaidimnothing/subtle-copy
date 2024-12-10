"use client";

import { HiOutlineHome } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { TbWindow } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center mb-20 max-w-[600px] mx-auto"
    >
      <div className="flex gap-4">
        <Link href="/">
          <button className="p-3 rounded-full hover:bg-[#2A2A2A]">
            <HiOutlineHome size={24} />
          </button>
        </Link>
        <Link href="/aboutMe">
          <button className="p-3 rounded-full hover:bg-[#2A2A2A]">
            <CgProfile size={24} />
          </button>
        </Link>
        <button className="p-3 rounded-full hover:bg-[#2A2A2A]">
          <TbWindow size={24} />
        </button>
        <button className="p-3 rounded-full hover:bg-[#2A2A2A]">
          <IoBagOutline size={24} />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-3 rounded-full hover:bg-[#2A2A2A]">
          <IoSunnyOutline size={24} />
        </button>
        <Link href="/contact">
          <button className="bg-[#2A2A2A] text-white px-6 py-2 rounded-full hover:bg-[#3A3A3A] transition-colors">
            Hire Me
          </button>
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar; 