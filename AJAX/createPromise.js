/**
 * A callback used to initialize the promise. This callback is passed two arguments: 
 * a resolve callback used to resolve the promise with a value or the result of another promise, 
 * and a reject callback used to reject the promise with a provided reason or error.
 */
// const lotteryPromise= new Promise(function(resolve,reject){
//     if(Math.random() >=0.5){
//         resolve('You Win');
//     }else{
//         reject('You lost your money');
//     }
   
// })


/**
 * To make above promise asynchronous, lets make it using timeout
 */
const lotteryPromise= new Promise(function(resolve,reject){
    setTimeout(function(){
        if(Math.random() >=0.5){
        resolve('You Win');
        }else{
            reject( new Error('You lost your money'));
        }
    },2000);
})

lotteryPromise.then(res => console.log(res))
.catch(err =>console.log(err));