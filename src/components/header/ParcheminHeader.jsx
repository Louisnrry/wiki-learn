import { motion } from "framer-motion";
import "./ParcheminHeader.css";

export default function ParcheminHeader({ title }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="parchemin-header"
    >
      {/* Effet de ruban / Parchemin */}
      <div className="parchemin-header__bandeau">
        {/* Texture de papier en fond */}
        <div className="parchemin-header__texture"></div>

        <h1 className="parchemin-header__titre">
          {title}
        </h1>

        {/* Petits ornements sur les côtés */}
        <div className="parchemin-header__ornement parchemin-header__ornement--gauche">✦</div>
        <div className="parchemin-header__ornement parchemin-header__ornement--droite">✦</div>
      </div>
    </motion.header>
  );
}