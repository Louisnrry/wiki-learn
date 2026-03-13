// Étagères gauche et droite remplies de livres colorés
import React from 'react';
import './Shelves.css';

export default function Shelves({ leftShelf, rightShelf }) {
    return (
        <>
            <div className="shelf shelf-left" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                {leftShelf.map(row => (
                    <React.Fragment key={`l-${row.row}`}>
                        <div className="shelf-plank" style={{ top: `${row.top}%` }}></div>
                        <div className="shelf-books" style={{ position: 'absolute', top: `${row.browTop}%`, left: '4px', right: '4px', height: '12%', alignItems: 'flex-end' }}>
                            {row.books.map((bk, idx) => (
                                <div key={idx} className="sb" style={{ width: `${bk.w}px`, height: `${bk.h}px`, background: bk.c }}></div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>

            <div className="shelf shelf-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                {rightShelf.map(row => (
                    <React.Fragment key={`r-${row.row}`}>
                        <div className="shelf-plank" style={{ top: `${row.top}%` }}></div>
                        <div className="shelf-books" style={{ position: 'absolute', top: `${row.browTop}%`, left: '4px', right: '4px', height: '12%', alignItems: 'flex-end' }}>
                            {row.books.map((bk, idx) => (
                                <div key={idx} className="sb" style={{ width: `${bk.w}px`, height: `${bk.h}px`, background: bk.c }}></div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}
