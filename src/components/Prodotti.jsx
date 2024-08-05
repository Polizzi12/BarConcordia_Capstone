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
import Flautoosalato from "../assets/flauto_salato.jpg";
import conicioccolato from "../assets/conicioccolato.jpg";
import conipistacchio from "../assets/conipistacchio.jpg";
import conischizzati from "../assets/conischizzati.jpg";
import conicolorati from "../assets/conicolorati.jpg";
import Pasticciniricotta from "../assets/pasticciniricotta.jpg";
import Pasticcinicioccolato from "../assets/pasticcinicioccolato.jpg";
import Calzone from "../assets/calzone.jpg";
import Focaccia from "../assets/focaccia.jpg";
import Coperta from "../assets/pizacoperta.jpg";
import Pizzetta from "../assets/pizzetta.jpg";
import Cornettopistacchio from "../assets/cornettopistacchio.jpg";
import Cornettoricotta from "../assets/cornettoricotta.jpg";
import Granita from "../assets/granitapistacchio&brioches.jpg";
import Gin from "../assets/ginseng.jpg";
import Orzo from "../assets/caffe d'orzo.jpg";

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
      <div className="tabs" data-aos="fade-up" >
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

        <div className="tab-content" >
          <div className={`tab-pane ${activeTab === "pasticceria" ? "active" : ""}`} >
            <div className="list" data-aos="fade-up">
              <h2 className="ttl">Pasticcini</h2>
              <ul>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pasticcinifrutta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Golosi pasticcini con sopra della frutta fresca.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pasticcinicrema} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Bignè con la nostra indistinguibile crema.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pasticciniricotta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Bignè alla Ricotta.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pasticcinicioccolato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Bignè al Cioccolato.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cannoli} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Il tipico cannolo siciliano formato pasticcino.
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
                     Cornetto alla Nutella.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettocrema} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cornetto Alla Crema.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettopistacchio} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cornetto Al Pistacchio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettoricotta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cornetto Alla Ricotta.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettopandistelle} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cornetto PanDistelle.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettini} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cornettini, gusti disponibili: <br />
                      -Pistacchio.<br />
                      -Cioccolata Bianca.<br />
                      -Marmellata di Albicocca.<br />
                      -Nutella.<br />
                      -Crema.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettocereali} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     -Cornetto integrale con marmellata all'arancia.<br />
                     -Cornetto 5 cereali.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Cornettointegrale} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cornetti integrali:<br />
                      -Miele.<br />
                      -Frutti di Bosco.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Fagottino} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Fagottino ai tre cioccolati.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Fagottini} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Mezzelune:<br />
                      -Crema.<br />
                      -Ricotta.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Flauti} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Mini Flauti:<br />
                      -Nutella.<br />
                      -RIcotta e scaglie di Cioccolato.<br />
                      -Crema<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={GirellaCioccolato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      -Girella al Cioccolato.<br />
                      -Girellina al Cioccolato.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={GirellaUva} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Girellina con Uva Passa.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Palle} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Mini panzerotti:<br />
                     -Ricotta.<br />
                     -Crema.<br />
                     -Pistacchio.<br />
                     -Cioccolato.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Conchiglia} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Conchiglia alla Crema al Limone.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={MieleNoci} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Treccia Miele e Noci
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={PanGocciole} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      -Pangocciolo.<br />
                      -Minipangocciolo.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Donut} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Donuts Crema.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={MiniDonut} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Mini dontus:<br />
                    -Frutti di bosco.<br />
                    -Caramello Salato.<br />
                    -Cioccolato.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={BigCookie} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Panzerotto al biscotto e ricotta.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Frolle} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Crostatine:<br />
                     -Pistacchio e Ricotta.<br />
                     -Crema e mele.<br />
                    </div>
                  </div>
                </li>
              </ul>
              <h2 className="ttl">Freddi</h2>
              <ul>
              <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Granita} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Granita e Brioche: <br />
                      -limone <br />
                      -pistacchio  <br />
                      -cioccolato <br />
                      -mandorla <br />
                      -caffè <br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={conipistacchio} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Coni turchi al pistacchio.
                    </div>
                  </div>
                </li>
              <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={conicioccolato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Coni turchi:<br />
                      -Cioccolato.<br />
                      -Nocciola.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={conicolorati} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Coni turchi alla frutta:<br />
                     -Limone.<br />
                     -Fragola.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={conischizzati} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Coni turchi: <br />
                      -Torrone.<br />
                      -Stracciatella.<br />
                    </div>
                  </div>
                </li>
                
              
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteGialla} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Semifreddo al Caramello.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteCiocc} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Semifreddo ai tre cioccolati.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteFrutt} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Semifreddi ai frutti di bosco.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={SetteCannolo} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                    Semifreddi alla ricotta e Nutella.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={TroncPist} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Tronchetto al pistacchio con base croccante alla nocciola.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Viennetta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Viennetta Cioccolato e Vaniglia.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Tartine} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Monoporzioni semifreddi:<br />
                      -Pistacchio.<br />
                      -Cioccolato.<br />
                      -Caramello.<br />
                      -Frutti di Bosco.<br />
                      -Fiordilatte.<br />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Coppe} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Monoporzioni ai frutti di bosco con croccante al limnone.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Palla1} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Zuccotto Pistacchio e Nocciola.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Palla2} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Zuccotto Ricotta e Nutella.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === "caffetteria" ? "active" : ""}`}>
            <div className="list" data-aos="fade-up">
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
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Gin} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Ginseng <br />
                     Il benessere in una tazza: scegli il nostro ginseng di alta qualità
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Orzo} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Caffè D'Orzo <br />
                    Scopri il piacere del caffè d'orzo, una scelta senza caffeina.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={`tab-pane ${activeTab === "tavola-calda" ? "active" : ""}`}>
            <div className="list" data-aos="fade-up">
              <h2 className="ttl">Tavola Calda</h2>
              <ul>
              <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={CornettoSalato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Cornettino Salato con prosciutto e lattuga.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Calzone} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Calzone Wrustel Patatine K. M.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Coperta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Pizza Coperta Prosciutto e Mozzarella
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Focaccia} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Focaccia Spinaci, Funghi e Formaggio.
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzetta} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Pizzetta Margherita
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzamargherita} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Pizza Margherita
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzafunghi} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Pizza ai funghi
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzaprosciutto} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Pizza la prosciutto
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Pizzawrustel} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                      Pizza con wrustel
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Flautoosalato} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Flauto Salato prosciutto e mozzarella
                    </div>
                  </div>
                </li>
                <li>
                  <div className="bloc">
                    <div className="image-container">
                      <img src={Piadina} className="immagini" alt="Pasticcini" />
                    </div>
                    <div className="description">
                     Piadina prosciutto e mozzarella
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
