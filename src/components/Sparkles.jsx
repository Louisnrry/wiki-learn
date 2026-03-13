// Éclats de lumière magiques et particules de poussière flottantes
import React from 'react';

export default function Sparkles({ sparkles, dusts }) {
    return (
        <>
            <div id="sparkles">
                {sparkles.map((sp, i) => (
                    <div key={i} className="sparkle" style={{
                        left: `${sp.left}%`, top: `${sp.top}%`,
                        '--sp-d': sp.d, '--sp-del': sp.del, '--sp-c': sp.c, '--sp-s': sp.s,
                        '--sp-x': sp.x, '--sp-y': sp.y
                    }}></div>
                ))}
            </div>

            <div id="dustParticles">
                {dusts.map((d, i) => (
                    <div key={i} className="dust" style={{
                        width: `${d.sz}px`, height: `${d.sz}px`, background: d.col,
                        left: `${d.left}%`, bottom: `${d.bottom}%`,
                        '--df': d.df, '--dd': d.dd, '--dop': d.op, '--dx': d.dx,
                        boxShadow: `0 0 ${d.blur}px ${d.col}`
                    }}></div>
                ))}
            </div>
        </>
    );
}
