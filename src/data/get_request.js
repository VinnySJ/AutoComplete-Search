

// Process get request from front-end, and fetch results from API
function getData(url, user_text){
    return fetch(url + user_text)
        .then((response) => {
            return response.json().then((data) => {
                return data;
            }).catch((err) => {
                console.log(err);
            }) 
        });
}

module.exports = {getData};
