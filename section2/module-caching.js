const superHero = require("./super-hero");
console.log(superHero.getName());

superHero.setName("Superman");
console.log(superHero.getName());

const newSuperHero = require("./super-hero"); // Same module loaded in line 1 and line 7. Node will use module cache  so will not create new obj
console.log(newSuperHero.getName());
newSuperHero.setName("Batman");

console.log(superHero.getName());