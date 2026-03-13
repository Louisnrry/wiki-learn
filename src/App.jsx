import { useState } from "react";
import ParcheminHeader from "./components/header/ParcheminHeader";
import LivreConteneur from "./components/conteneur/LivreConteneur";
import CoursContent from "./components/conteneur/CoursContent";

function App() {
  // Gestion de la navigation entre le menu et le cours
  const [page, setPage] = useState("menu");
  const theme = "Rome antique";

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#1a0b05] flex flex-col items-center justify-start">
      
      {/* 1. LUEUR MAGIQUE EN ARRIÈRE-PLAN (Inspirée de l'accueil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a030] opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>

      {/* 2. OVERLAY DÉGRADÉ POUR LA PROFONDEUR */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/40 via-transparent to-[#1a0b05]"></div>

      {/* 3. CONTENU PRINCIPAL */}
      <main className="relative z-10 w-full flex flex-col items-center pt-12 pb-10 px-4">
        
        {/* En-tête adapté au nouveau style */}
        <div className="mb-10 text-center">
          <ParcheminHeader title={theme} />
          <div className="h-1 w-32 bg-[#c9a030]/40 mx-auto mt-2 rounded-full"></div>
        </div>
        
        {/* Affichage conditionnel avec les nouvelles fonctions de navigation */}
        <div className="w-full flex justify-center items-center min-h-[60vh]">
          {page === "menu" ? (
            <LivreConteneur onOpenCours={() => setPage("cours")} />
          ) : (
            <CoursContent onBack={() => setPage("menu")} />
          )}
        </div>

      </main>

      {/* 4. PETITS ÉLÉMENTS DÉCORATIFS (Optionnel - Particules dorées) */}
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-[#c9a030] rounded-full blur-sm opacity-20"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-[#c9a030] rounded-full blur-md opacity-10"></div>
    </div>
  );
}

export default App;