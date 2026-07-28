export default function Container({ children, className = "" }) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md backdrop-saturate-125 border border-white/20 rounded-xl p-3 shadow-lg max-w-3xl m-3 flex flex-col gap-3 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
