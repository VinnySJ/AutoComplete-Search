const fs = require('fs')

const path_txt = "./src/db/add_here.txt";
const path = "./src/db/db.json";

const data = fs.readFileSync(path);
const txt_data = fs.readFileSync(path_txt).toString().split(/\r?\n/);
const jsonData = JSON.parse(data);

// Adds the lines from the txt to the json
txt_data.forEach((textValue) => jsonData.search.push({
    id: jsonData.search.length+1,
    text: textValue
}));

const jsonString = JSON.stringify(jsonData, null, '\t');

fs.writeFileSync(path, jsonString, 'utf-8', (err) => {
    if (err) throw err;
    console.log('Data added to file');
});

const update_data = fs.readFileSync(path);
const updated_jsonData = JSON.parse(update_data);