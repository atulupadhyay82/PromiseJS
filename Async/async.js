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
  const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };