
const getJSON = function(url,errorMessage = 'Something went wrong'){
    return fetch(url)
   .then(response => {
    if(!response.ok){
        throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
    });
  }
  /**
   * Promise All --promise.all short circuits  when one promise rejects. 

   * Running promises in the parallel which are not dependent on one another to save the loading time of the website if
   * we execute them sequentially.
   * Function for getting the captial of 3 countrires
   * Use Promise.All-- Creates a Promise that is resolved 
   * with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
   */
//    const get3Countries = async function(c1, c2, c3){
 
//     try{
//         /**sequential ajax calls */
//         // const [data1]= getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
//         // const [data2]= getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
//         // const [data3]= getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);
 
//         //console.log([data1.capital, data2.capital,data3.capital]);
 
//         /**Parallel Ajax calls */
//         const data = await Promise.all([
//             getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
//             getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
//             getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
//         ]);
 
//         console.log(data.map(d => d[0].capital));

//     }catch (err){
//         console.error(err);
//     }
//   }
// get3Countries('italy',"egypt","india");


// /**
//  * Promise Race -Promise.race short circuits whenever one of the promises gets settled. 
//  * receives an array of promises and it also returns only one promise, not array of promise
//  */
// // (async function(){
// //     const race= await Promise.race([
// //         getJSON(`https://restcountries.eu/rest/v2/name/italy`),
// //         getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
// //         getJSON(`https://restcountries.eu/rest/v2/name/mexico`)
        
// //     ]);
// //    console.log(race);
// // })();

// /**
//  * Promise.race is actually very useful  to prevent against never ending promises  or also very long running promises.  
//  * For example, if your user  has a very bad internet connection,  then a fetch request in your application  might
//  * take way too long to actually be useful. And so we can create a special timeout promise,  which automatically rejects 
//   after a certain time has passed.  
//  /* In promise constructor executor function, we will not resolve but reject. And so here for the resolve function, 
//  * which is always the first one we can once again, use this throw away variable.
//  */
// const timeout= function(sec){
//     return new Promise(function(_,reject){
//         setTimeout(function(){
//             reject(new Error('Request took too long'))
//         },sec *1000);

//     });
// };

// (async function(){
//     try{
//         const race= await Promise.race([
//             getJSON(`https://restcountries.eu/rest/v2/name/italy`),
//             getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
//             getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
//             timeout(.2)
            
//         ])
//        console.log(race);
//     }catch(err){
//         console.error(err);
//     }
//  })();


 /**
  * Promise.all  will short circuit as soon as one promise rejects,  but Promise.allSettled, simply never short circuits
  * So it takes in an array of promises again,  and it will simply return an array  of all the settled promises.
  */
  (async function(){
    try{
        const race= await Promise.any([
            getJSON(`https://restcountries.eu/rest/v2/name/italy`),
            getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
            getJSON(`https://restcountries.eu/rest/v2/name/mexico`),
            getJSON(`https://restcountries.eu/rest/v2/name/invalid`),
            timeout(2)            
        ])
       console.log(race);
    }catch(err){
        console.error(err);
    }
 })();