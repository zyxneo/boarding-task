import React from "react";
import Ring from "../segments/ring";

export default class HomePage extends React.Component {
  render() {

      return (
        <main class="main">
          <div class="container">
            <h1>Darstellung eines Bohrabschnitts</h1>

            <Ring/>

          </div>
        </main>
      )
  }
}
