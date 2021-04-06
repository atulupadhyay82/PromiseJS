/**
 * Async/Await- This is more elegant than then() callback without messing up the callback hell
 */
 const whereAmI =async function(country) {
     try{
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        const data = await res.json();
        return data[0];
     }catch(err){
         console.error(err);
         throw err;
     }
   
  }
  console.log("1. Will get the neighbour")
  const data= whereAmI('Portugal');
  console.log(data)
  console.log("3. Finished getting the neighbour");


  /**
   * Resolving above promise using then() for async functions
   */

   console.log("1. Will get the neighbour")
   whereAmI('Portugal')
        .then(data => console.log(data))
        .catch(err => console.error(`2. {err.message}`))
        .finally(() => console.log("3. Finished getting the neighbour"));
  

  /**
   * Resolving above promise with another async function without then() using IIFE function
   */

  (async function(){
      try{
          const data= await whereAmI('Portugal');
          console.log(data);
      }catch(err){
        console.error(`2. {err.message}`);
      }
      console.log("3. Finished getting the neighbour");
  })();
 

  /**
   * Running promises in the parallel which are not dependent on one another to save the loading time of the website if
   * we execute them sequentially.
   * Function for getting the captial of 3 countrires
   * Use Promise.All-- Creates a Promise that is resolved 
   * with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
   */
  const get3Countries = async function(c1, c2, c3){

    try{
        // const [data1]= getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2]= getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3]= getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

        // console.log([data1.capital, data2.capital,data3.capital]);

        const data = await Promise.all([
            getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)
        ]);

        console.log(data.map(d => d[0].capital);)

    }catch (err){
        console.error(err);
    }
  }
get3Countries('India',"canada","usa");
