const http = require("node:http");

const server = http.createServer((req, res) => {
    
    const superHero = {
        firstName: "Khaing",
        lastName: "Thazin",
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
    console.log("Server's running on port 3000.");
});