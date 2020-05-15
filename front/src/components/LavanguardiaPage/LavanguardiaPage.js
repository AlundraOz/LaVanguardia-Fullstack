import React from 'react';
import './LavanguardiaPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import firstrow from './images/firstrow.png';
import firstrowseccol from './images/firstrowseccol.png';
import firstrowtercol from './images/firstrowtercol.png';
import secrowfircol from './images/secrowfircol.png';
import secrowfircolsec from './images/secrowfircolsec.png';
import secrowtercol from './images/secrowtercol.png';
import secrowseccolsec from './images/secrowseccolsec.png';
import terrowfircol from './images/terrowfircol.png';
import terrowseccol from './images/terrowtercol.png';
import terrowtercol from './images/terrowtercol.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const items = ["tacleclick", "cityplay", "nonogram","snake"]

const displayRandomItem = () => {
  const randomItem = items[Math.floor(Math.random()*items.length)]
  return randomItem
}

// process.env.NODE_ENV === 'production' ? "https://zen-shaw-4b92a9.netlify.com/games-section" : "//localhost:3000/games-section"

function LavanguardiaPage() {
    return(
        <div>
          <div>
          <Navbar className="header-menu" expand="lg">
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav.Link className="nav-list-item" href="/">
                      <Link to="/games-section">
                        Juegos
                      </Link>
                    </Nav.Link>
                    <Nav.Link className="nav-list-item" href="">Internacional</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#home">Política</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#link">Opinión</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#home">Deportes</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#link">Economía</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#home">Local</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#link">Gente</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#home">Cultura</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#link">Sucesos</Nav.Link>
                    <Nav.Link className="nav-list-item" href="#link">Temas</Nav.Link>
                </Navbar.Collapse>
              </Navbar>
            </div>

            <div>
                <Container className="main">
                <Row>
                    <Col md="6">
                        <img className="main-img" src={firstrow}/>
                    </Col>
                    <Col md="3">
                         <img className="main-img"src={firstrowseccol}/>
                    </Col>
                    <Col md="3">
                        <img className="main-img"src={firstrowtercol}/>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <img className="main-img"src={secrowfircol}/>
                        <img className="main-img"src={secrowfircolsec}/>
                    </Col>
                    <Col md="4">
                        <img className="main-img"src={secrowtercol}/>
                        <img className="main-img"src={secrowseccolsec}/>
                    </Col>
                    <Col md="4" >
                      <iframe src={process.env.NODE_ENV === 'production' ? "https://zen-shaw-4b92a9.netlify.com/carousel" : "//localhost:3000/carousel" }
                          title="carousel"
                          width="330px"
                          height="260px"
                          id="test"
                          className="myClassname"
                          display="initial"
                          position="relative"
                          />
                      <iframe src={process.env.NODE_ENV === 'production' ? "https://zen-shaw-4b92a9.netlify.com/"+ displayRandomItem() : "//localhost:3000/"+ displayRandomItem()}
                          title="carousel"
                          width="330px"
                          height="260px"
                          id="test"
                          className="myClassname"
                          display="initial"
                          position="relative"
                          />
                        <Link to='games-section' >
                            <button className='center-button'> MÁS JUEGOS </button>
                        </Link>

                    </Col>
                </Row>
                <Row>
                     <Col md="4">
                        <img className="main-img"src={terrowfircol}/>
                    </Col>
                    <Col md="4">
                        <img className="main-img"src={terrowseccol}/>
                    </Col>
                    <Col md="4">
                        <img className="main-img"src={terrowtercol}/>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default LavanguardiaPage
