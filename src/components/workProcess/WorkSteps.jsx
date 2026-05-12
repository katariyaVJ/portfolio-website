import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`center h-11 w-11 rounded-md text-center sm:h-18 sm:w-18 ${
          hover ? "bg-[var(--accent)] text-white" : "bg-[var(--accent-dim)] text-[var(--accent)]"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-sm:p-2 sm:h-8 sm:w-8"
        >
          <path d={data?.svgPath} fill="currentColor" />
        </svg>
      </div>
      <div className="mt-3 xs:mt-4 sm:mt-8">
        <p className="font-semibold text-[var(--text)] sm:text-xl">{`${data?.id}. ${data?.title}`}</p>
        <p className="mt-3 text-[13px] text-[var(--muted)] sm:text-[16px]">{data?.description}</p>
      </div>
    </div>
  );
};

export default WorkSteps;
