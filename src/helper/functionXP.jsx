// Système XP et levels
import { useState } from 'react';

export default function SystemeXP() {
  const [xp, setXp] = useState(0);
  const [niveau, setNiveau] = useState(0);

  const xpNecessaire = 1000 + (niveau * 100);

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

  return (
    <div className="systeme-xp">
      <h2 className="systeme-xp__titre">Ton Profil d'Apprenti</h2>
      <p className="systeme-xp__stats">Niveau actuel : {niveau}</p>
      <p className="systeme-xp__stats">XP : {xp} / {xpNecessaire}</p>
      <button className="systeme-xp__bouton" onClick={gererBonneReponse}>
        Simuler une bonne réponse (+100 XP) 🏆
      </button>
    </div>
  );
}