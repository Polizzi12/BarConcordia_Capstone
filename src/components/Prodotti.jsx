import React, { useState } from "react";
import Pasticcini1 from "../assets/pasticcini1.jpg";
import Pizze from "../assets/pizze.jpg";
import Pasticcinifrutta from "../assets/pasticcini_frutta.jpg";
import Pasticcinicrema from "../assets/pasticcini_crema.jpg";
import Cornettonutella from "../assets/cornetto_nutella.jpg";
import Cornettocrema from "../assets/cornetto_crema.jpg";
import Cornettopandistelle from "../assets/cornetto_pandistelle.jpg";
import Cornettointegrale from "../assets/cornetto_integrale.jpg";
import Cornettocereali from "../assets/cornetti_cereali.jpg";
import Cornettini from "../assets/cornettino.jpg";
import Fagottino from "../assets/fagottino_cioccolato.jpg";
import Fagottini from "../assets/fagottini.jpg";
import Frolle from "../assets/frolla_mele_pistacchio.jpg";
import Flauti from "../assets/flautini.jpg";
import MieleNoci from "../assets/miele_e_noci.jpg";
import GirellaUva from "../assets/girella_uva.jpg";
import GirellaCioccolato from "../assets/girella_cioccolato.jpg";
import Donut from "../assets/donut_crema.jpg";
import MiniDonut from "../assets/mini_donut.jpg";
import BigCookie from "../assets/big_cookie.jpg";
import Conchiglia from "../assets/conchiglia_limone.jpg";
import Palle from "../assets/palline.jpg";
import PanGocciole from "../assets/pangocciole.jpg";
import Cannoli from "../assets/cannoli.jpg";
import SetteGialla from "../assets/7veli_gialle.jpg";
import SetteCannolo from "../assets/settevli_cannolo.jpg";
import SetteCiocc from "../assets/settevelicioccolato.jpg";
import SetteFrutt from "../assets/setteveli_frutta.jpg";
import TroncPist from "../assets/tronchetto_pistacchio.jpg";
import Viennetta from "../assets/tornchettogocc.jpg";
import Tartine from "../assets/tartine_fredde.jpg";
import Coppe from "../assets/coppetterosse.jpg";
import Palla1 from "../assets/torta_palla.jpg";
import Palla2 from "../assets/torta_palladue.jpg";
import CremaCaffe from "../assets/cremacaffè.jpg";
import Caffe from "../assets/caffe.jpg";
import Cappuccino from "../assets/cappuccino.jpg";
import Macchiato from "../assets/caffe_macchiato.jpg";
import Pizzaprosciutto from "../assets/pizza_prosciutto.jpg";
import Pizzawrustel from "../assets/pizze_wrustel.jpg";
import Pizzafunghi from "../assets/pizza_funghi.jpg"
import Pizzamargherita from "../assets/pizza_margherita.jpg";
import Piadina from "../assets/piadina.jpg";
import CornettoSalato from "../assets/cornettino_salato.jpg";
import Flautoosalato from "../assets/flauto_salato.jpg"



const Prodotti = () => {
  const [activeTab, setActiveTab] = useState("pasticceria");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="padre">
      <div className="titolo">
        {" "}
        <h1>Scopri tutto ciò che il BarConcordia ha da offrire</h1>{" "}
      </div>
      <div className="tabs">
        <button
          className={`tab-button pasticceria-button ${activeTab === "pasticceria" ? "active" : ""}`}
          onClick={() => handleTabClick("pasticceria")}
        >
          <div className="tt">Pasticceria</div>
        </button>

        <button
          className={`tab-button tavolacalda-button ${activeTab === "tavola-calda" ? "active" : ""}`}
          onClick={() => handleTabClick("tavola-calda")}
        >
          <div className="tt">Tavola Calda</div>
        </button>

        <button
          className={`tab-button caffetteria-button ${activeTab === "caffetteria" ? "active" : ""}`}
          onClick={() => handleTabClick("caffetteria")}
        >
          <div className="tt">Caffetteria</div>
        </button>

        <div className="tab-content">
          <div className={`tab-pane ${activeTab === "pasticceria" ? "active" : ""}`}>
            <div className="list">
              <h2 className="ttl">Pasticcini</h2>
              <ul>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pasticcinifrutta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Golosi pasticcini con sopra della frutta fresca
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pasticcinicrema} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Bignè con la nostra indistinguibile crema
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cannoli} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Il tipico cannolo siciliano formato pasticcino 
                    </div>
                  </div>
                </li>
              </ul>
              <h2 className="ttl">Colazioni</h2>
              <ul>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettonutella} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettocrema} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettopandistelle} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettini} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettocereali} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettointegrale} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Fagottino} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Fagottini} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Flauti} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={GirellaCioccolato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={GirellaUva} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Palle} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Conchiglia} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={MieleNoci} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={PanGocciole} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Donut} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={MiniDonut} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={BigCookie} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Frolle} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
              </ul>
              <h2 className="ttl">Freddi</h2>
              <ul>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteGialla} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteCiocc} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteFrutt} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteCannolo} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={TroncPist} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Viennetta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Tartine} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Coppe} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Palla1} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Palla2} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Scopri un mondo dolcissimo con gli inimitabili pasticcini del Bar Concordia. Ne troverai per tutti
                      i gusti: dal cioccolato alla ricotta, fino all'iconica crema pasticcera. E per i più golosi, pure
                      il pistacchio.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === "caffetteria" ? "active" : ""}`}>
            <div className="list">
              <h2 className="ttl">Caffetteria</h2>
              <ul>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Caffe} className="immagini" alt="Pizze" />
                    </div>
                    <div className="description">
                      Caffè <br />
                     La scelta più semplice, ma la migliore!
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cappuccino} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cappuccino <br />
                     Per iniziare al meglio la giornata e per fare compagnia al tuo cornetto!
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={CremaCaffe} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Crema Di Caffè <br />
                      Un'esplosione di gusto cremoso al caffè!
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Macchiato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Caffè macchiato <br />
                     Un tocco di latte per un caffè perfetto.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === "tavola-calda" ? "active" : ""}`}>
            <div className="list">
              <h2 className="ttl">Tavola Calda</h2>
              <ul>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzamargherita} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Salato
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzafunghi} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Salato
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzaprosciutto} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Salato
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzawrustel} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Salato
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Flautoosalato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Salato
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Piadina} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Salato
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={CornettoSalato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Salato
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodotti;
