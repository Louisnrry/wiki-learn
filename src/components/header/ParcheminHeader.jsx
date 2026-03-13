import { motion } from "framer-motion";

export default function ParcheminHeader({ title }) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mb-12"
    >
      {/* Effet de ruban / Parchemin */}
      <div className="bg-[#f4e4bc] border-y-4 border-x-2 border-[#8b5a2b] px-16 py-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
        {/* Texture de papier en fond */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        
        <h1 className="text-7xl font-serif font-black text-[#3e2723] uppercase tracking-widest sepia drop-shadow-sm">
          {title}
        </h1>
        
        {/* Petits ornements sur les côtés */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[#8b5a2b] text-2xl">✦</div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8b5a2b] text-2xl">✦</div>
      </div>
    </motion.header>
  );
}