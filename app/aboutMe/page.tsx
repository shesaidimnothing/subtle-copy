"use client";

import { IoAdd } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import AboutProjectCard from '../components/AboutProjectCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const AboutPage = () => {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={container}
      className="bg-[#1C1C1C] text-white min-h-screen p-6"
    >
      <div className="max-w-[600px] mx-auto">
        <Navbar />
        {/* About Section */}
        <motion.section variants={item} className="py-24">
          <motion.div variants={item} className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-[#4D4D4D]" />
            <h2 className="text-[#999999]">About</h2>
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-5xl font-bold mb-8"
          >
            It's Me Brian
          </motion.h1>
          
          <motion.p 
            variants={item}
            className="text-[#999999] text-xl leading-relaxed mb-16"
          >
            I'm Brian Do, a product designer with over 5 years of experience, currently residing in Jakarta, Indonesia. 
            I have a deep passion for crafting purposeful interfaces and products. My main goal is to bridge the divide 
            between people and technology, transforming intricate challenges into meaningful and seamless experiences.
          </motion.p>
        </motion.section>

        {/* More About Me Section */}
        <motion.section variants={item} className="py-12">
          <h2 className="text-2xl font-bold mb-6">More About Me</h2>
          <div className="space-y-6 text-[#999999] text-lg leading-relaxed">
            <p>
              Brian Do holds a bachelor's degree in Graphic Design from a prestigious university in the United States 
              and has a relentless drive for staying up-to-date with the latest technologies and design trends. 
              Actively involved in the design community, Brian regularly participates in diverse design conferences and meetups.
            </p>
            <p>
              When he's not immersed in design work, he finds solace in playing the guitar and exploring new coffee shops 
              in his local area. Brian firmly believes in maintaining a healthy work-life balance, making sure to take breaks 
              and reenergize his creativity. In his spare time, he also volunteers at a local animal shelter on weekends.
            </p>
          </div>
        </motion.section>

        {/* Side Projects Section */}
        <motion.section variants={item} className="py-12">
          <h2 className="text-2xl font-bold mb-6">My Side Projects</h2>
          <p className="text-[#999999] text-lg mb-8">
            I did passion side projects in the weekend, please take a look you will love it (i hope).
          </p>
          <div className="space-y-3">
            <AboutProjectCard title="Goven" subtitle="FRAMER TEMPLATE" />
            <AboutProjectCard title="Upshift" subtitle="WEB DESIGN COLLECTIONS" />
            <AboutProjectCard title="Subtle Folio" subtitle="FRAMER TEMPLATE" />
          </div>
        </motion.section>

        {/* Contact Section */}
        <Contact />
      </div>
      <Footer />
    </motion.main>
  );
};

export default AboutPage; 