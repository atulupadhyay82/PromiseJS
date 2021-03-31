'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

/**
 * Above function optimized using arrow functions 
 */
const getCountryData = country => {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
  .then(response => response.json())
  .then(data => console.log(data))
};



  getCountryData('portugal');
  getCountryData('usa');
  getCountryData('korea');

