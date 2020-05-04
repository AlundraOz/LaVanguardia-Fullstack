import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../HomePage/buttonGames.css';
import cityban from './imgmainPage/cover_cp@2x.png';
import citybanmini from './imgmainPage/cityplaymini-100.png'
import tackle from './imgmainPage/imagen_home_tt@2x.png'
import titleGeo from './imgmainPage/imagen_home_gc@2x.png';
import nonogram from './imgmainPage/cardNonogram.jpg';
import snake from './imgmainPage/snake.png';
import Category from '../Categories/category';
import OneToFifty from './imgmainPage/iframeOneToFifty.png';
import memory from './imgmainPage/cardMemoryGame.png';


// const ButtonGames =(props)=>{
//     return (
//         <div>
//         <button>
// <Link to='cityplay'> Jugar
// </Link></button>
//       <button>
// <Link to='tacleclick'> Jugar
// </Link></button>
// </div>
//     )
// }
const ButtonGames = (props)=>{
    return(
    <div>

      <div>
        <Category />
      </div>
      <div className="gameSectionContainer">
        <div>
          <div>
            <div className="headerText">
              <h2>Juegos en línea de La Vanguardia</h2>
              <hr/>
              <p>¡Bienvenidos a la sección de juegos de La Vanguardia! Una amplia selección de juegos online gratis para que lleves la diversión a otro nivel.</p>
            </div>
            <div>
              <div>
                <Link to='cityplay' className=''>
                  <img
                    className="mainCardGame"
                    src={cityban}
                    alt="First slide"
                  />
                </Link>
              </div>
            </div>

          </div>
          <div>
            <h3 className="titleFeatured">Destacados de la Semana</h3>
            <hr></hr>
            <div className="featuredGames">
              <div className="cardFeatured">
                <Link to='tacleclick' className=''>
                  <img
                    className="imgFeatured"
                    src={tackle}
                    alt="First slide"
                  />
                </Link>
                  <p>Machaca al equipo que quieras y pon a prueba tu agilidad con Tackle Click.</p>
                <Link to='tacleclick' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='cityplay' className=''>
                  <img
                    className="imgFeatured"
                    src={citybanmini}
                    alt="First slide"
                  />
                </Link>
                  <p>Con CityPlay adivina las capítales tendrás el increíble desafío de responder un quiz sobre los países y sus capitales ¡No podrás parar de jugar!</p>
                <Link to='cityplay' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='geoChallenge' className=''>
                  <img
                    className="imgFeatured"
                    src={titleGeo}
                    alt="First slide"
                  />
                </Link>
                  <p>Descubre distintos lugares con Geo Challenge, un juego desafiante que te llevará a recorrer el mundo y te mantendrá ocupado por horas!</p>
                <Link to='geoChallenge' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='nonogram' className=''>
                  <img
                    className="imgFeatured"
                    src={nonogram}
                    alt="First slide"
                  />
                </Link>
                   <p>Con este juego adictivo pasarás horas coloreando filas y columnas, este novedoso juego pondrá a prueba tu lógica</p>
                <Link to='nonogram' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='snake' className=''>
                  <img
                    className="imgFeatured"
                    src={snake}
                    alt="First slide"
                  />
                </Link>
                   <p>Rememora el clásico juego del Snake que nos encandiló a todos con el antiguo Nokia 3310</p>
                <Link to='snake' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
              <div className="cardFeatured">
                <Link to='OneToFifty' className=''>
                  <img
                    className="imgFeatured"
                    src={OneToFifty}
                    alt="First slide"
                  />
                </Link>
                   <p>El juego de moda que te dejará enganchado por horas!</p>
                <Link to='OneToFifty' className=''>
                  <button className="buttonFeatured"> JUGAR AHORA </button>
                </Link>
              </div>
            </div>

            <div className="cardFeatured">
              <Link to='MemoryGame' className=''>
                <img
                  className="imgFeatured"
                  src={memory}
                  alt="First slide"
                />
              </Link>
                 <p>¿Serás capaz de encontrar cartas parejas de los presidentes?</p>
              <Link to='MemoryGame' className=''>
                <button className="buttonFeatured"> JUGAR AHORA </button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
    )
}
export default ButtonGames
