function grabValues(obj){
    let values = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            values.push(obj[key]);
        }
    }
    return values;
}

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020
  };
  
  const values = grabValues(car);
  console.log(values); // ["Toyota", "Corolla", 2020]