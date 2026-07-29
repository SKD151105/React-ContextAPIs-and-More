export default function Container({ children, className = "" }) {
  return (
    <div
      className={`flex w-full flex-col gap-4 rounded-[1.6rem] border border-white/14 bg-white/8 p-[var(--container-padding)] shadow-[0_24px_70px_-38px_rgba(3,7,18,0.85)] backdrop-blur-md backdrop-saturate-125 ${className}`.trim()}
    >
      {children}
    </div>
  );
}
