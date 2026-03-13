// functionRanking.jsx — mis à jour pour utiliser le GameContext
// Les states xp/niveau viennent maintenant de GameContext.jsx

import { useGame } from "../context/GameContext";

export default function Classement() {
  // On récupère xp et niveau depuis le contexte (plus de useState local)
  const { xp, niveau, estDebloque } = useGame();

  // Les faux joueurs (inchangés)
  const fauxJoueurs = [
    { pseudo: "Marie_Curie",  niveau: 2, xp: 150 },
    { pseudo: "Albert_E",     niveau: 5, xp: 800 },
    { pseudo: "Ada_Lovelace", niveau: 2, xp: 900 },
  ];

  const monJoueur = { pseudo: "Toi", niveau: niveau, xp: xp };
  const tousLesJoueurs = [...fauxJoueurs, monJoueur];

  const classementTrie = [...tousLesJoueurs].sort((joueurA, joueurB) => {
    if (joueurB.niveau !== joueurA.niveau) return joueurB.niveau - joueurA.niveau;
    return joueurB.xp - joueurA.xp;
  });

  return (
    <div className="classement">
      <h2 className="classement__titre">Classement Wikipedia Learn</h2>
      <ol className="classement__liste">
        {classementTrie.map((joueur, index) => (
          <li key={index} className="classement__joueur">
            {/* On affiche le badge "Encyclopédiste" si "Toi" l'a débloqué */}
            <strong>{joueur.pseudo}</strong>
            {joueur.pseudo === "Toi" && estDebloque("badge_encyclopediste") && " 🏆"}
            {" "}- Niveau {joueur.niveau} ({joueur.xp} XP)
          </li>
        ))}
      </ol>
    </div>
  );
}