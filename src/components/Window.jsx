import React from 'react';

// Composant : La fenêtre avec la vue nocturne (ciel, lune, étoiles, arbres)
export default function Window({ stars, trees }) {
    return (
        <div className="window-area">
            {/* Encadrement en pierre */}
            <div className="window-stone"></div>
            <div className="window-glass">
                {/* Ciel nocturne */}
                <div className="sky-bg"></div>
                {/* La lune */}
                <div className="moon"></div>
                {/* Étoile filante */}
                <div className="shoot"></div>
                {/* Croisillons de fenêtre */}
                <div className="win-bar-h"></div>
                <div className="win-bar-v"></div>

                {/* Étoiles scintillantes */}
                {stars.map((s, i) => (
                    <div key={`star-${i}`} style={{
                        position: 'absolute', borderRadius: '50%', background: 'white',
                        width: `${s.size}px`, height: `${s.size}px`,
                        top: `${s.top}%`, left: `${s.left}%`,
                        animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite alternate`,
                        opacity: 0.8
                    }}></div>
                ))}

                {/* Silhouettes d'arbres (sapins triangulaires) */}
                {trees.map((t, i) => (
                    <div key={`tree-${i}`} className="tree" style={{
                        left: `${t.left}%`, width: `${t.w}px`, height: `${t.h}px`,
                        background: 'linear-gradient(180deg, #060d06 0%, #040a04 100%)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}></div>
                ))}
            </div>
            {/* Lueur bleutée de la fenêtre sur la pièce */}
            <div className="window-glow"></div>
        </div>
    );
}
