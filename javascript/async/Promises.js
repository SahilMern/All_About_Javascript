// cd javascript/async/Promises.js
// function getData(userId, nextCallback) {
//     console.log(nextCallback,"nextCallback");
//     setTimeout(() => {
//       console.log(userId);
//       if (nextCallback) {
//         nextCallback();
//       }
//     }, 1000);
//   }
//   getData(1,()=> {
//     getData(2,() => {
//       getData(3)
//     })
//   });


  

const  callBackHell =(id, nextCallback) => {
    console.log(id, nextCallback);
    
}
callBackHell(1, () =>{

})