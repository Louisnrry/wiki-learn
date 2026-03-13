import React from 'react';

// Composant : Les bougies flottantes dans la pièce
export default function Candles({ candles }) {
    return (
        <div id="candles">
            {candles.map((c, i) => (
                <div key={i} className="candle-float" style={{ left: c.left, top: c.top, '--cf': c.dur, '--cd': c.dd, '--dm': c.drift }}>
                    <div className="candle-glow"></div>   {/* Halo lumineux */}
                    <div className="candle-flame"></div>  {/* Flamme animée */}
                    <div className="candle-wick"></div>   {/* Mèche */}
                    <div className="candle-body" style={{ height: `${c.bodyHeight}px` }}>
                        {/* Coulure de cire */}
                        <div className="wax-trail" style={{ '--wh': `${c.waxTrailHeight}px` }}></div>
                    </div>
                    <div className="candle-drip"></div>  {/* Goutte de cire */}
                </div>
            ))}
        </div>
    );
}
