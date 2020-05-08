import React, { Component } from 'react';
import MyProvider from './context/MyProvider';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer'
import AppCapitals from './components/Games/ChoseCapitals/appCapitals';
import ButtonUserLogged from './components/ButtonUserLogged/ButtonUserLogged'
import UserProfile from './components/UserProfile/userprofile'
import GeoChallenge from './components/Games/GeoChallenge';
import { Switch, Route } from 'react-router-dom';
import ButtonGames from './components/HomePage/buttonGames';
import BigBoard from './components/Games/ClickKill/BigBoard';
import NonogramApp from './components/Games/Nonogram/NonogramApp.js';
import Iframe from './components/Iframe/iframe';
import IframeCarousel from './components/LavanguardiaPage/iframeCarousel';
import LavanguardiaPage from './components/LavanguardiaPage/LavanguardiaPage';
import IndexSnake from './components/Games/Snake/indexSnake';
import OneToFifty from './components/Games/OneToFifty/OneToFifty';
import MemoryGame from './components/Games/MemoryGame/MemoryGame';
<<<<<<< HEAD
import Access from './components/Access/Access';
=======
import SignUp from './components/User/SignUp';
import LogIn from './components/User/Login';

>>>>>>> a590da9f6e472f751cf8f7e0249fcc65214a8bc7

const UserExample = {
  name: "Pepito ScrumMaster",
  img: "https://avatars3.githubusercontent.com/u/59797566?s=460&v=4",
  username: "Pepito",
  age: '28',
  points: 20
};
class App extends Component {
  state = {
    user: {},
    timesCliked: false,
  }
  simulateUserLogged = () => {
    this.setState({
      user: UserExample,
      timesCliked: true,
    })
  }
  userOff = () => {
    this.setState({
      user: {},
      timesCliked: false,
    })
  }
    render(){
      console.log('comprobación rutas', process.env)
    return (
<<<<<<< HEAD
      <div className='App'>
        <Navbar />
        <Switch>
        <Route exact path ='/'>
        <LavanguardiaPage />
        </Route>
        <Route path='/cityplay'>
        <AppCapitals/>
        </Route>
        <Route path='/geochallenge'>
        <GeoChallenge />
        </Route>
        <Route path='/tacleclick'>
        <BigBoard/>
        </Route>
        <Route path='/nonogram'>
        <NonogramApp/>
        </Route>
        <Route path='/iframe'>
        <Iframe/>
        </Route>
        <Route path='/carousel'>
        <IframeCarousel/>
        </Route>
        <Route path='/games-section'>
        <ButtonGames/>
        </Route>
        <Route path='/snake'>
        <IndexSnake/>
        </Route>
        <Route path='/OneToFifty'>
          <OneToFifty />
        </Route>
        <Route path='/MemoryGame'>
          <MemoryGame/>
        </Route>
        <Route path ='/Access'>
          <Access/>
        </Route>
        </Switch>
        <Footer />
      </div>
=======
      <MyProvider>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path ='/'>
              <LavanguardiaPage />
            </Route>
            <Route path='/cityplay'>
              <AppCapitals/>
            </Route>
            <Route path='/geochallenge'>
              <GeoChallenge />
            </Route>
            <Route path='/tacleclick'>
              <BigBoard/>
            </Route>
            <Route path='/nonogram'>
              <NonogramApp/>
            </Route>
            <Route path='/iframe'>
              <Iframe/>
            </Route>
            <Route path='/carousel'>
              <IframeCarousel/>
            </Route>
            <Route path='/games-section'>
              <ButtonGames/>
            </Route>
            <Route path='/snake'>
              <IndexSnake/>
            </Route>
            <Route path='/OneToFifty'>
              <OneToFifty />
            </Route>
            <Route path='/MemoryGame'>
              <MemoryGame/>
            </Route>
            <Route path='/sign-up'>
              <SignUp/>
            </Route>
            <Route path='/log-in'>
              <LogIn/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </MyProvider>
>>>>>>> a590da9f6e472f751cf8f7e0249fcc65214a8bc7
    );
  }
}
export default App
