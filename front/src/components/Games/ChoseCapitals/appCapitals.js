import React, { Component,} from 'react';
import GameCapitals from './gameCapitals'
import {Shuffle, filterData} from '../../../sheredFunctions/SheredFunctions'
import axios from 'axios';


class AppCapitals extends Component {
  state={
    data:[]
  }
  async componentDidMount(){
    const {data} = await axios(`https://restcountries.eu/rest/v2/all`)
    //change the order of the array of cuntries before saveing in the state
    filterData(data)
    Shuffle(data)
        this.setState({
          data
         })
  }

  fiterContinent=(e)=>{
    if(e.target.value ==='all'){
      axios.get(`https://restcountries.eu/rest/v2/all`).then(({data}) =>
        this.setState({
          data:filterData(Shuffle(data))
        })
      )
    }else{
      axios.get(`https://restcountries.eu/rest/v2/region/${e.target.value}`).then(({data})=>
        this.setState({
          data:filterData(Shuffle(data)) 
        })
      )
    }
  }

  back=()=>{
    //function to click the buttons to go tu menu or the starting game page
    window.location.reload()
  }

  render(){
    return (
      <div>
        <GameCapitals countries={this.state.data} fiterContinent={this.fiterContinent} back={this.back}/>
      </div>
    );
  }
}

export default AppCapitals;

