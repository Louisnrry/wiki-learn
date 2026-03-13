// Chouette SVG assise dans un fauteuil avec un livre et une pipe
import React from 'react';

export default function OwlSvg() {
    return (
        <div className="owl-wrap">
            <svg width="300" height="310" viewBox="0 0 300 310" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="chairG" cx="40%" cy="30%">
                        <stop offset="0%" stopColor="#9a4520" />
                        <stop offset="50%" stopColor="#6a2e10" />
                        <stop offset="100%" stopColor="#3a1808" />
                    </radialGradient>
                    <radialGradient id="bodyG" cx="40%" cy="35%">
                        <stop offset="0%" stopColor="#b8ccd8" />
                        <stop offset="60%" stopColor="#7090a8" />
                        <stop offset="100%" stopColor="#4a6878" />
                    </radialGradient>
                    <radialGradient id="bellyG" cx="50%" cy="40%">
                        <stop offset="0%" stopColor="#e8e0d0" />
                        <stop offset="100%" stopColor="#c0b898" />
                    </radialGradient>
                    <radialGradient id="eyeG" cx="35%" cy="30%">
                        <stop offset="0%" stopColor="#ffe066" />
                        <stop offset="50%" stopColor="#d49020" />
                        <stop offset="100%" stopColor="#8a5500" />
                    </radialGradient>
                    <radialGradient id="bookG" cx="30%" cy="20%">
                        <stop offset="0%" stopColor="#9a5530" />
                        <stop offset="60%" stopColor="#6a2e10" />
                        <stop offset="100%" stopColor="#3a1508" />
                    </radialGradient>
                    <filter id="outline" x="-10%" y="-10%" width="120%" height="120%">
                        <feMorphology operator="dilate" radius="2.5" in="SourceAlpha" result="expanded" />
                        <feFlood floodColor="#1a0a00" result="color" />
                        <feComposite in="color" in2="expanded" operator="in" result="outline" />
                        <feMerge><feMergeNode in="outline" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="softOutline" x="-10%" y="-10%" width="120%" height="120%">
                        <feMorphology operator="dilate" radius="1.8" in="SourceAlpha" result="expanded" />
                        <feFlood floodColor="#1a0a00" result="color" />
                        <feComposite in="color" in2="expanded" operator="in" result="outline" />
                        <feMerge><feMergeNode in="outline" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {/* Fauteuil */}
                <path d="M55 115 Q50 80 58 55 Q66 30 150 28 Q234 30 242 55 Q250 80 245 115 Q240 145 150 148 Q60 145 55 115Z" fill="url(#chairG)" filter="url(#outline)" />
                <path d="M75 110 Q72 85 78 65 Q86 45 150 43 Q214 45 222 65 Q228 85 225 110 Q222 132 150 134 Q78 132 75 110Z" fill="#7a3515" opacity=".5" />
                <rect x="48" y="190" width="204" height="100" rx="14" fill="url(#chairG)" filter="url(#outline)" />
                <rect x="62" y="200" width="176" height="78" rx="10" fill="#7a3515" opacity=".4" />
                <path d="M30 185 Q28 175 35 160 Q42 148 62 148 L62 285 Q42 285 35 270 Q28 255 30 240 Z" fill="#5a2808" filter="url(#softOutline)" />
                <path d="M270 185 Q272 175 265 160 Q258 148 238 148 L238 285 Q258 285 265 270 Q272 255 270 240 Z" fill="#5a2808" filter="url(#softOutline)" />
                <rect x="72" y="283" width="18" height="22" rx="5" fill="#3a1805" filter="url(#softOutline)" />
                <rect x="210" y="283" width="18" height="22" rx="5" fill="#3a1805" filter="url(#softOutline)" />
                <circle cx="110" cy="75" r="4" fill="#3a1805" opacity=".5" />
                <circle cx="150" cy="68" r="4" fill="#3a1805" opacity=".5" />
                <circle cx="190" cy="75" r="4" fill="#3a1805" opacity=".5" />
                <circle cx="127" cy="98" r="3.5" fill="#3a1805" opacity=".45" />
                <circle cx="173" cy="98" r="3.5" fill="#3a1805" opacity=".45" />

                {/* Corps */}
                <g filter="url(#outline)">
                    <ellipse cx="85" cy="215" rx="36" ry="55" fill="#3a5568" transform="rotate(-8 85 215)" />
                    <ellipse cx="215" cy="215" rx="36" ry="55" fill="#3a5568" transform="rotate(8 215 215)" />
                    <ellipse cx="150" cy="210" rx="65" ry="72" fill="url(#bodyG)" />
                    <ellipse cx="150" cy="222" rx="38" ry="46" fill="url(#bellyG)" />
                    <path d="M130 195 Q150 192 170 195" stroke="#a89878" strokeWidth="1.5" fill="none" opacity=".6" />
                    <path d="M124 208 Q150 204 176 208" stroke="#a89878" strokeWidth="1.5" fill="none" opacity=".5" />
                    <path d="M122 222 Q150 217 178 222" stroke="#a89878" strokeWidth="1.5" fill="none" opacity=".4" />
                    <ellipse cx="130" cy="185" rx="20" ry="15" fill="rgba(255,255,255,.12)" transform="rotate(-15 130 185)" />
                </g>

                {/* Tête */}
                <g filter="url(#outline)">
                    <path d="M118 100 L108 68 L128 88 Z" fill="#5a7888" />
                    <path d="M182 100 L192 68 L172 88 Z" fill="#5a7888" />
                    <path d="M118 100 L108 68 L128 88 Z" fill="none" stroke="#1a0a00" strokeWidth="2.5" strokeLinejoin="round" />
                    <path d="M182 100 L192 68 L172 88 Z" fill="none" stroke="#1a0a00" strokeWidth="2.5" strokeLinejoin="round" />
                    <ellipse cx="150" cy="130" rx="52" ry="50" fill="url(#bodyG)" />
                    <ellipse cx="150" cy="132" rx="40" ry="38" fill="rgba(200,215,225,.55)" />
                    <ellipse cx="132" cy="112" rx="16" ry="11" fill="rgba(255,255,255,.13)" transform="rotate(-20 132 112)" />
                </g>

                {/* Lunettes */}
                <g opacity=".95">
                    <circle cx="132" cy="130" r="19" fill="rgba(10,25,40,.15)" stroke="#c9a030" strokeWidth="2.8" />
                    <circle cx="168" cy="130" r="19" fill="rgba(10,25,40,.15)" stroke="#c9a030" strokeWidth="2.8" />
                    <path d="M151 130 L149 130" stroke="#c9a030" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M113 125 Q105 120 100 122" stroke="#c9a030" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M187 125 Q195 120 200 122" stroke="#c9a030" strokeWidth="2" fill="none" strokeLinecap="round" />
                </g>

                {/* Yeux */}
                <circle cx="132" cy="130" r="15" fill="#050200" />
                <circle cx="132" cy="130" r="11" fill="url(#eyeG)" />
                <circle cx="132" cy="130" r="6.5" fill="#050200" />
                <circle cx="136" cy="125" r="3" fill="white" opacity=".9" />
                <circle cx="128" cy="133" r="1.5" fill="white" opacity=".4" />

                <circle cx="168" cy="130" r="15" fill="#050200" />
                <circle cx="168" cy="130" r="11" fill="url(#eyeG)" />
                <circle cx="168" cy="130" r="6.5" fill="#050200" />
                <circle cx="172" cy="125" r="3" fill="white" opacity=".9" />
                <circle cx="164" cy="133" r="1.5" fill="white" opacity=".4" />

                <path d="M143 148 Q150 155 157 148 L150 162 Z" fill="#d4a030" stroke="#1a0a00" strokeWidth="2" strokeLinejoin="round" />
                <ellipse cx="115" cy="145" rx="9" ry="6" fill="rgba(240,120,100,.35)" />
                <ellipse cx="185" cy="145" rx="9" ry="6" fill="rgba(240,120,100,.35)" />

                {/* Pipe + fumée */}
                <rect x="155" y="157" width="38" height="8" rx="4" fill="#3a2010" stroke="#1a0a00" strokeWidth="1.5" />
                <ellipse cx="196" cy="152" rx="9" ry="10" fill="none" stroke="#3a2010" strokeWidth="4" />
                <ellipse cx="196" cy="152" rx="5" ry="6" fill="#2a1808" />
                <path d="M196 142 Q199 136 195 130 Q191 124 194 118" stroke="rgba(200,200,200,.45)" strokeWidth="3" fill="none" strokeLinecap="round">
                    <animate attributeName="d" dur="2.5s" repeatCount="indefinite"
                        values="M196 142 Q199 136 195 130 Q191 124 194 118;M196 142 Q201 135 196 129 Q191 122 195 116;M196 142 Q199 136 195 130 Q191 124 194 118" />
                </path>
                <path d="M196 142 Q192 135 196 128 Q200 121 196 114" stroke="rgba(200,200,200,.25)" strokeWidth="2" fill="none" strokeLinecap="round">
                    <animate attributeName="d" dur="3.5s" repeatCount="indefinite" begin=".8s"
                        values="M196 142 Q192 135 196 128 Q200 121 196 114;M196 142 Q194 134 198 127 Q202 120 197 112;M196 142 Q192 135 196 128 Q200 121 196 114" />
                </path>

                {/* Livre */}
                <g filter="url(#softOutline)">
                    <path d="M80 195 Q82 185 88 182 L148 182 L148 260 Q88 260 82 252 Z" fill="url(#bookG)" />
                    <path d="M152 182 L212 182 Q218 185 220 195 L218 252 Q212 260 152 260 Z" fill="#7a3515" />
                    <rect x="146" y="180" width="8" height="82" rx="3" fill="#3a1505" />
                    <rect x="86" y="188" width="55" height="3" rx="1.5" fill="#c9a030" opacity=".8" />
                    <rect x="86" y="196" width="45" height="2" rx="1" fill="#c9a030" opacity=".6" />
                    <text x="100" y="218" textAnchor="middle" fontFamily="serif" fontSize="8.5" fill="#f5e6c8" fontWeight="bold" opacity=".95">LE SAVOIR</text>
                    <text x="100" y="230" textAnchor="middle" fontFamily="serif" fontSize="8.5" fill="#f5e6c8" fontWeight="bold" opacity=".95">UNIVERSEL</text>
                    <line x1="158" y1="196" x2="212" y2="196" stroke="rgba(245,230,180,.3)" strokeWidth="1.2" />
                    <line x1="158" y1="205" x2="210" y2="205" stroke="rgba(245,230,180,.25)" strokeWidth="1.2" />
                    <line x1="158" y1="214" x2="210" y2="214" stroke="rgba(245,230,180,.25)" strokeWidth="1.2" />
                    <line x1="158" y1="223" x2="208" y2="223" stroke="rgba(245,230,180,.2)" strokeWidth="1.2" />
                    <line x1="158" y1="232" x2="206" y2="232" stroke="rgba(245,230,180,.2)" strokeWidth="1.2" />
                    <line x1="158" y1="241" x2="205" y2="241" stroke="rgba(245,230,180,.15)" strokeWidth="1.2" />
                    <path d="M210 255 Q214 256 216 252" stroke="#9a6040" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <rect x="146" y="215" width="8" height="12" rx="2" fill="#c9a030" />
                    <circle cx="150" cy="221" r="2" fill="#a07820" />
                </g>

                {/* Pattes */}
                <g filter="url(#softOutline)" fill="#3a5568">
                    <path d="M120 278 Q116 290 108 296 M120 278 Q120 292 118 298 M120 278 Q124 290 132 296" stroke="#2a4558" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M178 278 Q174 290 166 296 M178 278 Q178 292 176 298 M178 278 Q182 290 190 296" stroke="#2a4558" strokeWidth="4" strokeLinecap="round" fill="none" />
                </g>
            </svg>
        </div>
    );
}
