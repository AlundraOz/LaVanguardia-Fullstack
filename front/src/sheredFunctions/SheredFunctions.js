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