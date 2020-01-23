function attachTitle(a){
    return 'DR. '+a;
}
var promise = new Promise(function (fulfill, reject) {
        fulfill('MANHATTAN');
    
  });
promise.then(attachTitle).then(console.log);