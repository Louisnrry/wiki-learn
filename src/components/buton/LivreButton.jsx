import "./LivreButton.css";

export default function LivreButton({ children, variant = "primary", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`livre-btn livre-btn--${variant}`}
    >
      {children}
    </button>
  );
}