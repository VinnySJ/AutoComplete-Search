
function getDbData(url){
    return fetch(url)
        .then((response) => { 
            return response.json().then((data) => {
                return data.data.search;
            }).catch((err) => {
                console.log(err);
            }) 
        });
}

/* Does a query to graphQL, receive the database results, and finally do the filter of
the values, based on user input */

const filterSearch = async(user_text) => {
    const url = "http://localhost:8080/graphql/?query=query{search{id%20text}}";
    user_text = user_text.toLowerCase();
    const query_values = await getDbData(url);
    const filteredTexts = [];
    const textsSize = query_values.length;
    for(let i = 0; i < textsSize && filteredTexts.length < 20; ++i){
        if(query_values[i].text.toLowerCase().startsWith(user_text)) filteredTexts.push(query_values[i]);
    }
    return filteredTexts;
}

module.exports = {filterSearch};