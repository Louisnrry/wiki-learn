import LivreButton from "../buton/LivreButton";

export default function LivreConteneur({ onOpenCours, onOpenQuiz }) {
  return (
    <div className="relative w-full max-w-4xl aspect-[16/10] bg-[#f5e6c8] border-[12px] border-[#7a3515] shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-[40px] flex overflow-hidden">
      
      {/* Page Gauche */}
      <div className="flex-1 border-r-2 border-[#7a3515]/20 p-12 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-1 bg-[#c9a030] mb-4 rounded-full opacity-60"></div>
        <h2 className="text-3xl font-serif font-bold text-[#3a1505] mb-6 tracking-tight">QUIZ IMPÉRIAL</h2>
        <p className="text-[#7a3515] font-serif italic mb-8 px-4">"Mettez à l'épreuve vos connaissances romaines."</p>
        <LivreButton variant="primary" onClick={onOpenQuiz}>COMMENCER</LivreButton>
      </div>

      {/* Page Droite */}
      <div className="flex-1 p-12 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-1 bg-[#c9a030] mb-4 rounded-full opacity-60"></div>
        <h2 className="text-3xl font-serif font-bold text-[#3a1505] mb-6 tracking-tight">BIBLIOTHÈQUE</h2>
        <p className="text-[#7a3515] font-serif italic mb-8 px-4">"Consultez les archives pour préparer le défi."</p>
        <LivreButton variant="primary" onClick={onOpenCours}>LIRE LA LEÇON</LivreButton>
      </div>

      {/* Reliure centrale (effet illustré) */}
      <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-[#7a3515]/10 rounded-full shadow-inner"></div>
    </div>
  );
}