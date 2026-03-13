import "./OngletsProfil.css";

export default function OngletsProfil({
  onglet,
  setOnglet,
  badges,
  avatars,
  estDebloque,
}) {
  return (
    <div className="profil__onglets">
      <button
        className={`profil__onglet ${onglet === "badges" ? "profil__onglet--actif" : ""}`}
        onClick={() => setOnglet("badges")}
      >
        🏅 Badges ({badges.filter((b) => estDebloque(b.id)).length}/{badges.length})
      </button>
      <button
        className={`profil__onglet ${onglet === "avatars" ? "profil__onglet--actif" : ""}`}
        onClick={() => setOnglet("avatars")}
      >
        🖼️ Avatars ({avatars.filter((a) => estDebloque(a.id)).length}/{avatars.length})
      </button>
    </div>
  );
}
