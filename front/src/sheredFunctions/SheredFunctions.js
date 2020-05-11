//to put in a random order the array
export const Shuffle=(a)=>{
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

export const filterData=(data)=>{
    let dataFiltered=data.filter((country)=>{

      return country.capital !== "";
    })
    console.log(dataFiltered)
    return dataFiltered
  }

export const SaveScore=(score, user_id, name_game)=>{
    /* let score = this.state.score;
      let user_id = user_id */
      //console.log(this.context.state.user.results[0].user_id);
        fetch(`http://localhost:5000/game-score/${name_game}`, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ score , user_id })

    }).then(res => {
        if(res.status === 200 ){
            console.log('saved score')

        }else{
            console.log('no hace naa')
          }
        })
}
