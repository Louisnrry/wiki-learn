import { createContext, useContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RECOMPENSES = [
    { niveau: 1,  type: "badge",  id: "badge_debutant",        nom: "Débutant",          emoji: "🌱", description: "Bienvenue dans l'aventure !" },
    { niveau: 2,  type: "theme",  id: "theme_sombre",          nom: "Thème Sombre",      emoji: "🌙", description: "Le mode nuit est débloqué !" },
    { niveau: 2,  type: "avatar", id: "avatar_2",              nom: "Avatar Explorateur",emoji: "🧑‍💻", description: "Un nouvel avatar débloqué !" },
    { niveau: 3,  type: "badge",  id: "badge_curieux",         nom: "Curieux",           emoji: "🔍", description: "Tu poses les bonnes questions." },
    { niveau: 4,  type: "avatar", id: "avatar_4",              nom: "Avatar Savant",     emoji: "🧪", description: "Un nouvel avatar débloqué !" },
    { niveau: 5,  type: "badge",  id: "badge_explorateur",     nom: "Explorateur",       emoji: "🧭", description: "Tu explores tous les horizons." },
    { niveau: 6,  type: "avatar", id: "avatar_6",              nom: "Avatar Maître",     emoji: "🎓", description: "Un nouvel avatar débloqué !" },
    { niveau: 7,  type: "badge",  id: "badge_savant",          nom: "Savant",            emoji: "📚", description: "La connaissance est ton pouvoir." },
    { niveau: 8,  type: "avatar", id: "avatar_8",              nom: "Avatar Légende",    emoji: "⚡", description: "Un nouvel avatar débloqué !" },
    { niveau: 9,  type: "badge",  id: "badge_expert",          nom: "Expert",            emoji: "🔬", description: "Presque au sommet !" },
    { niveau: 10, type: "badge",  id: "badge_encyclopediste",  nom: "Encyclopédiste",    emoji: "🏆", description: "Le titre suprême. Légendaire." },
    { niveau: 10, type: "avatar", id: "avatar_10",             nom: "Avatar Mythique",   emoji: "👑", description: "L'avatar ultime est à toi !" },
];  

const GameContext = createContext();

export function GameProvider({ children }) {
    
    
    const chargerDepuisStorage = () => {
        try {
            const sauvegarde = localStorage.getItem("wiki_learn_save");
            if (sauvegarde) return JSON.parse(sauvegarde);
        } catch (_e) {
            // Ignorer l'erreur de parsing/storage
        }
        return null;
    };

    const sauvegarde = chargerDepuisStorage();

    const [xp, setXp] = useState(sauvegarde?.xp ?? 0);
    const [niveau, setNiveau] = useState(sauvegarde?.niveau ?? 0);
    const [themeSombre, setThemeSombre] = useState(sauvegarde?.themeSombre ?? false);
    const [avatarActif, setAvatarActif] = useState(sauvegarde?.avatarActif ?? "🧑");
    const [recompensesDebloquees, setRecompensesDebloquees] = useState(sauvegarde?.recompensesDebloquees ?? []);
    const [nouvelleRecompense, setNouvelleRecompense]       = useState(null);


    const xpNecessaire = 1000 + (niveau * 100); 

    useEffect(() => {
        localStorage.setItem(
          "wikipedia_learn_save",
          JSON.stringify({ xp, niveau, themeSombre, avatarActif, recompensesDebloquees })
        );
    }, [xp, niveau, themeSombre, avatarActif, recompensesDebloquees]);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", themeSombre ? "darkk" : "light");
    }, [themeSombre]);

    const verifierRecompenses = (nouveauNiveau) => {
        const aDebloquer = RECOMPENSES.filter(
            (r) => r.niveau <= nouveauNiveau && !recompensesDebloquees.includes(r.id)
        );
        if (aDebloquer.length > 0) {
            setRecompensesDebloquees((prev) => [...prev, ...aDebloquer.map((r) => r.id)]);
            setNouvelleRecompense(aDebloquer[aDebloquer.length - 1]);
            setTimeout (() => setNouvelleRecompense(null), 4000);
        }
    };


// fonction quand bonne reponse(s) pour gagner de l'exp
    const gererBonneReponse = (nbBonnesReponses = 1) => {
        if (niveau >= 100 || nbBonnesReponses <= 0) return;
        
        let currentXp = xp + (100 * nbBonnesReponses);
        let currentNiveau = niveau;
        let currentXpNecessaire = 1000 + (currentNiveau * 100);

        // Gérer les montées de niveau multiples potentielles
        while (currentXp >= currentXpNecessaire && currentNiveau < 100) {
            currentXp -= currentXpNecessaire;
            currentNiveau++;
            currentXpNecessaire = 1000 + (currentNiveau * 100);
        }

        if (currentNiveau > niveau) {
            setNiveau(currentNiveau);
            verifierRecompenses(currentNiveau);
        }
        setXp(currentXp);
    };


    const estDebloque = (id) =>recompensesDebloquees.includes(id);
    const peutUtiliserThemeSombre = estDebloque ("theme_sombre");
    const basculerTheme = () => { if (peutUtiliserThemeSombre) setThemeSombre((prev) => -prev); }; 
    const changerAvatar = (avatarId) => {
        const r = RECOMPENSES.find((r) => r.id === avatarId);
        if (r && estDebloque("theme_sombre")) setAvatarActif(r.emoji);
    };

    return (
        <GameContext.Provider value ={{
            xp, niveau, xpNecessaire,
            themeSombre, avatarActif,
            recompensesDebloquees, nouvelleRecompense,
            gererBonneReponse, basculerTheme, changerAvatar,
            estDebloque, peutUtiliserThemeSombre,
        }}>
            {children}
        </GameContext.Provider>
    );

}


// hook 

// eslint-disable-next-line react-refresh/only-export-components
export function useGame() {
    const context = useContext(GameContext);
    if(!context) throw new Error ("useGame doit être utilisé dans un <GameProider>");
    return context;
}