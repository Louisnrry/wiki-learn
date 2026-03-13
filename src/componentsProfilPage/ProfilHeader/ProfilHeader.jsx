import BarreXp from "../BarreXp/BarreXp";
import "./ProfilHeader.css";

export default function ProfilHeader({
  avatarActif,
  niveau,
  xp,
  xpNecessaire,
  themeSombre,
  peutUtiliserThemeSombre,
  basculerTheme,
}) {
  return (
    <div className="profil__header">
      <div className="profil__header-top">
        <div className="profil__avatar">{avatarActif}</div>
        <div className="profil__infos">
          <div className="profil__nom">Mon Profil</div>
          <div className="profil__badge-niveau">⭐ Niveau {niveau}</div>
        </div>
        <button
          className={`profil__bouton-theme ${peutUtiliserThemeSombre ? "profil__bouton-theme--actif" : "profil__bouton-theme--bloque"}`}
          onClick={basculerTheme}
          title={peutUtiliserThemeSombre ? "Basculer le thème" : "Débloqué au niveau 2"}
        >
          {themeSombre ? "☀️" : "🌙"}
          {!peutUtiliserThemeSombre && <span>Niv.2</span>}
        </button>
      </div>
      <BarreXp xp={xp} xpNecessaire={xpNecessaire} niveau={niveau} />
    </div>
  );
}
