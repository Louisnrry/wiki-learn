import React from "react";

// Composant racine qui enveloppe toutes les pages
export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                {children}
            </body>
        </html>
    );
}
