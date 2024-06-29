import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="row w-100">
            <div className="col-12 col-md-4 mb-3">
              <h4>Azienda</h4>
              <ul>
                <li><a href="#">Chi siamo</a></li>
                <li><a href="#">Opportunità di lavoro</a></li>
                <li><a href="#">For the Record</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h4>Community</h4>
              <ul>
                <li><a href="#">Per artisti</a></li>
                <li><a href="#">Sviluppatori</a></li>
                <li><a href="#">Pubblicità</a></li>
                <li><a href="#">Investitori</a></li>
                <li><a href="#">Venditori</a></li>
              </ul>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <h4>Link Utili</h4>
              <ul>
                <li><a href="#">Assistenza</a></li>
                <li><a href="#">App mobile gratuita</a></li>
                <li><a href="#">Diritti del consumatore</a></li>
              </ul>
            </div>
          </div>
          <div className="icon d-flex justify-content-center justify-content-md-end">
            <div className="icon-item">
              <svg></svg>
            </div>
            <div className="icon-item">
              <svg></svg>
            </div>
            <div className="icon-item">
              <svg></svg>
            </div>
          </div>
        </div>
        <div className="cont d-flex justify-content-between flex-wrap mt-3">
          <div>
            <p className="iff">informazioni legali</p>
            <p className="iff">Sicurezza e Centro sulla privacy</p>
            <p className="iff">Informativa sulla privacy</p>
            <p className="iff">Impostazioni cookie</p>
            <p className="iff">Info annunci</p>
            <p className="iff">Accessibilità</p>
          </div>
          <div>
            <p style={{ color: '#969696' }}>&copy;2024 Spotify AB</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;