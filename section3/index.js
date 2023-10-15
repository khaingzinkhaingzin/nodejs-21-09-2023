const fs = require("node:fs");

console.log("Run me first 1");

const fileContents = fs.readFileSync("./file.txt", "utf-8");

console.log(fileContents);

console.log("Run me first 2");

fs.readFile("./file1.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log("Run me first 3");

fs.writeFileSync("./greet.txt", "Hello World!");

fs.writeFile("./greet.txt", "Hello KTZ!", {flag: "a"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File Written");
    }
});