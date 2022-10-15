function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
  
    let orbitalPeriodResult = [];
  
    arr.forEach(function(dataPoint) {
      let newDataPoint = {};
      newDataPoint.name = dataPoint.name;
      let twoTimeP = Math.PI * 2;
      let aDividedByGM = ((earthRadius + dataPoint.avgAlt) ** 3) / GM;
      let t = twoTimeP * Math.sqrt(aDividedByGM);
      let orbitalPeriod = Math.round(t);
      newDataPoint.orbitalPeriod = orbitalPeriod;
      orbitalPeriodResult.push(newDataPoint);
    })
  
    return orbitalPeriodResult;
  }
  
  console.log(orbitalPeriod(
    [
      {name: "iss", avgAlt: 413.6}, 
      {name: "hubble", avgAlt: 556.7}, 
      {name: "moon", avgAlt: 378632.553}]
    ));