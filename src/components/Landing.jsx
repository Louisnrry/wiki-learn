// Importation de React et des hooks nécessaires
import React, { useMemo } from 'react';
// Importation du fichier CSS pour les styles de cette page
import './landing.css';

// Importation des sous-composants séparés
import OwlSvg from './OwlSvg';
import Shelves from './Shelves';
import Window from './Window';
import Chandelier from './Chandeliers';
import Fireplace from './Fireplace';
import BookStacks from './BookStacks';
import Candles from './Candles';
import Sparkles from './Sparkles';
import Snitch from './Snitch';

// Composant principal de la page d'accueil
export default function Landing() {

    // Tableau des couleurs utilisées pour les livres sur les étagères
    const bookColors = [
        '#6b1c1c', '#1c3a6b', '#1c6b2a', '#6b5a1c', '#4a1c6b',
        '#6b3a1c', '#1c5a6b', '#6b1c4a', '#2a5c1c', '#1c1c6b',
        '#8a3010', '#104a8a', '#10602a', '#706010', '#501070',
        '#8a4a10', '#106060', '#8a1050', '#204a10', '#101870'
    ];

    // Tableau des hauteurs (en px) des livres pour varier leur taille
    const bookHeights = [50, 58, 44, 62, 48, 55, 40, 66, 52, 46, 60, 42, 56, 38, 64, 50, 44, 58, 46, 54];

    // Fonction utilitaire : crée un tableau de `n` éléments vides (pour les boucles)
    const range = (n) => Array.from({ length: n });

    // Génération de l'étagère gauche (calculé une seule fois)
    const leftShelf = useMemo(() => range(7).map((_, row) => {
        const books = range(7).map((__, b) => {
            const w = 12 + Math.floor(Math.random() * 6);
            const h = bookHeights[(row * 7 + b) % bookHeights.length];
            const c = bookColors[(row * 7 + b) % bookColors.length];
            return { w, h, c };
        });
        return { row, books, top: 12.5 * row + 10, browTop: 12.5 * row + 3 };
    }), []);

    // Génération de l'étagère droite (décalage de couleur/hauteur différent)
    const rightShelf = useMemo(() => range(7).map((_, row) => {
        const books = range(7).map((__, b) => {
            const w = 12 + Math.floor(Math.random() * 6);
            const h = bookHeights[(row * 7 + b + 3) % bookHeights.length];
            const c = bookColors[(row * 7 + b + 5) % bookColors.length];
            return { w, h, c };
        });
        return { row, books, top: 12.5 * row + 10, browTop: 12.5 * row + 3 };
    }), []);

    // Génération de 60 étoiles avec tailles, positions et animations aléatoires
    const stars = useMemo(() => range(60).map(() => {
        const sz = Math.random() * 2.2 + 0.4;
        return {
            size: sz,
            top: Math.random() * 65,
            left: Math.random() * 100,
            duration: (Math.random() * 2 + 1.2).toFixed(2),
            delay: (Math.random() * 3).toFixed(2)
        };
    }), []);

    // Génération de 6 arbres visibles à travers la fenêtre
    const trees = useMemo(() => range(6).map((_, t) => {
        const tw = 25 + Math.random() * 20;
        const th = 60 + Math.random() * 50;
        return { left: 5 + t * 16, w: tw, h: th };
    }), []);

    // Génération de la pile de livres à gauche (4 livres)
    const leftStack = useMemo(() => range(4).map(() => ({
        w: 50 + Math.floor(Math.random() * 25),
        h: 18 + Math.floor(Math.random() * 14),
        c: bookColors[Math.floor(Math.random() * bookColors.length)],
        angle: (Math.random() * 12 - 6).toFixed(1)
    })), []);

    // Génération de la pile de livres au centre (3 livres)
    const midStack = useMemo(() => range(3).map(() => ({
        w: 50 + Math.floor(Math.random() * 25),
        h: 18 + Math.floor(Math.random() * 14),
        c: bookColors[Math.floor(Math.random() * bookColors.length)],
        angle: (Math.random() * 12 - 6).toFixed(1)
    })), []);

    // Positions fixes des bougies flottantes
    const candlePos = [
        { left: '30%', top: '15%', dur: '4.2s', drift: '6px', dd: '8s' },
        { left: '42%', top: '10%', dur: '5.5s', drift: '-8px', dd: '11s' },
        { left: '58%', top: '13%', dur: '3.8s', drift: '10px', dd: '9s' },
        { left: '68%', top: '8%', dur: '6s', drift: '-6px', dd: '12s' },
        { left: '22%', top: '20%', dur: '4.8s', drift: '4px', dd: '10s' },
        { left: '76%', top: '18%', dur: '5.2s', drift: '-5px', dd: '8.5s' },
    ];
    const candles = useMemo(() => candlePos.map(cp => ({
        ...cp,
        bodyHeight: 22 + Math.floor(Math.random() * 18),
        waxTrailHeight: 8 + Math.floor(Math.random() * 6)
    })), []);

    // Couleurs possibles pour les éclats de lumière magiques
    const sparkColors = ['#ffd700', '#c9a84c', '#8ecae6', '#a8dadc', '#ffd700', '#ffe066'];

    // Génération de 18 éclats de lumière (sparkles)
    const sparkles = useMemo(() => range(18).map((_, i) => ({
        c: sparkColors[i % sparkColors.length],
        s: (8 + Math.random() * 12).toFixed(0) + 'px',
        left: 10 + Math.random() * 80,
        top: 10 + Math.random() * 70,
        d: (3 + Math.random() * 5).toFixed(1) + 's',
        del: (Math.random() * 8).toFixed(1) + 's',
        x: (Math.random() * 40 - 20).toFixed(0) + 'px',
        y: (Math.random() * 40 - 20).toFixed(0) + 'px'
    })), []);

    // Génération de 35 particules de poussière dorée/bleue
    const dusts = useMemo(() => range(35).map(() => {
        const sz = (1.5 + Math.random() * 3).toFixed(1);
        const isGold = Math.random() > 0.5;
        const op = (0.15 + Math.random() * 0.4).toFixed(2);
        const color = isGold ? `rgba(212,168,48,${op})` : `rgba(180,200,220,${op})`;
        return {
            sz, col: color, op,
            left: 15 + Math.random() * 65,
            bottom: Math.random() * 40,
            df: (5 + Math.random() * 8).toFixed(1) + 's',
            dd: (Math.random() * 10).toFixed(1) + 's',
            dx: (Math.random() * 50 - 25).toFixed(0) + 'px',
            blur: Math.ceil(sz * 2)
        };
    }), []);

    // ─────────────────────────────────────────────
    // RENDU JSX — Structure visuelle de la scène
    // ─────────────────────────────────────────────
    return (
        <div className="scene">

            {/* Arrière-plan de la pièce */}
            <div className="room-bg"></div>
            {/* Plafond */}
            <div className="ceiling"></div>
            {/* Sol */}
            <div className="floor"></div>
            {/* Tapis */}
            <div className="rug"></div>
            {/* Lueur de la cheminée */}
            <div className="fire-room-glow"></div>

            {/* Titre principal */}
            <div className="title-crest">
                <span className="crest-text">Wiki-Learn</span>
                <span className="crest-sub">Bibliothèque du Savoir</span>
            </div>

            {/* ── ÉTAGÈRES ── */}
            <Shelves leftShelf={leftShelf} rightShelf={rightShelf} />

            {/* ── FENÊTRE ── */}
            <Window stars={stars} trees={trees} />

            {/* ── LUSTRE ── */}
            <Chandelier />

            {/* ── CHEMINÉE ── */}
            <Fireplace />

            {/* ── PILES DE LIVRES AU SOL ── */}
            <BookStacks leftStack={leftStack} midStack={midStack} />

            {/* ── TABLE DE CÔTÉ avec livre ouvert et loupe ── */}
            <div className="side-table">
                <div className="open-book"></div>
                <div className="magnifier"></div>
            </div>

            {/* ── CHOUETTE SVG ── */}
            <OwlSvg />

            {/* ── BOUGIES FLOTTANTES ── */}
            <Candles candles={candles} />

            {/* ── VIF D'OR ── */}
            <Snitch />

            {/* ── ÉCLATS DE LUMIÈRE ET POUSSIÈRE ── */}
            <Sparkles sparkles={sparkles} dusts={dusts} />

            {/* ── RUNES décoratives ── */}
            <span className="rune" style={{ left: '2%', top: '25%', '--rd': '0s' }}>ᚠ</span>
            <span className="rune" style={{ left: '4%', top: '42%', '--rd': '.5s' }}>ᚢ</span>
            <span className="rune" style={{ left: '7%', top: '60%', '--rd': '1s' }}>ᚦ</span>
            <span className="rune" style={{ right: '2%', top: '30%', '--rd': '.3s' }}>ᚨ</span>
            <span className="rune" style={{ right: '5%', top: '50%', '--rd': '.8s' }}>ᚱ</span>
            <span className="rune" style={{ right: '3%', top: '68%', '--rd': '1.5s' }}>ᚲ</span>

            {/* Vignette sombre sur les bords */}
            <div className="vignette"></div>
        </div>
    );
}
