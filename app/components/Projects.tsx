import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="py-24 bg-[#1C1C1C] px-6">
      <div className="max-w-[600px] mx-auto">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#4D4D4D]" />
          <h2 className="text-white text-2xl font-bold">Projects</h2>
          <div className="flex-grow" />
          <button className="text-[#999999] hover:text-white transition-colors">
            View All →
          </button>
        </div>
        <div className="space-y-4">
          <ProjectCard 
            title="Morva labs"
            categories={["Visual design", "Branding"]}
            logo="/morva-logo.svg"
          />
          <ProjectCard 
            title="Rectangle"
            categories={["Product design", "Icon design"]}
            logo="/rectangle-logo.svg"
          />
          <ProjectCard 
            title="Simply"
            categories={["Landing page", "Illustration design"]}
            logo="/simply-logo.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects; 