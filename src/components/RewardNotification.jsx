import { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";

export default function RewardNotification() {
    const { nouvelleRecompense } = useGame();
    const [recompense, setRecompense] = useState(null);

    // Dérivation de l'état (recommandé par React au lieu d'un useEffect)
    if (nouvelleRecompense && nouvelleRecompense.id !== recompense?.id) {
        setRecompense(nouvelleRecompense);
    }

    if(!recompense) return null;

    return (
        <div style= {{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 9999,
            transform: nouvelleRecompense ? "translateY(0) scale(1)" : "translateY(120%) scale(0.8)",
            opacity: nouvelleRecompense ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}>
            <div style = {{
                background: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
                border: "1px solid rgba(255, 215, 0, 0.4)",
                borderRadius: "16px",
                padding: "1.2rem 1.8rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 215, 0, 0.15)",
                minWidth: "280px",
                position: "relative",
                overflow: "hidden",
            }}>
                <div style = {{ 
                    fontSize: "2.5rem",
                    animation: "pulse 1s ease-in-out infinite",
                    flexShrink: 0,
                }}>
                    {recompense.emoji}
                </div>
                <div>
                    <div style = {{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#FFD700", marginBottom: "0.2rem", fontWeight: 700}}>
                        🎉 Récompense débloquée !
                    </div>
                    <div style = {{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "0.2rem"}}>
                        {recompense.nom}
                    </div>
                    <div style = {{fontSize: "0.8rem", color: "rgba(255,255,255,0.6)"}}>
                        {recompense.description}
                    </div>
                </div>
                { /* barre qui se vide */ }
                <div style = {{
                    position: "absolute", bottom: 0, left: 0, height:"3px",
                    background: "linear-gradient(90deg, #FFD700, #FF8C00)",
                    borderRadius: "0  0 16px 16px",
                    animation: "shrink 4s linear forwards",
                    width: "100%",
                }} />
            </div>

            <style>{`
            @keyframes pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.2); } }
            @keyframes shrink { from { width: 100%; } to { width: 0%; } }
            `}
            </style>
        </div>
    )
}