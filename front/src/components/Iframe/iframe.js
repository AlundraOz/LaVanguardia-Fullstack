
import React from 'react';
import CloseButton from '../SharedButtons/CloseButton';
import '../HomePage/buttonGames.css'
import './iframe.css';


const items = ["carousel", "tacleclick","nonogram", "cityplay","snake", "MemoryGame", "OneToFifty"]

const displayRandomItem = () => {
  const randomItem = items[Math.floor(Math.random()*items.length)]
  return randomItem
}

const Iframe = () => {
  return (
  <div className="allIframesContainer">
    <CloseButton />
    <div>
      <h3 className="titleIframeAll">Snake</h3>
      <iframe src={"//localhost:3000/snake"}
          width="330px"
          height="260px"
          id="test"
          className="myClassname"
          display="initial"
          position="relative"
          />
    </div>
    <div>
      <h3 className="titleIframeAll">Tacle Click</h3>
      <iframe src={"//localhost:3000/tacleclick"}
          width="330px"
          height="260px"
          id="test"
          className="myClassname"
          display="initial"
          position="relative"
          />
    </div>

    <div>
      <h3 className="titleIframeAll">Memory de Presidentes</h3>
      <iframe src={"//localhost:3000/MemoryGame"}
          width="330px"
          height="260px"
          id="test"
          className="myClassname"
          display="initial"
          position="relative"
          />
    </div>

    <div>
      <h3 className="titleIframeAll">Nonogram</h3>
      <iframe src={"//localhost:3000/nonogram"}
          width="330px"
          height="260px"
          id="test"
          className="myClassname"
          display="initial"
          position="relative"
          />
    </div>

    <div>
      <h3 className="titleIframeAll">City Play</h3>
      <iframe src={"//localhost:3000/cityplay"}
          width="330px"
          height="260px"
          id="test"
          className="myClassname"
          display="initial"
          position="relative"
          />
    </div>

    <div>
      <h3 className="titleIframeAll">1 to 50</h3>
      <iframe src={"//localhost:3000/OneToFifty"}
          width="330px"
          height="260px"
          id="test"
          className="myClassname"
          display="initial"
          position="relative"
          />
    </div>
  </div>
  )
}

export default Iframe
