import { motion } from "framer-motion";
import { leconRome } from "../../data/leconRome";

export default function CoursContent({ onBack }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full max-w-4xl bg-[#fdf5e6] border-[12px] border-[#5d4037] p-12 shadow-2xl rounded-sm"
    >
      <button onClick={onBack} className="mb-6 px-4 py-2 text-[#fdf5e6] bg-[#3e2723] font-serif font-bold border border-[#5d4037] rounded hover:bg-[#5d4037] transition-colors">
        ← Retour au menu
      </button>
      
      <h2 className="text-4xl font-serif font-bold text-[#3e2723] mb-8 border-b-2 border-[#8b5a2b]/30 pb-4">
        {leconRome.titre}
      </h2>

      <div className="space-y-8 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
        {leconRome.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-2xl font-serif font-bold text-[#8b5a2b] mb-3">{section.titre}</h3>
            <p className="text-[#3e2723] font-serif text-lg leading-relaxed italic">
              {section.contenu}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}