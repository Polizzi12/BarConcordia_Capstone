import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>Contatti</h1>
        <div className="social-icons">
          <a href="https://www.instagram.com/bar_concordia" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/BarConcordia" className="icon-link" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <p>Telefono: <a href="tel:0933-190-1990">0933-190-1990</a></p>
        <p>e-mail: <a href="mailto:barconcordia5@gmail.com">barconcordia5@gmail.com</a></p>
        <p>Indirizzo: <a href="https://www.google.com/maps/search/?api=1&query=Via+Principe+Umberto,+154,+95040+Mazzarrone+CT" target="_blank" rel="noopener noreferrer">Via Principe Umberto, 154, 95040 Mazzarrone CT</a></p>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>Created By Giuseppe Polizzi WebDev: <a href="tel:+393332089141">3332089141</a></p>
      </div>
    </footer>
  );
}

export default Footer;