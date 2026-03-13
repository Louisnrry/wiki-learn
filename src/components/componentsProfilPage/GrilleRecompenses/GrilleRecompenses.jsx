import CarteRecompense from "../CarteRecompense/CarteRecompense";
import "./GrilleRecompenses.css";

export default function GrilleRecompenses({
  onglet,
  badges,
  avatars,
  estDebloque,
  avatarActif,
  changerAvatar,
}) {
  const liste = onglet === "badges" ? badges : avatars;

  return (
    <div className="profil__grille-wrapper">
      <div className="profil__grille">
        {liste.map((recompense) => (
          <CarteRecompense
            key={recompense.id}
            recompense={recompense}
            debloquee={estDebloque(recompense.id)}
            actif={recompense.type === "avatar" && avatarActif === recompense.emoji}
            onClick={recompense.type === "avatar" ? () => changerAvatar(recompense.id) : null}
          />
        ))}
      </div>
    </div>
  );
}
