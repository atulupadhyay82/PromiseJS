
const getJSON = function(url,errorMessage = 'Something went wrong'){
    return fetch(url)
   .then(response => {
    if(!response.ok){
        throw new Error(`${errorMessage} ${response.status}`);
    }
    return response.json();
    });
  }
  