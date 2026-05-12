import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Address = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex max-w-84 cursor-pointer rounded-[10px] border border-[var(--border)] bg-[var(--bg-elevated)] p-3 transition-all duration-300 hover:scale-[1.02] hover:border-[var(--accent)] hover:shadow-[0_0_40px_var(--accent-dim)] md:p-4 lg:p-6 max-sm:mx-auto xs:not-odd:my-3"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`center aspect-square h-10 rounded-md md:h-12 ${
          hover ? "bg-[var(--accent)] text-[#0a0a0a]" : "bg-[var(--accent-dim)] text-[var(--accent)]"
        }`}
      >
        <FontAwesomeIcon icon={item?.icon} className="text-lg md:text-xl" />
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] font-normal text-[var(--muted)] md:text-[14px]">{item?.title}:</p>
        <p className="text-[14px] font-medium text-[var(--text)] md:text-[16px]">{item?.description}</p>
      </div>
    </div>
  );
};

export default Address;
