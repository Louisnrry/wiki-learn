// Vif d'Or animé qui vole à travers la pièce
import React from 'react';

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
