function all(a,b) {
    var prom= new Promise(function (fulfill, reject) {
      var counter = 0;
      var temp = [];
  
      a.then(function (val) {
        temp[0] = val;
        counter++;
  
        if (counter >= 2) {
          fulfill(temp);
        }
      });
  
      b.then(function (val) {
        temp[1] = val;
        counter++;
  
        if (counter >= 2) {
          fulfill(temp);
        }
      });
    });
    return prom;
  }
  
  all(getPromise1(), getPromise2())
    .then(console.log);