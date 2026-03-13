// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { leconRome } from "../../data/leconRome";
import "./CoursContent.css";

export default function CoursContent({ onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="cours"
    >
      <button onClick={onBack} className="cours__btn-retour">
        ← Retour au menu
      </button>

      <h2 className="cours__titre">
        {leconRome.titre}
      </h2>

      <div className="cours__sections">
        {leconRome.sections.map((section, index) => (
          <div key={index}>
            <h3 className="cours__section-titre">{section.titre}</h3>
            <p className="cours__section-contenu">
              {section.contenu}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}