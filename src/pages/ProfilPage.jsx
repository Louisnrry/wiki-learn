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


export default function ProfilPage(){
    const {
        xp, niveau, xpNecessaire,
        themeSombre, avatarActif,
        basculerTheme, changerAvatar,
        estDebloque, peutUtiliserThemeSombre,
        gererBonneReponse,
    } = useGame();

    const [onglet, setOnglet] = useState("badges");

    const badges = RECOMPENSES.filter((r) =>r.type === "badge");
    const avatars = RECOMPENSES.filter((r) => r.type ==="avatar");

    return (
        <>

      <style>{`
        /* ── Variables thème clair / sombre ── */
        :root, [data-theme="light"] {
          --bg:       #f0f4ff;
          --bg-2:     #e2e8f0;
          --carte:    #ffffff;
          --texte:    #1a1a2e;
          --texte-2:  #64748b;
          --bordure:  #cbd5e1;
          --ombre:    rgba(0,0,0,0.08);
        }
        [data-theme="dark"] {
          --bg:       #0d1117;
          --bg-2:     #161b22;
          --carte:    #1c2128;
          --texte:    #e6edf3;
          --texte-2:  #8b949e;
          --bordure:  #30363d;
          --ombre:    rgba(0,0,0,0.4);
        }
 
        /* ── Layout ── */
        .profil { min-height: 100vh; background: var(--bg); color: var(--texte);
                  padding: 2rem 1rem; transition: background 0.3s, color 0.3s;
                  font-family: 'Segoe UI', system-ui, sans-serif; }
        .profil__inner { max-width: 680px; margin: 0 auto; }
 
        /* ── Carte en-tête ── */
        .profil__header { background: var(--carte); border-radius: 20px; padding: 2rem;
                          margin-bottom: 1.5rem; box-shadow: 0 4px 24px var(--ombre);
                          border: 1px solid var(--bordure); }
        .profil__header-top { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; }
        .profil__avatar { width: 80px; height: 80px; border-radius: 50%; flex-shrink: 0;
                          background: linear-gradient(135deg, #4f8ef7, #a78bfa);
                          display: flex; align-items: center; justify-content: center;
                          font-size: 2.5rem; box-shadow: 0 4px 16px rgba(79,142,247,0.3); }
        .profil__infos { flex: 1; }
        .profil__nom { font-size: 1.4rem; font-weight: 700; margin-bottom: 0.4rem; }
        .profil__badge-niveau { display: inline-flex; align-items: center; gap: 0.4rem;
                                background: linear-gradient(135deg, #4f8ef7, #a78bfa);
                                color: white; border-radius: 99px; padding: 0.2rem 0.8rem;
                                font-size: 0.8rem; font-weight: 600; }
        .profil__bouton-theme { background: var(--bg-2); border: 1px solid var(--bordure);
                                border-radius: 10px; padding: 0.6rem 0.8rem; font-size: 1.2rem;
                                display: flex; flex-direction: column; align-items: center; gap: 0.1rem;
                                transition: all 0.2s; }
        .profil__bouton-theme--actif  { cursor: pointer; }
        .profil__bouton-theme--bloque { cursor: not-allowed; opacity: 0.4; }
        .profil__bouton-theme span    { font-size: 0.5rem; color: var(--texte-2); }
 
        /* ── Barre XP ── */
        .profil__xp { width: 100%; }
        .profil__xp-labels { display: flex; justify-content: space-between;
                             font-size: 0.8rem; color: var(--texte-2); margin-bottom: 0.5rem; }
        .profil__xp-barre { height: 10px; background: var(--bg-2); border-radius: 99px; overflow: hidden; }
        .profil__xp-remplissage { height: 100%; background: linear-gradient(90deg, #4f8ef7, #a78bfa);
                                  border-radius: 99px; transition: width 0.6s cubic-bezier(0.34,1.56,0.64,1);
                                  box-shadow: 0 0 10px rgba(79,142,247,0.5); }
        .profil__xp-suite { font-size: 0.75rem; color: var(--texte-2); margin-top: 0.4rem; text-align: right; }
 
        /* ── Onglets ── */
        .profil__onglets { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
        .profil__onglet { padding: 0.6rem 1.4rem; border-radius: 10px; border: 1px solid var(--bordure);
                          cursor: pointer; font-weight: 600; font-size: 0.85rem;
                          background: var(--carte); color: var(--texte-2); transition: all 0.2s; }
        .profil__onglet--actif { background: linear-gradient(135deg, #4f8ef7, #a78bfa);
                                 color: white; border-color: transparent;
                                 box-shadow: 0 4px 12px rgba(79,142,247,0.3); }
 
        /* ── Grille récompenses ── */
        .profil__grille-wrapper { background: var(--carte); border-radius: 20px; padding: 1.5rem;
                                  box-shadow: 0 4px 24px var(--ombre); border: 1px solid var(--bordure); }
        .profil__grille { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem; }
 
        /* ── Carte récompense ── */
        .profil__carte { position: relative; display: flex; flex-direction: column; align-items: center;
                         gap: 0.5rem; padding: 1rem; border-radius: 12px; transition: all 0.2s;
                         background: var(--carte); border: 1px solid var(--bordure); }
        .profil__carte--verrouillee { opacity: 0.4; filter: grayscale(1); border-color: transparent;
                                      background: var(--bg-2); }
        .profil__carte--active { border: 2px solid #FFD700; transform: scale(1.05); }
        .profil__carte-cadenas  { position: absolute; top: 0.4rem; right: 0.4rem; font-size: 0.7rem; }
        .profil__carte-coche    { position: absolute; top: 0.4rem; right: 0.4rem; font-size: 0.6rem;
                                  background: #FFD700; border-radius: 50%; width: 16px; height: 16px;
                                  display: flex; align-items: center; justify-content: center; }
        .profil__carte-emoji   { font-size: 2rem; }
        .profil__carte-nom     { font-size: 0.75rem; font-weight: 600; text-align: center; color: var(--texte); }
        .profil__carte-niveau  { font-size: 0.65rem; color: var(--texte-2); }
 
        /* ── Zone de test ── */
        .profil__test { margin-top: 1.5rem; padding: 1rem; background: var(--carte); border-radius: 12px;
                        border: 1px dashed var(--bordure); text-align: center; }
        .profil__test p { font-size: 0.75rem; color: var(--texte-2); margin-bottom: 0.8rem; }
        .profil__test button { padding: 0.7rem 2rem; background: linear-gradient(135deg, #4f8ef7, #a78bfa);
                               color: white; border: none; border-radius: 10px; cursor: pointer;
                               font-weight: 700; font-size: 0.9rem; }
      `}</style>

      <div className="profil">
        <div className="profil__inner">

            <div className="profil__header">
                <div className="profil__header-top">
                    <div className="profil__avatar">{avatarActif}</div>
                    <div className="profil__infos">
                        <div className="profil__nom">Mon Profil</div>
                        <div className="profil__badge-niveau">⭐ Niveau {niveau}</div>
                    </div>
                    <button
                    className={'profil__bouton-theme ${peutUtiliserThemeSombre ? "profil__bouton-theme--actif" : "profil__bouton-theme--bloque"}'}
                    onClick={basculerTheme}
                    title={peutUtiliserThemeSombre ? "Basculer le thème" : "Débloqué au niveau 2"}>
                        {themeSombre ? "☀️" : "🌙"}
                        {!peutUtiliserThemeSombre && <span>Niv.2</span>}
                    </button>
                </div>
                <BarreXp xp={xp} xpNecessaire={xpNecessaire} niveau={niveau}/> 
            </div>

            <div className="profil__onglets">
                <button className={'profil__onglet ${onglet === "badges" ? "profil__onglet--actif" : ""}'} onClick={() => setOnglet("badges")}>
                    🏅 Badges ({badges.filter((b) => estDebloque(b.id)).length}/{badges.length})
                </button>
                <button className={'profil__onglet ${onglet === "avatars" ? "profil__onglet--actif" : ""}'} onClick ={() => setOnglet("avatars")}>
                    🖼️ Avatars ({avatars.filter((a) => estDebloque(a.id)).length}/{avatars.length})
                </button>
            </div>

            <div className="profil__grille-wrapper">
                <div className="profil__grille">
                    {(onglet === "badges" ? badges : avatars).map((recompense) => (
                        <CarteRecompense
                        key={recompense.id}
                        recompense={recompense}
                        debloquee={estDebloque(recompense.id)}
                        actif={recompense.type === "avatar" && avatarActif === recompense.emoji}
                        onClick={recompense.type === "avatar" ? () => changerAvatar(recompense.id) : null}
                        />
                    ))}
                </div>
            </div>


            <div className="profil__test">
                <p>🧪 Zone de test — à supprimer avant le rendu</p>
                <button onClick={gererBonneReponse}>+100xp (simuler une bonne reponse)</button>
            </div>


        </div>
      </div>
        </>
    );
}