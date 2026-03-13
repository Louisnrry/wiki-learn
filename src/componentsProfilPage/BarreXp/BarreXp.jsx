import "./BarreXp.css";

export default function BarreXp({ xp, xpNecessaire, niveau }) {
  const pourcentage = Math.min((xp / xpNecessaire) * 100, 100);

  return (
    <div className="profil__xp">
      <div className="profil__xp-label">
        <span>Niveau {niveau}</span>
        <span>{xp}/{xpNecessaire} XP</span>
      </div>
      <div className="profil__xp-barre">
        <div
          className="profil__xp-remplissage"
          style={{ width: `${pourcentage}%` }}
        />
      </div>
      <div className="profil__xp-suite">
        Niveau {niveau + 1} dans {xpNecessaire - xp} XP
      </div>
    </div>
  );
}
