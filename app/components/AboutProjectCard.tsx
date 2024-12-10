import { HiArrowRight } from "react-icons/hi2";

interface AboutProjectCardProps {
  title: string;
  subtitle: string;
}

const AboutProjectCard = ({ title, subtitle }: AboutProjectCardProps) => (
  <div className="group cursor-pointer bg-[#2A2A2A] rounded-2xl p-6 hover:bg-[#333333] transition-colors">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#333333] overflow-hidden flex items-center justify-center">
          <div className="w-8 h-8 flex items-center justify-center text-white">
            {title[0].toUpperCase()}
          </div>
        </div>
        <h3 className="text-white text-xl font-medium">{title}</h3>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-[#999999] text-sm">{subtitle}</span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <HiArrowRight className="text-[#999999]" size={20} />
        </div>
      </div>
    </div>
  </div>
);

export default AboutProjectCard; 