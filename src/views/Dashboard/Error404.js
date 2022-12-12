import React, { Component } from "react";
import "./error404.css";

export default class Error404 extends Component {
  render() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>
              4<span>0</span>4
            </h1>
          </div>
          <p>
            Woops! ¡Pagina No Encontrada!
          </p>
          <p id="texto">
          Es posible que la página que está buscando haya sido eliminada debido a un cambio de nombre o no esté disponible temporalmente.
          </p>
          <a href="#">Volver</a>
        </div>
      </div>
    );
  }
}
