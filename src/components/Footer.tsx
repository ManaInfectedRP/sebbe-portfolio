export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Sebastian Larsson. Built with React + Vite.</p>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
