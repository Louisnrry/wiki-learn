// Classement joueurs
import React, { useState } from 'react';

function Classement() {
  const [niveau, setNiveau] = useState(2);
  const [xp, setXp] = useState(200);

  const fauxJoueurs = [
    { pseudo: "Marie_Curie", niveau: 2, xp: 150 },
    { pseudo: "Albert_E", niveau: 5, xp: 800 },
    { pseudo: "Ada_Lovelace", niveau: 2, xp: 900 }
  ];

  const monJoueur = { pseudo: "Toi", niveau: niveau, xp: xp };
  const tousLesJoueurs = [...fauxJoueurs, monJoueur];

  const classementTrie = tousLesJoueurs.sort((joueurA, joueurB) => {
    if (joueurB.niveau !== joueurA.niveau) {
      return joueurB.niveau - joueurA.niveau;
    }
    return joueurB.xp - joueurA.xp;
  });

  return (
    <div className="classement">
      <h2 className="classement__titre">Classement Wikipedia Learn</h2>
      <ol className="classement__liste">
        {classementTrie.map((joueur, index) => (
          <li key={index} className="classement__joueur">
            <strong>{joueur.pseudo}</strong> - Niveau {joueur.niveau} ({joueur.xp} XP)
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Classement;