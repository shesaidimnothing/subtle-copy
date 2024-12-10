"use client";

import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <main className="bg-[#1C1C1C] text-white min-h-screen p-6">
      <div className="max-w-[600px] mx-auto">
        <Navbar />
        
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-24"
        >
          <div className="flex items-center gap-2 mb-12">
            <div className="w-2 h-2 rounded-full bg-[#4D4D4D]" />
            <h2 className="text-[#999999]">Hire Me</h2>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold mb-6"
          >
            Design Inquiry
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#999999] text-xl mb-12"
          >
            Got an idea and need design help? Reach out now
          </motion.p>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-[#2A2A2A] rounded-xl p-4 w-full outline-none focus:ring-2 focus:ring-[#3A3A3A] transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#2A2A2A] rounded-xl p-4 w-full outline-none focus:ring-2 focus:ring-[#3A3A3A] transition-all"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="bg-[#2A2A2A] rounded-xl p-4 w-full outline-none focus:ring-2 focus:ring-[#3A3A3A] transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#2A2A2A] text-white py-4 rounded-xl hover:bg-[#3A3A3A] transition-colors font-medium"
            >
              Submit
            </button>
          </motion.form>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage; 