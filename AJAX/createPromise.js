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
// const lotteryPromise= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         if(Math.random() >=0.5){
//         resolve('You Win');
//         }else{
//             reject( new Error('You lost your money'));
//         }
//     },2000);
// })

// lotteryPromise.then(res => console.log(res))
// .catch(err =>console.log(err));

// //promisfying setTimeout
// const wait= function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve,seconds*1000);
//     })
// };

// wait(1)
//     .then( () =>{
//         console.log("I wait for 1 seconds");
//         return wait(2);
//     })
//     .then( () =>{
//         console.log("I wait for 2 seconds");
//         return wait(3);
//     })
//     .then( () =>{
//         console.log("I wait for 3 seconds");
//         return wait(4);
//     })
//     .then( () =>{ console.log("I wait for 4 seconds"); });

//     /**
//      * Easy way to create the promises. so basically this is a static method  on the promise constructor
//      */
//     Promise.resolve("ABC").then(x => console.log(x));
//     Promise.reject(new Error("Problem")).catch(x => console.error(x));


/**
 * https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
 * https://expressjs.com/en/resources/middleware/cors.html
 * Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate 
 * any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources.
 * An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.
 * For security reasons, browsers restrict cross-origin HTTP requests initiated from script/For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the 
 * same origin the application was loaded from unless the response from other origins includes the right CORS headers.
 * 
 * Need to handle cors from the server side via adding following code - Adding that URL in origin
 * 
 * 
 * // CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  next();

  Access to fetch at 'http://localhost:8082/iphones' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
});
 */
// const getPhone= function() {
//     const iphoneUrl = "http://localhost:8082/iphones";
//     fetch(iphoneUrl, {
//         'method' :'GET'
//     })
//     .then(response => response.json())
//     .then(result =>  console.log(result.data))
//     .catch(error => console.log(error));

//     const watchURL = "http://localhost:8082/watches";
//     fetch(watchURL, {
//         'method' :'GET'
//     })
//     .then(response => response.json())
//     .then(result =>  console.log(result.data))
//     .catch(error => console.log(error));
//   }
  
//   getPhone();
//   console.log("first");

