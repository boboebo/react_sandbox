import logo from "./logo.svg";
import ProfCard from "./components/ProfCard";
import BmwImg from "./assets/bmw.png";
import LamboImg from "./assets/Lamborghini.webp";
import PorscheImg from "./assets/porsche.png";
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <div className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">Lista de Marcas</h1>
        </div>
      </div>

      <div className="container">
        <div className="columns">
          <div className="column is-4">
            <ProfCard titulo="Porsche" detalle="detalle1" img={PorscheImg} />
          </div>
          <div className="column is-4">
            <ProfCard titulo="Lamborguini" detalle="detalle2" img={LamboImg} />
          </div>
          <div className="column is-4">
            <ProfCard titulo="BmwImg" detalle="detalle3" img={BmwImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mensaje = "cadena exportada";
const mensaje1 = "cadena1 exportada";

export default App;
export { mensaje, mensaje1 };
