const fetch = require("node-fetch");
const request= fetch('https://restcountries.eu/rest/v2/name/portugal');
console.log(request);

 /**
   * Running promises in the parallel which are not dependent on one another to save the loading time of the website if
   * we execute them sequentially.
   * Function for getting the captial of 3 countrires
   */
  const get3Countries = async function(c1, c2, c3){
 
    try{
        /**sequential ajax calls */
        // const [data1]= getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2]= getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3]= getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);
 
        //console.log([data1.capital, data2.capital,data3.capital]);
 
        /**Parallel Ajax calls */
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
