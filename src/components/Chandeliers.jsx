// Lustre suspendu au plafond avec 5 ampoules clignotantes
import React from 'react';

const chandPositions = [8, 38, 88, 138, 170];

export default function Chandelier() {
    return (
        <div className="chandelier" id="chandelier">
            <div className="c-rod"></div>
            <div className="c-body" id="chandBody">
                {chandPositions.map((p, i) => (
                    <React.Fragment key={i}>
                        <div className="c-arm" style={{ left: `${p}px`, width: '3px', height: `${22 + Math.abs(p - 88) / 8}px` }}></div>
                        <div className="c-socket" style={{ left: `${p - 3}px` }}></div>
                        <div className="c-bulb" style={{ left: `${p - 3}px`, '--bf': `${(1.5 + i * 0.4).toFixed(1)}s`, animationDelay: `${(i * 0.3).toFixed(1)}s` }}></div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
