// On importe l'outil "useState" de React pour fabriquer notre tirelire
import { useState } from 'react';

export default function SystemeXP() {
  // --- 1. LE CERVEAU (Ton code) ---

  // La tirelire (Les States)
  const [xp, setXp] = useState(0);       
  const [niveau, setNiveau] = useState(0); 
  
  // Le calcul magique
  const xpNecessaire = 1000 + (niveau * 100);

  // La fonction pour gagner de l'XP
  const gererBonneReponse = () => {
    if (niveau >= 100) return; 

    const nouvelXp = xp + 100; 

    if (nouvelXp >= xpNecessaire) {
      setNiveau(niveau + 1); 
      setXp(nouvelXp - xpNecessaire); 
    } else {
      setXp(nouvelXp); 
    }
  };

  // --- 2. LE VISAGE (Ce que le joueur voit) ---
  return (
    // On utilise la convention BEM pour le CSS : systeme-xp (le bloc), systeme-xp__titre (l'élément)
    <div className="systeme-xp">
      <h2 className="systeme-xp__titre">Ton Profil d'Apprenti</h2>
      
      {/* On affiche le contenu de ta tirelire ici ! */}
      <p className="systeme-xp__stats">Niveau actuel : {niveau}</p>
      <p className="systeme-xp__stats">XP : {xp} / {xpNecessaire}</p>
      
      {/* Voici le bouton ! 
        Quand on clique dessus (onClick), il appelle TA fonction "gererBonneReponse" 
      */}
      <button className="systeme-xp__bouton" onClick={gererBonneReponse}>
        Simuler une bonne réponse (+100 XP) 🏆
      </button>
    </div>
  );
}