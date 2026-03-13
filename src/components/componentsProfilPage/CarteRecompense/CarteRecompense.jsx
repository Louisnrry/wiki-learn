import "./CarteRecompense.css";

export default function CarteRecompense({ recompense, debloquee, actif, onClick }) {
  return (
    <div
      onClick={debloquee && onClick ? onClick : undefined}
      className={`
        profil__carte
        ${debloquee ? "profil__carte--debloquee" : "profil__carte--verrouillee"}
        ${actif ? "profil__carte--active" : ""}
      `}
    >
      {!debloquee && <span className="profil__carte-cadenas">🔒</span>}
      {actif && <span className="profil__carte-coche">✓</span>}
      <span className="profil__carte-emoji">{recompense.emoji}</span>
      <span className="profil__carte-nom">{recompense.nom}</span>
      <span className="profil__carte-niveau">Niv. {recompense.niveau}</span>
    </div>
  );
}
