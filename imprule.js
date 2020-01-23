
function alwaysThrows() {
    throw new Error('OH NOES');
  }
  
  function onReject(error) {
    console.log(error.message);
  }
function iterate(a){
    console.log(a);
    return a+1;
    }
    Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject)