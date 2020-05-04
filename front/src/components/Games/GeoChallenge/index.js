import React, { Component} from 'react';
import countriesDB from 'country-data'; // This library is cool but doesn't have coordinates
import coordinates from './coordinates'; // array of coordintaes by country
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './geoChallenge.css'
import { Link } from 'react-router-dom';
import Flag from 'lyef-flags';
import title from './geoChallengeTitle.png';
import InstructionGames from '../../SharedButtons/InstructionGames';
import CloseButton from '../../SharedButtons/CloseButton'

const Leaflet = window.L;
console.log(Leaflet)



// This fn removes the countries on countriesDB.countries.all that are not
// found on the coordinates array so the map doesn't crash trying to render them.
// It also removes the countries without a flag
const sanitizeCountries = () => {
  return countriesDB.countries.all.filter(country =>
    coordinates.filter(item => item.country === country.alpha2).length > 0);
}
const countries = sanitizeCountries();

class GeoChallenge extends Component {

  state = {
    options: [],
    bounds: [[90, -180], [-90, 180]],
    center: [0, 0],
    correctAnswers: 0,
    totalAnswers: 0,
    finishGame: false,
    sum_points: 50,
    contentMap: "notHidden",
    contentEnd: "hidden"
  }
  // method to randomly shuffle
  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  // Will return the coordinates of a given (isoCode) country
  // Response format: [lat, long]
  getCoordinates(isoCode) {
    const countryCoordinates = coordinates.filter(item => item.country === isoCode)[0];
    // When using filter we get an array, use [0] to grab the first (and only, hopefully) result

    // We still have 249 countries in this list but 289 on the full countriesDB :(
    if (countryCoordinates === undefined) {
      // Not the best fallback ever
      // A better option could be to sanitize the array of countries before
      // using it.
      // After the sanitize function there are 5 ghosts countries :S
      return [0, 0];
    }

    return [countryCoordinates.latitude, countryCoordinates.longitude];
  }

  // Set the four options randomly.
  // Take the first one as the one to guess.
  getFourRandomCountries() {
    this.shuffle(countries);
    const options = countries.slice(0, 4).map(country => {
      return this.getCountryWithCoordinates(country)
    });

    this.setState({
      options
    }, this.defineMapBounds);
  }

  // Will return randomly a country object
  getCountryWithCoordinates(country) {
    const countryCoordinates = this.getCoordinates(country.alpha2)

    // Add the key 'coordinates' to the object country
    return { ...country, coordinates: countryCoordinates }
  }

