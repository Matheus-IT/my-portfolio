export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <p className="text-base">Matheus Costa - {currentYear}</p>
    </footer>
  );
}
