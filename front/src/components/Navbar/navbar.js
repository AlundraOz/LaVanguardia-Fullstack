import React , { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
  // componentDidMount() {
  //   window.addEventListener("scroll", this.resizeHeaderOnScroll);
  // }
  // resizeHeaderOnScroll() {
  //   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  //     shrinkOn = 100,
  //     headerEl = document.getElementById("header-profile__wrapper"),
  //     logoEl = document.getElementsByClassName("header-profile__logo"),
  //     //headerMenu = document.getElementsByClassName("header-menu"),
  //     rootid = document.getElementById("root");
  //     if (distanceY > shrinkOn) {
  //     headerEl.classList.add("smaller");
  //     logoEl[0].classList.add("smaller");
  //     /*
  //     if (headerMenu.length >= 1){
  //       headerMenu[0].classList.add("marginfix");
  //     }
  //     */
  //   } else {
  //     logoEl[0].classList.remove("smaller");
  //     /*
  //     if (headerMenu.length >= 1){
  //       headerMenu[0].classList.remove("marginfix");
  //     }
  //     */
  //     rootid.classList.remove("marginfix");
  //   }
  // }
  render() {
    return (
    <div id="header-profile">
      <div id="header-profile__wrapper">
          <div className="navbarRow">
                      <a className="header-profile__logo" href={process.env.NODE_ENV === 'production' ? "https://zen-shaw-4b92a9.netlify.com/" : "//localhost:3000/"}>
                  <figure className="header-profile__figure" alt="La Vanguardia">
                      <img src="https://rsc.lavanguardia.com/img/logo-image-v1000486.svg" className="img-responsive" alt="La Vanguardia" rel="logo"></img>
                  </figure>
                  </a>
          </div>
      </div>
    </div>
)
}
}
export default Navbar