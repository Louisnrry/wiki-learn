// Vif d'Or qui vole
import React from 'react';
import './Snitch.css';

export default function Snitch() {
    return (
        <div className="snitch">
            <div style={{ position: 'relative', width: '14px', height: '14px' }}>
                <div className="snitch-wing left"></div>
                <div className="snitch-ball"></div>
                <div className="snitch-wing right"></div>
            </div>
        </div>
    );
}
