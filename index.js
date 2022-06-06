// create a csv parser the outputs studetn reports into json
//[assignment words]build a tool that reads these .csv files, parses them,
//calculates the students’ final grades and generates the report as a structured JSON file
//that can easily be consumed by the front-end.

//combine data from mutiple csv files into a (front-end readable) JSON object


const csv = require('csv-parser');
const fs = require("fs");
const { consumers } = require('stream');
const results = [];
const obj = {students: []};

fs.createReadStream("students.csv")
.pipe(csv({})).on("data", (data) => results.push(data))


fs.createReadStream("marks.csv")
.pipe(csv({})).on("data", (data) => results.push(data))

fs.createReadStream("courses.csv")
.pipe(csv({})).on("data", (data) => results.push(data))


fs.createReadStream("tests.csv")
.pipe(csv({})).on("data", (data) => results.push(data))
.on("end", () => {
    obj.students.push(JSON.stringify(results));
    console.log(obj);
});

