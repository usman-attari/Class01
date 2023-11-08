function store_car_info(manufacturer: string, model: string, ...kwargs: [string, any][]): object {
    let carInfo: {[key: string]: any} = {
      Manufacturer: manufacturer,
      Model: model
    };
    for (let I = 0; I < kwargs.length; I++) {
      let [key, value] = kwargs[I];
      carInfo[key] = value;
    }
    return carInfo;
  }
  let carInfo = store_car_info('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);
  console.log(carInfo);
  