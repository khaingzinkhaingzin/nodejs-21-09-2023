const buffer = new Buffer.from("ABCDEFG");

buffer.write("Aello KTZ"); // buffer has a memory limitation as the first string took place
console.log(buffer); // Show ABC // 
console.log(buffer.toJSON());
console.log(buffer.toString());