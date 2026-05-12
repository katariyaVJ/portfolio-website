import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { contactSection } from "../../data/portfolio";

const Contact = () => {
  return (
    <div className="relative z-10 -mt-8 px-2 pb-16">
      <div
        className="content rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl md:p-10 lg:p-16"
        id="contact"
      >
        <div className="flex flex-col-reverse justify-between lg:flex-row lg:gap-5 xl:gap-20">
          <div>
            <div>
              <p className="hidden max-w-xl text-[35px] font-semibold leading-tight text-[var(--text)] max-lg:hidden">
                {contactSection.title}
              </p>
              <p className="max-lg:text-center pt-4 text-sm text-[var(--muted)] sm:text-base md:text-lg md:max-lg:text-center">
                {contactSection.subtitle}
              </p>
            </div>
            <div className="my-8.75 flex flex-col gap-4 sm:max-lg:flex-row sm:max-lg:justify-between sm:max-lg:gap-4">
              {contactSection.addressItems.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-auto py-4 lg:py-6">
            <p className="mb-2 text-center text-xl font-semibold text-[var(--text)] xs:text-2xl sm:text-2xl md:text-[38px] lg:hidden">
              {contactSection.title}
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
