import { FaXTwitter, FaInstagram, FaDribbble, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-24 bg-[#1C1C1C] px-6">
      <div className="max-w-[600px] mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#4D4D4D]" />
          <h2 className="text-white text-2xl font-bold">Follow Me</h2>
        </div>
        <div className="flex justify-center gap-4">
          <a href="#" className="p-3 rounded-full hover:bg-[#2A2A2A] transition-colors text-[#999999] hover:text-white">
            <FaXTwitter size={20} />
          </a>
          <a href="#" className="p-3 rounded-full hover:bg-[#2A2A2A] transition-colors text-[#999999] hover:text-white">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="p-3 rounded-full hover:bg-[#2A2A2A] transition-colors text-[#999999] hover:text-white">
            <FaDribbble size={20} />
          </a>
          <a href="#" className="p-3 rounded-full hover:bg-[#2A2A2A] transition-colors text-[#999999] hover:text-white">
            <FaLinkedinIn size={20} />
          </a>
        </div>
        <div className="mt-24 text-center space-y-1">
          <p className="text-[#999999] text-sm">
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 