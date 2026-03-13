import React from 'react';

// Positions (en px) des bras du lustre sur l'axe horizontal
const chandPositions = [8, 38, 88, 138, 170];

// Composant : Le lustre accroché au plafond
export default function Chandelier() {
    return (
        <div className="chandelier" id="chandelier">
            {/* Tige verticale reliant le lustre au plafond */}
            <div className="c-rod"></div>
            {/* Corps principal du lustre */}
            <div className="c-body" id="chandBody">
                {chandPositions.map((p, i) => (
                    <React.Fragment key={i}>
                        {/* Bras du lustre */}
                        <div className="c-arm" style={{ left: `${p}px`, width: '3px', height: `${22 + Math.abs(p - 88) / 8}px` }}></div>
                        {/* Douille (support de l'ampoule) */}
                        <div className="c-socket" style={{ left: `${p - 3}px` }}></div>
                        {/* Ampoule avec animation de clignotement */}
                        <div className="c-bulb" style={{ left: `${p - 3}px`, '--bf': `${(1.5 + i * 0.4).toFixed(1)}s`, animationDelay: `${(i * 0.3).toFixed(1)}s` }}></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
