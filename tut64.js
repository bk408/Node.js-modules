const fs = require("fs");
let text = fs.readFileSync("dele.text", "utf-8");
text = text.replace("browserno", "Document");


console.log("The content of file is");
console.log(text);


console.log("Creating a new file ....");
fs.writeFileSync("document.txt", text);