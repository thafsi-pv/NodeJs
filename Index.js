const { add, sub } = require("./Utils.js");
const path = require("path");
const fs = require("fs");
const { error } = require("console");

// console.log("🚀 ~ file: Index.js:2 ~ sub:", sub(10,2))
// console.log("🚀 ~ file: Index.js:2 ~ add:", add(1,2))

// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

//console.log(global)

console.log(path.join(__dirname, "api", "script.js"));

// fs.mkdir(path.join(__dirname, "/api"), {}, (error) => {
//   if (error) throw error;
// });
// fs.writeFile(
//   path.join(__dirname, "/api", "user.txt"),
//   "User Name:TFR",
//   (error) => {
//     if (error) throw error;
//   }
// );

fs.appendFile(
  path.join(__dirname, "api", "user.txt"),
  "\n user name:Thafsi",
  (error) => {
    if (error) {
      throw error;
    }
  }
);
