import { professionSection } from "../../data/portfolio";
import ServiceAccordion from "./ServiceAccordion";

const Profession = () => {
  return (
    <div className="relative">
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="cyber-grid-bg h-full w-full" style={{ perspective: "1000px", transform: "rotateX(60deg) scale(2)", transformOrigin: "top" }} />
      </div>

      <div className="relative z-10 space-y-16">
        {/* Header Area */}
        <div className="max-w-4xl">
          <div className="kicker !mb-10">
            <span className="kicker-dot" />
            <span className="kicker-text">
              {professionSection.sectionKicker}
            </span>
          </div>
          <h2 className="text-3xl md:text-[44px] font-bold text-white leading-[1.1] tracking-tight">
            {professionSection.title}
          </h2>
        </div>

        {/* Services List/Accordion */}
        <div className="w-full">
          <ServiceAccordion />
        </div>
      </div>
    </div>
  );
};

export default Profession;
