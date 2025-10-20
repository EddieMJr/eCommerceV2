import React from 'react'
import { useState, useEffect } from 'react'
import './Home.css'
import '../pages/shared.css'
import HeroImgUno from '/digitalLib.png'
import HeroImgDos from '/meet&greet.png'
import HeroImgTres from '/goldTicket.png'
import comicMan from '/comicMan.webp'
import MediaStack from '/collect.avif'
import Collection from '/IMG_4171.JPG'

function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { id: 1, image: HeroImgUno },
    { id: 2, image: HeroImgDos },
    { id: 3, image: HeroImgTres },
  ];

  const nextSlide = () =>
    setSlideIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main>
      <div className='newOffer__div'>
        <p>&#128293; NEW MUSIC SHIPMENT!! CHECK THE SHOP PAGE!! &#128293;</p>
      </div>
      <section id="heroSlides" className="relative">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`mySlides fade ${i === slideIndex ? "active" : "hidden"}`}
          >
            <div className="numbertext">{slide.id} / {slides.length}</div>
            <img src={slide.image} style={{ width: "100%", borderRadius: ".33rem" }} alt={slide.caption} />
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
        <div style={{ textAlign: "right", marginRight: "2rem", marginTop: ".5rem"}}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === slideIndex ? "active" : ""}`}
              onClick={() => setSlideIndex(i)}
            />
          ))}
        </div>
      </section>
      <section className="assist__section">
        <div className="resource__div">
            <div className="divIMG__div">
            <img className="sectionIMG__img" src={comicMan} alt="Customer Holding Comics" />
            </div>
            <h2 className="head__h2">Get Some Cool Stuff!</h2>
            <p className="sectionTxt__p">
              Our purpose is to help as many people as possible get the things they want, whether thats music, movies, books, etc. That's why we're so vercitile. Click the button below to start shopping.
            </p>
            <div className="buttons__div">
              <button className="primaryBtn" onClick={() => window.location.href = '/shop'}>Shop!</button>
            </div>
        </div>
        <div className="mapForm__div">
          <div className="divIMG__div">
            <img className="sectionIMG__img" src={MediaStack} alt="One of our employee's personal libraries" />
          </div>
          <h2 className="head__h2">We Rely On You!</h2>
          <p className="sectionTxt__p">
            With alot of what we sell, it comes from donations and personal purchases for the store. You can help build our inventory as well! If you have things in your collection you don't want anymore, you can let us know on the Feedback Page & we can pick them up or you can drop them off!
          </p>
          <div className="buttons__div">
              <button className="primaryBtn" onClick={() => window.location.href = '/contact'}>Contact!</button>
          </div>
        </div>
      </section>
      <section className="about__section">
        <div className="about__text">
          <h2 id="aboutSectHead__h2">About Me</h2>
          <h3 id="aboutPHead__h3"></h3>
          <p id="aboutText__p">
            I built this company to help share my love of music, movies, comics, etc with the world. Through this store, im able to do that along with assisting others that are underprivilaged get the help that they need.
          </p>
        </div>
        <div className="abtIMG__div">
            <img src={Collection} alt="Personal Photo" className="about__img" />
        </div>
      </section>
    </main>
  );
}


export default HomePage