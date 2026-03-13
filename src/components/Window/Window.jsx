// Fenêtre avec vue nocturne : ciel étoilé, lune et silhouettes d'arbres
import React from 'react';
import './Window.css';

export default function Window({ stars, trees }) {
    return (
        <div className="window-area">
            <div className="window-stone"></div>
            <div className="window-glass">
                <div className="sky-bg"></div>
                <div className="moon"></div>
                <div className="shoot"></div>
                <div className="win-bar-h"></div>
                <div className="win-bar-v"></div>

                {stars.map((s, i) => (
                    <div key={`star-${i}`} style={{
                        position: 'absolute', borderRadius: '50%', background: 'white',
                        width: `${s.size}px`, height: `${s.size}px`,
                        top: `${s.top}%`, left: `${s.left}%`,
                        animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite alternate`,
                        opacity: 0.8
                    }}></div>
                ))}

                {trees.map((t, i) => (
                    <div key={`tree-${i}`} className="tree" style={{
                        left: `${t.left}%`, width: `${t.w}px`, height: `${t.h}px`,
                        background: 'linear-gradient(180deg, #060d06 0%, #040a04 100%)',
                        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                    }}></div>
                ))}
            </div>
            <div className="window-glow"></div>
        </div>
    );
}
