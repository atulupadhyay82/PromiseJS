'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError= function(msg){
  console.log(msg);
}

/**
 * Using AJAX CALL 1 -->XMLHttpRequest
 * @param {} country 
 */
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();
//     request.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);
//       const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//       countriesContainer.insertAdjacentHTML('beforeend', html);
//       countriesContainer.style.opacity = 1;
//     });
//   };


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

// /**
//  * Welcome to Callback Hell - When we have a lot of nested callbacks in order to execute asynchronous tasks in sequence.
//  * And in fact, this happens for all asynchronous tasks,  which are handled by callbacks.  And not just AJAX calls. 
//  * The problem with callback hell  is that it makes our code look very messy.  But even more important,  
//  * it makes our code harder to maintain,  and very difficult to understand, And fortunately for us, since ES6,  
//  * there is actually a way of escaping callback hell  by using something called promises.  
//  */ 
// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);
//     // Get neighbour country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('pakistan');

// /**
//  * let's replace the old XML HTTP request function  with the modern way of making AJAX calls which is Fetch API
//  * Defining the promises-- Fetch API call
//  * fetch function immediately returned a promise here.
//  * Promise is an object that is used basically as a  placeholder for the future result of  an asynchronous operation or
//  * a promise is a container/placeholder for a future value. 
//  */
// const getCountryData = function (country) {
//   const request=fetch(`https://restcountries.eu/rest/v2/name/${country}`);
//   console.log(request);
// };

// /**
//  * Consume promise- of course, at a certain point  the promise will then be settled and
//  *  either in a fulfilled  or in a rejected state, but for now let's assume success. 
//  *  we can use the then() method that is available on all promises.
//  *  Into the then() method, we need to pass a callback function 
//  *  that we want to be executed  as soon as the promise is actually fulfilled.
//  *  
//  */
// const getCountryData= function(country){
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(function(response){
//       console.log(response);
//   });
// };

// /**
//  * In response, body has the data but we can't look at it as it is in  readable stream.  
//  * To read the data, we need to use Json() on response object but in return that also return promise.
//  * So we have to again use then() on response.json() returned result.
//  *  
//  */
//  const getCountryData= function(country){
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function(response){
//         return response.json();
//     }).then(function (data){
//         console.log(data);
//     });
// };

// /**
//  * Above function optimized using arrow functions.
//  * With promieses, we get the rid of callback hell but not callbacks.
//  */
// const getCountryData = country => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(response => response.json())
//   .then(data => renderCountry(data[0]))
// };


// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('korea');


/**
 * Chaining of Promises * 
 * 
 * Here we first get data about the country we passed in the method.
 * From 1st AJAX call, we also retrieve the neighboring country.  And so again,  the second Ajax call depends on the data
 * from the first call.  And so they need to be done in sequence.
 * let's get the neighbor and we already know  that it is at data zero at borders. And if there is no neighbor,  
 * then return immediately. So even if we wanted the neighbor  of the neighbor,  like 10 countries,  
 * we could easily do this by chaining all these promises  one after another and all without the callback hell.  
 * So here, instead of the callback  hell we have what we call a flat chain of promises.  
 * And this one is again,  very easy to understand and to read.  
 */
// const getCountryByData= function(country){
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(response => response.json())
//   .then(data => {
//       renderCountry(data[0]);
//       const neighbour=data[0].borders[0];
//       if(!neighbour) return;
//       return  fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//   })
//   .then(response => response.json())
//   .then(data =>  renderCountry(data,'neighbour'));
  
// };

/**
 * A promise  in which an error happens is a rejected promise. 
 * 
 * Handling the rejected promises via error handling callback method-
 * a second callback function into the then method.  So the first callback function here is always gonna be called 
 * for the fulfilled promise i.e. or a successful one.  And a second callback  which will be called when the promise 
 * was rejected.  
 * And this callback function will be called with an argument  which is basically the error itself.  
 * 
 * Example- actually the only way  in which the fetch promise rejects  is when the user loses his internet connection.  
 */

// const getCountryByData= function(country){
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//   .then(
//     response => response.json(),
//     err => alert(err)
//     )
//   .then(data => {
//       renderCountry(data[0]);
//       const neighbour=data[0].borders[0];
//       if(!neighbour) return;
//       return  fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//   })
//   .then(
//     response => response.json(),
//     err => alert(err)
//   )
//   .then(data =>  renderCountry(data,'neighbour'));
  
// };

/**
 * Handling the rejected promises via catch block
 * that is a little bit annoying  and so in fact there is a better way of basically handling all these errors globally 
 * just in one central place.So instead of all of these callback functions here  let's just delete them.  
 * Instead we can handle all the errors  no matter where they appear in the chain right at the end of the chain by 
 * adding a catch method.
 * this catch method here  at the end of the chain will basically catch any errors  
 * that occur in any place in this whole promise chain  and no matter where that is. 
 * So errors basically propagate down the chain until they are caught, and only if they're not caught anywhere 
 *  then we get that Uncaught error  to the console.

 * @param {*} country 
 */
const getCountryByData= function(country){
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  .then(response => response.json())
  .then(data => {
      renderCountry(data[0]);
      const neighbour=data[0].borders[0];
      if(!neighbour) return;
      return  fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
  })
  .then(response => response.json())
  .then(data =>  renderCountry(data,'neighbour'))
  .catch(err => {
    renderError(`Something went wrong  ${err.message}`);
  })
  .finally (()=> {
    //Make spinning wheel or progress bar disappear from the UI 
    //And then the callback function that we defined here will always be called whatever happens with the promise. 
    // So no matter if the promise is fulfilled or rejected  this callback function that we define here  is gonna be called always
  })

  
};

getCountryByData('usa');
getCountryByData('germany');
getCountryByData('australia');



