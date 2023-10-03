function greet(name) {
    console.log(`Hello ${name}`);
}

function higherOrderFunction(callback) {
    const name = "Ktz";
    callback(name);
}

higherOrderFunction(greet);