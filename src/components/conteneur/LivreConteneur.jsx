import LivreButton from "../buton/LivreButton";
import "./LivreConteneur.css";

export default function LivreConteneur({ onOpenCours, onOpenQuiz, onOpenProfil }) {
  return (
    <div className="livre">

      {/* Page Gauche */}
      <div className="livre__page livre__page--gauche">
        <div className="livre__separateur"></div>
        <h2 className="livre__titre">QUIZ IMPÉRIAL</h2>
        <p className="livre__description">"Mettez à l'épreuve vos connaissances romaines."</p>
        <LivreButton variant="primary" onClick={onOpenQuiz}>COMMENCER</LivreButton>
      </div>

      {/* Page Droite */}
      <div className="livre__page">
        <div className="livre__separateur"></div>
        <h2 className="livre__titre">BIBLIOTHÈQUE</h2>
        <p className="livre__description">"Consultez les archives pour préparer le défi."</p>
        <LivreButton variant="primary" onClick={onOpenCours}>LIRE LA LEÇON</LivreButton>

        {/* Bouton Profil */}
        <div style={{ marginTop: '1.5rem' }}>
          <LivreButton variant="primary" onClick={onOpenProfil}>MON PROFIL</LivreButton>
        </div>
      </div>

      {/* Reliure centrale */}
      <div className="livre__reliure"></div>
    </div>
  );
}