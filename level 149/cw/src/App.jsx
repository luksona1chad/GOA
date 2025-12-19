import React from "react";

import "./App.css";

export default function App() {

  return (

    <div className="p">

      <div className="h">

        <h1>Visit Torshov</h1>

        <p>Enjoy culture and sports in this vibrant district <br /> close to the center of Oslo.</p>

      </div>

      <section className="a1">

        <h2>Top three activities to do at Torshov</h2>

        <div className="a-l">

          <div className="activity">

            <img src="./assets/img/1.png" alt="" />

            <h3>Attend a show or a concert</h3>

            <p>The Torshov Theatre is a great place to spend your night out.</p>

          </div>

          <div className="a3">

            <img src="/assets/img/2.png" alt="" />

            <h3>Go for a picnic in the local park</h3>

            <p>The Torshov Park is perfect for picnic, getting some tan, or just chilling out.</p>

          </div>

          <div className="a4">

            <img src="./assets/img/3.png" alt="" />

            <h3>Play sports at the Lilleborg field</h3>

            <p>Play volleyball, football, basketball or lift some weights.</p>

          </div>

        </div>

      </section>

      <div className="g">

        <div>

          <img src="./assets/img/5.png" alt="" />

          <h3>Your guide</h3>

          <p>"I have lived at Torshov for <br/> over 30 years, so I can <br/> show you all of its best <br/> parts and hidden secrets."</p>

          <strong>Per Harald Borgen</strong>

        </div>

        <div className="d">1/1</div>

      </div>

    </div>

  );

}