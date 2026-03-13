// Piles de livres empilés au sol
import React from 'react';

export default function BookStacks({ leftStack, midStack }) {
    return (
        <>
            <div className="book-stack" style={{ left: '17%', bottom: 0, zIndex: 5 }}>
                {leftStack.map((b, i) => (
                    <div key={i} className="stacked-book" style={{ width: `${b.w}px`, height: `${b.h}px`, background: b.c, transform: `rotate(${b.angle}deg)` }}></div>
                ))}
            </div>
            <div className="book-stack" style={{ left: '46%', bottom: 0, zIndex: 5 }}>
                {midStack.map((b, i) => (
                    <div key={i} className="stacked-book" style={{ width: `${b.w}px`, height: `${b.h}px`, background: b.c, transform: `rotate(${b.angle}deg)` }}></div>
                ))}
            </div>
        </>
    );
}
