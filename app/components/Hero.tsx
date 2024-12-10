"use client";

import Image from "next/image";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#1C1C1C] text-white p-6">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-[600px] mx-auto text-center"
      >
        <div className="space-y-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-[#4D4D4D]" />
            <p className="text-[#999999]">Product Designer</p>
          </motion.div>
          <div>
            <span className="inline-block px-3 py-1 bg-[#1A3A2A] text-[#4ADE80] text-sm rounded-full">
              AVAILABLE FOR WORK
            </span>
          </div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-6xl font-bold"
          >
            I'm Brian Do
          </motion.h1>
          <p className="text-[#999999] text-xl">
            Product designer from Jakarta, ID. Currently designing at Rectangle.
          </p>
          <div className="flex gap-3 pt-4 justify-center">
            <Link href="/contact">
              <button className="bg-[#2A2A2A] text-white px-8 py-4 rounded-full hover:bg-[#3A3A3A] transition-colors">
                Hire Me
              </button>
            </Link>
            <button className="border border-[#2A2A2A] text-white px-8 py-4 rounded-full hover:bg-[#2A2A2A] transition-colors">
              Copy Email
            </button>
          </div>
        </div>
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
          className="w-32 h-32 rounded-full bg-[#2A2A2A] overflow-hidden mx-auto mt-12"
        >
          <Image src="/avatar.png" alt="Profile" width={128} height={128} priority />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 