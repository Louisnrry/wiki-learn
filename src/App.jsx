import { useState } from "react";
import Landing from './pages/Landing/Landing';
import ParcheminHeader from "./components/header/ParcheminHeader";
import LivreConteneur from "./components/conteneur/LivreConteneur";
import CoursContent from "./components/conteneur/CoursContent";
import QuizRomain from "./quiz";
import ProfilPage from "./pages/profilPage/ProfilPage";
import RewardNotification from "./components/RewardNotification";
import "./App.css";

export default function App() {
  const [view, setView] = useState("landing");
  const theme = "Rome antique";

  if (view === "landing") {
    return (
      <Landing 
        onEnter={() => setView("rome")} 
        onOpenProfil={() => setView("profil")} 
      />
    );
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
          {view === "rome" ? (
            <div style={{ textAlign: "center", color: "#e8d8b0", fontFamily: "Georgia, serif" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Bienvenue dans la Rome Antique</h2>
              <p style={{ marginBottom: "2rem", fontStyle: "italic" }}>
                Découvrez les secrets de l'Empire et testez vos connaissances.
              </p>
              <button 
                onClick={() => setView("menu")}
                style={{
                  padding: "0.8rem 2rem",
                  fontSize: "1.2rem",
                  background: "linear-gradient(to bottom, #c9a030, #a07d20)",
                  border: "2px solid #fff",
                  color: "#fff",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontFamily: "Georgia, serif",
                  boxShadow: "0 4px 15px rgba(201, 160, 48, 0.4)"
                }}
              >
                Ouvrir le Livre
              </button>
            </div>
          ) : view === "menu" ? (
            <LivreConteneur
              onOpenCours={() => setView("cours")}
              onOpenQuiz={() => setView("quiz")}
            />
          ) : view === "cours" ? (
            <CoursContent onBack={() => setView("menu")} />
          ) : view === "quiz" ? (
            <QuizRomain onBack={() => setView("menu")} />
          ) : view === "profil" ? (
            <ProfilPage onBack={() => setView("landing")} />
          ) : null}
        </div>

        {/* Bouton retour vers la bibliothèque OU vers le thème */}
        {(view === "rome" || view === "profil") && (
          <button
            onClick={() => setView("landing")}
            className="app-rome__btn-retour"
          >
            ← Retourner à la bibliothèque
          </button>
        )}
        
        {/* Depuis le menu, on retourne d'abord à la sélection du thème */}
        {view === "menu" && (
          <button
            onClick={() => setView("rome")}
            className="app-rome__btn-retour"
          >
            ← Retourner au Thème
          </button>
        )}

      </main>

      {/* Notification de récompense (visible partout sauf landing) */}
      <RewardNotification />

      {/* 4. PETITS ÉLÉMENTS DÉCORATIFS */}
      <div className="app-rome__dot app-rome__dot--bottom"></div>
      <div className="app-rome__dot app-rome__dot--top"></div>

    </div>
  );
}