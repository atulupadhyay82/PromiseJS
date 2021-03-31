//old school xmlhttprequest.Used public API's-https://github.com/public-apis/public-apis and rest countries 
const request= new XMLHttpRequest();
//open a request
request.open('GET','https://restcountries.eu/rest/v2/name/portugal');
 
/**
 * Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD
 * AJAX call that we just send off here, is being done in the background,
 * while the rest of the code keeps running. And so this is the asynchronous,non-blocking behavior.
 */
 request.send();
 

/**
 * Now, in order to get the result, we couldn't simply do maybe something like this.
 * data= request.send(); 
 * Reason being the result is simply not there yet, right. So this AJAX call that we just send off here,
 * is being done in the background.
 */
 
/**
 * And instead, what we need to do is to register a callback on the request object for the load event.
 * And so that request then fetches the data in the background. And then once that is done, 
 * it will emit the load event.And so using this event listener, we are waiting for that event.
 * And so as soon as the data arrives, this callback function here will be called.
 */
 request.addEventListener('load',function(){
    console.log(request.responseText);
 
});
