const fs = require('fs')
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { filterSearch } = require('../data/filter_search.js');


const app = express();


const schema = buildSchema(`
    type Search {
        id: Int!
        text: String!
    }

    type Query {
        search: [Search]
    }
`);

// Using a static JSON due to lack of time
const rootValue = JSON.parse(fs.readFileSync('./src/db/db.json', 'utf8'));

// Requirement for requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
});


// One could retrieve the filtered data by iterating through the json, but let's use the fact that it's needed to send a request...
app.get('/graphql/user_text', (req, res) => {
    const user_text = req.query.user_text;
    filterSearch(user_text).then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
});


app.use(graphqlHTTP({
    schema,
    rootValue,
    // graphiql: true
}));


app.listen(8080, () => console.log("Running a GraphQL API server at localhost:8080/graphql"));