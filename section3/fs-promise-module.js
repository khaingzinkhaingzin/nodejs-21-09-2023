const fs = require("node:fs/promises");

console.log("First");

// fs.readFile("./file.txt", "utf-8")
// .then(data => console.log(data))
// .catch(error => console.log(error));

// ALSO PROMISE // EASIER TO READ 
async function readFile() {
    try {
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
readFile();

console.log("Second");