  // Will return randomly a country object
  getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length),
      randomCountry = countries[randomIndex],
      randomCountryCoordinates = this.getCoordinates(randomCountry.alpha2)

    // Add the key 'coordinates' to the object country
    return { ...randomCountry, coordinates: randomCountryCoordinates }
  }

  // Will set the center and the bounds of the map so we can use
  // auto zoom and always show a good portion of the map with the
  // four pins visible.
  // The coordinates have this format: [lat, long]
  // where lat is y-axis (from -90 to 90) and long is x-axis (from -180 to 180)
  defineMapBounds() {

    const coordinates = this.state.options.map(i => i.coordinates);

    let maxX = 0,
      minX = 0,
      maxY = 0,
      minY = 0;

    coordinates.forEach(coord => {
      if (coord[0] > maxY) {
        maxY = coord[0];
      }

      if (coord[0] < minY) {
        minY = coord[0];
      }

      if (coord[1] > maxX) {
        maxX = coord[1];
      }

      if (coord[1] < minX) {
        minX = coord[1];
      }
    })

    // Bounds are defined by two coordinates:
    // position1: the most W and N
    // position2: the most E and S
    this.setState({
      bounds: [[maxY, minX], [minY, maxX]],
      center: [(maxY - minY) / 2, (maxX - minX) / 2]
    })
  }

  // Checks if the answer is correct and fire a new round of 4 random
  // countries after 1,5s
  // Finish game
  // Logic of the points counter, as more continued correct options add more puntuation, incorrect option finish this, lose 25 points and start again

  onPinClicked = (name, totalAnswers) => {
    if (name === this.state.options[0].name && this.state.correctAnswers === 0) {
      this.setState({
        correctAnswers: this.state.correctAnswers + this.state.sum_points
      }, () => setTimeout(() => this.getFourRandomCountries(), 1500));
    } else if (name === this.state.options[0].name && this.state.correctAnswers !== 0) {
      this.setState({
        sum_points: this.state.sum_points + 50,
        correctAnswers: this.state.correctAnswers + this.state.sum_points
      }, () => setTimeout(() => this.getFourRandomCountries(), 1500));
    } else {
      this.setState({
        sum_points: 50,
        correctAnswers: this.state.correctAnswers - 25
      }, () => setTimeout(() => this.getFourRandomCountries(), 1500));
    }
    this.finishGame()
  }

  finishGame =()=>{
    if (this.state.totalAnswers < 20) {
      this.setState({
        totalAnswers: this.state.totalAnswers + 1
      })
    } else {
      this.setState({
        contentMap: "hidden",
        contentEnd: "notHidden"
      })
    }
  }

  componentDidMount() {
    this.getFourRandomCountries();
  }

  tryAgain = event => {
  window.location.reload();
}

  render() {
    const bounds = Leaflet.latLngBounds(this.state.bounds);
    return (
      <div className='containerGeo'>
        <InstructionGames  instructionText="Selecciona el pin correspondiente con la bandera que aparece, si encadenas aciertos, tus puntuaciones se van acumulando (50,100,150…) , si fallas restas 25 y empiezas desde 50 puntos otra vez." />
        <CloseButton />

        <div>
            <div className={`mapContent ${this.state.contentMap}`}>
              <div className="containerInstruction">
                {
                  this.state.options.length > 0
                    ? (
                      <div className='marginFlag'>
                        <div className="flagDisplay">
                          <Flag className="pinFlag" country={this.state.options[0].alpha2.toLowerCase()} size="small" />
                        </div>
                        <div className='containerGeoMobile'>
                          <img className="geoChallengeTitle" src={title} alt="map"/>
                        </div>
                      </div>
                    )
                    : null
                }
                <div className='titleInstructions'>
                  <div>
                    <hr/>
                    <h3>A QUE PAÍS LE PERTENECE ESTA BANDERA</h3>
                    <hr/>
                  </div>

                  <div className="counterText">
                    <div className='counterBorder'><p>Intentos:<br/> {this.state.totalAnswers}/ 20</p></div>
                    <div className='counterBorder'><p>Puntuación: <br/>{this.state.correctAnswers}</p></div>
                      <button
                         type="button"
                         className="tryAgainButtonPlaying"
                         onClick = {this.tryAgain}>
                         Reiniciar
                      </button>
                  </div>

              </div>
              </div>
              <div className="leaflet-container">
                <LeafletMap
                  bounds={bounds}
                  center={this.state.center}
                  attributionControl={false}
                  zoomControl={false}
                  doubleClickZoom={true}
                  scrollWheelZoom={false}
                  dragging={false}
                  animate={false}
                  easeLinearity={0.35}
                >
                  <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />

                  {this.state.options.map(country => (
                    <Marker key={country.alpha2} onClick={() => this.onPinClicked(country.name)} position={country.coordinates}>
                      <Popup>

                        <Flag className="pinFlag" country={country.alpha2.toLowerCase()} size="small" />
                        <p>
                          This is {country.name}
                        </p>

                      </Popup>
                    </Marker>
                  ))
                  }
                </LeafletMap>
                <div className='containerGeoTitle'>
                  <img className="geoChallengeTitle" src={title} alt="map"/>
                </div>

            </div>
            </div>
              <div className={`${this.state.contentEnd}`}>
                <div className="counterTextFinal">
                <div className="resultGeoChallenge">
                <h5>PUNTUACIÓN FINAL</h5>
                <h3> {this.state.correctAnswers}</h3>
                <button
                   type="button"
                   className="tryAgainButton"
                   onClick = {this.tryAgain}>
                   Volver a Jugar
                </button>
                </div>
                </div>
              </div>


        </div>
      </div>
    )
  }
}

export default GeoChallenge;
