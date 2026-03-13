import { useState } from "react";
import Landing from './components/Landing/Landing';
import ParcheminHeader from "./components/header/ParcheminHeader";
import LivreConteneur from "./components/conteneur/LivreConteneur";
import CoursContent from "./components/conteneur/CoursContent";
import QuizRomain from "./quiz";

export default function App() {
  // Navigation state: 'landing' (Library) or 'menu'/'cours'/'quiz' (Rome Antique)
  const [view, setView] = useState("landing");
  const theme = "Rome antique";

  if (view === "landing") {
    return <Landing onEnter={() => setView("menu")} />;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1a0b05] flex flex-col items-center justify-start">
      
      {/* 1. LUEUR MAGIQUE EN ARRIÈRE-PLAN */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a030] opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>

      {/* 2. OVERLAY DÉGRADÉ POUR LA PROFONDEUR */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-[#1a0b05]"></div>

      {/* 3. CONTENU PRINCIPAL */}
      <main className="relative z-10 w-full flex flex-col items-center pt-12 pb-10 px-4">
        
        {/* En-tête */}
        <div className="mb-10 text-center">
          <ParcheminHeader title={theme} />
          <div className="h-1 w-32 bg-[#c9a030]/40 mx-auto mt-2 rounded-full"></div>
        </div>
        
        {/* Affichage conditionnel */}
        <div className="w-full flex justify-center items-center min-h-[60vh]">
          {view === "menu" ? (
            <LivreConteneur 
              onOpenCours={() => setView("cours")}
              onOpenQuiz={() => setView("quiz")}
            />
          ) : view === "cours" ? (
            <CoursContent onBack={() => setView("menu")} />
          ) : (
            <QuizRomain onBack={() => setView("menu")} />
          )}
        </div>

        {/* Bouton retour vers la bibliothèque */}
        {view === "menu" && (
          <button 
            onClick={() => setView("landing")}
            className="mt-8 px-6 py-2 border border-[#c9a030]/30 text-[#c9a030]/60 hover:text-[#c9a030] hover:border-[#c9a030] transition-all font-serif italic"
          >
            ← Retourner à la bibliothèque
          </button>
        )}

      </main>

      {/* 4. PETITS ÉLÉMENTS DÉCORATIFS */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-[#c9a030] rounded-full blur-sm opacity-20"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#c9a030] rounded-full blur-md opacity-10"></div>

    </div>
  );
}