export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.35rem] border border-white/12 bg-linear-to-br from-white/10 via-white/6 to-white/0 p-5 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.65)] backdrop-blur-sm backdrop-saturate-125 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
