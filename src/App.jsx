import { useState } from "react";
import Landing from './components/Landing/Landing';
import ParcheminHeader from "./components/header/ParcheminHeader";
import LivreConteneur from "./components/conteneur/LivreConteneur";
import CoursContent from "./components/conteneur/CoursContent";
import QuizRomain from "./quiz";
import "./App.css";

export default function App() {
  const [view, setView] = useState("landing");
  const theme = "Rome antique";

  if (view === "landing") {
    return <Landing onEnter={() => setView("menu")} />;
  }

  return (
    <div className="app-rome">

      {/* 1. LUEUR MAGIQUE EN ARRIÈRE-PLAN */}
      <div className="app-rome__glow"></div>

      {/* 2. OVERLAY DÉGRADÉ POUR LA PROFONDEUR */}
      <div className="app-rome__overlay"></div>

      {/* 3. CONTENU PRINCIPAL */}
      <main className="app-rome__main">

        {/* En-tête */}
        <div className="app-rome__header">
          <ParcheminHeader title={theme} />
          <div className="app-rome__header-line"></div>
        </div>

        {/* Affichage conditionnel */}
        <div className="app-rome__content">
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
            className="app-rome__btn-retour"
          >
            ← Retourner à la bibliothèque
          </button>
        )}

      </main>

      {/* 4. PETITS ÉLÉMENTS DÉCORATIFS */}
      <div className="app-rome__dot app-rome__dot--bottom"></div>
      <div className="app-rome__dot app-rome__dot--top"></div>

    </div>
  );
}