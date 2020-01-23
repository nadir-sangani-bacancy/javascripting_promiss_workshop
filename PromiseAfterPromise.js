


var Promise = first().then(val=>{
    return second(val);
});

Promise.then(console.log);