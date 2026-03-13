import React, { useState } from 'react';

// C'est ici qu'on crée notre brique LEGO. On lui donne le même nom que le fichier.
function Classement() {
  
  // 1. LA MÉMOIRE (Le State)
  // On donne à ton joueur un niveau 2 et 200 xp pour commencer.
  // "setNiveau" et "setXp" sont des boutons magiques qu'on utilisera plus tard pour modifier ces valeurs.
  const [niveau, setNiveau] = useState(2);
  const [xp, setXp] = useState(200);

  // 2. TON CODE (La logique)
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

  // 3. CE QU'ON AFFICHE À L'ÉCRAN
  // On mettra le code visuel à la prochaine étape !
  return (
    <div>
      Hello, le classement arrive !
    </div>
  );
}

// On exporte la brique pour pouvoir l'utiliser ailleurs dans le château
export default Classement;
// 3. CE QU'ON AFFICHE À L'ÉCRAN
  return (
    // Remarque : j'utilise la convention de nommage BEM (classement, classement__titre, classement__liste) 
    // pour que ton code soit bien structuré pour ton évaluation !
    <div className="classement">
      <h2 className="classement__titre">Classement Wikipedia Learn</h2>
      
      <ol className="classement__liste">
        {/* On boucle sur ton tableau de joueurs avec .map() */}
        {classementTrie.map((joueur, index) => (
          <li key={index} className="classement__joueur">
            {/* On affiche en gras si c'est "Toi" */}
            <strong>{joueur.pseudo}</strong> - Niveau {joueur.niveau} ({joueur.xp} XP)
          </li>
        ))}
      </ol>
    </div>
  );