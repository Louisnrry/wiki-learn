import { useState } from "react";
import { useGame, RECOMPENSES } from "../../context/GameContext";

// Import des composants depuis componentsProfilPage
import ProfilHeader from "../../components/componentsProfilPage/ProfilHeader/ProfilHeader";
import OngletsProfil from "../../components/componentsProfilPage/OngletsProfil/OngletsProfil";
import GrilleRecompenses from "../../components/componentsProfilPage/GrilleRecompenses/GrilleRecompenses";

// Import du CSS de la page (variables + layout uniquement)
import "./ProfilPage.css";

export default function ProfilPage({ onBack }) {
  const {
    xp, niveau, xpNecessaire,
    themeSombre, avatarActif,
    basculerTheme, changerAvatar,
    estDebloque, peutUtiliserThemeSombre,
  } = useGame();

  const [onglet, setOnglet] = useState("badges");

  const badges = RECOMPENSES.filter((r) => r.type === "badge");
  const avatars = RECOMPENSES.filter((r) => r.type === "avatar");

  return (
    <div className="profil">
      <div className="profil__inner">
        {onBack && (
          <button onClick={onBack} className="profil__btn-retour">
            ← Retour au menu
          </button>
        )}
        <ProfilHeader
          avatarActif={avatarActif}
          niveau={niveau}
          xp={xp}
          xpNecessaire={xpNecessaire}
          themeSombre={themeSombre}
          peutUtiliserThemeSombre={peutUtiliserThemeSombre}
          basculerTheme={basculerTheme}
        />
        <OngletsProfil
          onglet={onglet}
          setOnglet={setOnglet}
          badges={badges}
          avatars={avatars}
          estDebloque={estDebloque}
        />
        <GrilleRecompenses
          onglet={onglet}
          badges={badges}
          avatars={avatars}
          estDebloque={estDebloque}
          avatarActif={avatarActif}
          changerAvatar={changerAvatar}
        />
      </div>
    </div>
  );
}
