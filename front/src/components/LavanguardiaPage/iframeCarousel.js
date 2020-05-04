import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../HomePage/buttonGames.css';
import cityban from '../HomePage/imgmainPage/city@2x.png';
import tackle from '../HomePage/imgmainPage/imagen_home_tt@2x.png'
import nonogram from '../HomePage/imgmainPage/cardNonogram.jpg';
import snake from '../HomePage/imgmainPage/snake.png';
import OneToFifty from '../HomePage/imgmainPage/iframeOneToFifty.png';
import MemoryGame from '../HomePage/imgmainPage/cardMemoryGame.png';


const IframeCarousel = (props) => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
  };

  return (

<div id="testiframe">

  <Carousel showDots autoPlay dotListClass infinite
    autoPlaySpeed={10000}
    responsive={responsive}>
      <div>
        <Link to='snake' className='jugartext'>
          <img
            className="imagecarousel"
            src={snake}
            alt="Snake"
          />
        </Link>
        <p className="textCarouseliFrame">El mítico juego de Nokia vuelve para engancharte de nuevo</p>
      </div>
      <div>
        <Link to='nonogram' className='jugartext'>
          <img
            className="imagecarousel"
            src={nonogram}
            alt="NONOGRAM"
          />
        </Link>
        <p className="textCarouseliFrame">Rellena las casillas siguiendo las pistas en Nonogram</p>
      </div>
      <div>
        <Link to='OneToFifty' className='jugartext'>
          <img
            className="imagecarousel"
            src={OneToFifty}
            alt="One To fifty"
          />
        </Link>
        <p className="textCarouseliFrame">Ordena los numeros del 1 al 50</p>
      </div>
      <div>
        <Link to='tacleclick' className='jugartext'>
          <img
            className="imagecarousel"
            src={tackle}
            alt="Third slide"
          />
        </Link>
      <p className="textCarouseliFrame">Dale una paliza a tu rival!</p>
      </div>
      <div>
      <Link to='MemoryGame' className='jugartext'>
        <img
          className="imagecarousel"
          src={MemoryGame}
          alt="MemoryGame"
        />
      </Link>
      <p className="textCarouseliFrame">Practica tu memória en Memory Game</p>
    </div>
    <div>
      <Link to='cityplay' className='jugartext'>
        <img
          className="imagecarousel"
          src={cityban}
          alt="First slide"
        />
      </Link>

      <p className="textCarouseliFrame">Juega a citiplay y pon a prueba tus conocimientos sobre capitales de todo el mundo</p>
    </div>

  </Carousel>

</div>

)

  }

export default IframeCarousel
