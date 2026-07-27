export default function Card({ children }) {
  return (
    <div className="item bg-l-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-sm backdrop-saturate-125 border border-white/15 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.65)] rounded-xl p-5">
      {children}
    </div>
  );
}
