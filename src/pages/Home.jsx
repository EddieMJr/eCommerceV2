import React from 'react'
import { useState } from 'react'
import './Home.css'
import '../pages/shared.css'
import HeroImgUno from '/digitalLibrary.png'

function HomePage() {

  return (
    <>
      <main>
      <section id="heroImage">
        <img src={HeroImgUno} width="100%" />
      </section>
      <section className="cat__section">
        <h3 className="cathead__h3">we show what we love through what we sell, which is:</h3> 
        <div className="music__div">
          <p id="catTitle__p">Music</p>
          <p id="catDesc__p">in CD & Vinyl Format</p>
        </div>
        <div className="book__div">
          <p id="catTitle__p">Books</p>
          <p id="catDesc__p">including comics, novels & non-fiction</p>          
        </div>
        <div className="movies__div">
          <p id="catTitle__p">Movies</p>
          <p id="catDesc__p">in DVD & VHS Format</p>          
        </div>
      </section>
      <section className="example__div">
        <h3 className="frontGrid__h3">just <b id="colorChange">SOME</b> of what we offer:</h3> 
        <div id="frontBookGrid">
        </div>
      </section> 
    </main>
    </>
  )
}

export default HomePage