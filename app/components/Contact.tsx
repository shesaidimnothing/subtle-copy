"use client";

import { IoAdd } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="py-24 bg-[#1C1C1C] px-6 text-center">
      <div className="max-w-[720px] mx-auto space-y-6">
        <h2 className="text-5xl md:text-6xl font-bold text-white">Let's work together.</h2>
        <p className="text-[#999999] text-xl">Creating user experience and visual appealing design</p>
        <div className="flex gap-3 justify-center pt-4">
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-[#2A2A2A] text-white px-8 py-4 rounded-full hover:bg-[#3A3A3A] transition-colors">
              <IoAdd size={20} />
              Hire Me
            </button>
          </Link>
          <button className="flex items-center gap-2 border border-[#2A2A2A] text-white px-8 py-4 rounded-full hover:bg-[#2A2A2A] transition-colors">
            <LuCopy size={20} />
            Copy Email
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact; 