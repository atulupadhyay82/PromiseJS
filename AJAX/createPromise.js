/**
 * A callback used to initialize the promise. This callback is passed two arguments: 
 * a resolve callback used to resolve the promise with a value or the result of another promise, 
 * and a reject callback used to reject the promise with a provided reason or error.
 * 
 * 
//  */
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

//promisfying setTimeout
const wait= function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve,seconds*1000);
    })
};

wait(1)
    .then( () =>{
        console.log("I wait for 1 seconds");
        return wait(2);
    })
    .then( () =>{
        console.log("I wait for 2 seconds");
        return wait(3);
    })
    .then( () =>{
        console.log("I wait for 3 seconds");
        return wait(4);
    })
    .then( () =>{ console.log("I wait for 4 seconds"); });

    /**
     * Easy way to create the promises. so basically this is a static method  on the promise constructor
     */
    Promise.resolve("ABC").then(x => console.log(x));
    Promise.reject(new Error("Problem")).catch(x => console.error(x));