import { useState } from "react";
import { useGame, RECOMPENSES } from "../context/GameContext";

function BarreXp({ xp, xpNecessaire, niveau }) {
    const pourcentage = Math.min((xp/xpNecessaire)*100, 100);
    return (
        <div className="profil__xp">
            <div className="profil__xp-label">
                <span>Niveau {niveau} </span>
                <span> {xp}/{xpNecessaire} XP </span> 
            </div> 
            <div className="profil__xp-barre">
                <div className="profil__xp-remplissage" style={{ width: '${pourcentage}%'}} />
            </div>
            <div className="profil__xp-suite">
                Niveau {niveau +1 } dans {xpNecessaire -xp } XP
            </div>
        </div>
    );
}

function CarteRecompense({ recompense, debloquee, actif, onClick }) {
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

