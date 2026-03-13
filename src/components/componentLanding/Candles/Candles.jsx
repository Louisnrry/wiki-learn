// Bougies : flammes et cire
import React from 'react';
import './Candles.css';

export default function Candles({ candles }) {
    return (
        <div id="candles">
            {candles.map((c, i) => (
                <div key={i} className="candle-float" style={{ left: c.left, top: c.top, '--cf': c.dur, '--cd': c.dd, '--dm': c.drift }}>
                    <div className="candle-glow"></div>
                    <div className="candle-flame"></div>
                    <div className="candle-wick"></div>
                    <div className="candle-body" style={{ height: `${c.bodyHeight}px` }}>
                        <div className="wax-trail" style={{ '--wh': `${c.waxTrailHeight}px` }}></div>
                    </div>
                    <div className="candle-drip"></div>
                </div>
            ))}
        </div>
    );
}
