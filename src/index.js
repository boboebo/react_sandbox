// define q es un componente y como interectuan
import React from "react";
// define q es un componente y como mostrarlo al usuario en la pantalla
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { mensaje, mensaje1 } from "./App";

//obtener referencia al div del html adonde se mandara todo para q sea mostrado
const root = ReactDOM.createRoot(document.getElementById("root"));

// const App = () => {
//   const persona = {
//     name: "charlie",
//     lastname: "brown",
//     age: 10,
//   };
//   const persona1 = { ...persona };

//   const content = (
//     <div>
//       <h1>bienvenido {persona1.name}</h1>
//       <h3>ingrese un valor </h3>
//       <input
//         type="number"
//         max={10}
//         min={1}
//         style={{ color: "red", fontSize: "2rem" }}
//         autoFocus
//         className="loco"
//       />
//     </div>
//   );

//   return content;
// };

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
