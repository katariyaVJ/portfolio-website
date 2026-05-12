const TestimonialTemplate = ({ testimonial }) => {
  return (
    <div className="flex h-full flex-col">
      <div className="mx-auto max-w-144.25 pb-5 text-center sm:pb-10 md:pb-14">
        <p className="text-xs text-[var(--muted)] sm:text-[14px] md:text-[18px]">{testimonial?.message}</p>
      </div>
      <div className="text-center">
        <p className="pb-6 text-[14px] font-medium text-[var(--text)] sm:text-lg">“{testimonial?.quote}”</p>
        <div className="mx-auto">
          <p className="mb-2 text-[14px] font-medium text-[var(--text)] sm:text-[16px] md:text-lg">{testimonial?.name}</p>
          <p className="text-[14px] font-light text-[var(--muted)] md:text-[16px]">{testimonial?.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
