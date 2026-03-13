import React from 'react';

// Composant : Le Vif d'Or (Snitch) — petite balle ailée qui vole dans la pièce
export default function Snitch() {
    return (
        <div className="snitch">
            <div style={{ position: 'relative', width: '14px', height: '14px' }}>
                <div className="snitch-wing left"></div>   {/* Aile gauche */}
                <div className="snitch-ball"></div>         {/* Balle dorée centrale */}
                <div className="snitch-wing right"></div>  {/* Aile droite */}
            </div>
        </div>
    );
}
