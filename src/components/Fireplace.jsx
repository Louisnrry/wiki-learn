import React from 'react';

// Composant : La cheminée avec ses flammes, étincelles et globe décoratif
export default function Fireplace() {
    return (
        <div className="fireplace-area">
            <div className="mantle-surround">
                <div className="mantle-top"></div>
                <div className="mantle-shelf"></div>
                <div className="fire-arch">
                    {/* 5 flammes animées */}
                    <div className="flames">
                        <div className="flame f1"></div>
                        <div className="flame f2"></div>
                        <div className="flame f3"></div>
                        <div className="flame f4"></div>
                        <div className="flame f5"></div>
                    </div>
                    {/* Étincelles qui s'élèvent du feu */}
                    <div className="spark" style={{ left: '30%', '--sx': '-8px', '--sd': '.9s', '--delay': '.1s' }}></div>
                    <div className="spark" style={{ left: '50%', '--sx': '5px', '--sd': '1.2s', '--delay': '.5s' }}></div>
                    <div className="spark" style={{ left: '70%', '--sx': '-6px', '--sd': '1s', '--delay': '.8s', background: '#fff' }}></div>
                    <div className="spark" style={{ left: '45%', '--sx': '10px', '--sd': '.8s', '--delay': '1.2s' }}></div>
                    <div className="spark" style={{ left: '60%', '--sx': '-4px', '--sd': '1.3s', '--delay': '.3s' }}></div>
                </div>
            </div>
            {/* Globe décoratif sur la cheminée */}
            <div className="globe-wrap">
                <div className="globe-ring gr1"></div>
                <div className="globe-ring gr2"></div>
                <div className="globe-ring gr3"></div>
                <div className="globe-center"></div>
            </div>
        </div>
    );
}
