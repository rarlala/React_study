const myPromise = new Promise((resolve, reject) =>{
  setTimeout(()=> {
    // resolve('result');
    reject(new Error());
  },1000)
})

myPromise.then(result => {
  console.log(result);  
}).catch(e => {
  console.error(e);  
})

