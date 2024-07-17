export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section flex justify-center items-center max-sm:m-2 max-xl:m-4 h-[6rem]">
      <p className="text-base">Matheus Costa - {currentYear}</p>
    </footer>
  );
}
