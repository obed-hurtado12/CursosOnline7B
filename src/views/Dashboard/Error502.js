import React, { Component } from "react";
import "./error404.css";

export default class Error502 extends Component {
  render() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>
              5<span>0</span>2
            </h1>
          </div>
          <p>
            Woops! ¡Bad Gateway!
          </p>
          <p id="texto">
          El servidor encontró un error temporal y no pudo completar su solicitud.
          </p>
          <a href="#">Volver</a>
        </div>
      </div>
    );
  }
}
