export default function LivreButton({ children, variant = "primary", onClick }) {
  const baseStyle = "px-8 py-3 rounded-full font-serif font-bold text-sm tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-md";
  
  // Marron foncé et écriture dorée
  const primaryStyle = "bg-[#3a1505] text-[#f5e6c8] border-2 border-[#c9a030]";
  // Contour marron et fond clair
  const secondaryStyle = "border-2 border-[#3a1505] text-[#3a1505] hover:bg-[#3a1505] hover:text-[#f5e6c8]";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variant === "primary" ? primaryStyle : secondaryStyle}`}>
      {children}
    </button>
  );
}