/**
 * Animated perspective grid + ambient glow — inspired by modern dev portfolios.
 */
const CyberBackground = () => {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="cyber-grid absolute inset-0 opacity-[var(--grid-opacity)]" />
      <div className="cyber-vignette absolute inset-0" />
      <div className="cyber-glow absolute -top-40 left-1/2 h-[min(80vh,600px)] w-[min(120vw,900px)] -translate-x-1/2 rounded-full blur-[100px]" />
    </div>
  );
};

export default CyberBackground;
