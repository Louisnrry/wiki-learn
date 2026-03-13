import React from 'react';

// Composant : Les piles de livres empilés au sol
export default function BookStacks({ leftStack, midStack }) {
    return (
        <>
            {/* Pile de livres à gauche */}
            <div className="book-stack" style={{ left: '17%', bottom: 0, zIndex: 5 }}>
                {leftStack.map((b, i) => (
                    <div key={i} className="stacked-book" style={{ width: `${b.w}px`, height: `${b.h}px`, background: b.c, transform: `rotate(${b.angle}deg)` }}></div>
                ))}
            </div>
            {/* Pile de livres au centre */}
            <div className="book-stack" style={{ left: '46%', bottom: 0, zIndex: 5 }}>
                {midStack.map((b, i) => (
                    <div key={i} className="stacked-book" style={{ width: `${b.w}px`, height: `${b.h}px`, background: b.c, transform: `rotate(${b.angle}deg)` }}></div>
                ))}
            </div>
        </>
    );
}
