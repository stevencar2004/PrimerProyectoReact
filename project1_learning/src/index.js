import React from "react";
import ReactDOM from "react-dom";

// Importamos los estilos
import "./styles/index.scss";

// Importamos los componentes principales
import App from "./components/App";

// Esta funcion renderiza todos los componentes que creemos y los incrusta en el HTML
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
