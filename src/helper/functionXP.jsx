export default function SystemeXP() {
  // 1. LA TIRELIRE (Les States)
const [xp, setXp] = useState(0);       
const [niveau, setNiveau] = useState(0); 
  const xpNecessaire = 1000 + (niveau * 100);

  // 2. LA FONCTION POUR GAGNER DE L'XP
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
}