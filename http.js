const http = require("http");
const fs = require("fs");

// fs.writeFile("file1.txt", "This is plain text", (err) => {
//   if (err) throw err;
// });

// fs.writeFile("sample.html","<h1>This is sample html page</h1>",(err)=>{
//     if(err) throw err
// })

const UserList = [
  { name: "abc", email: "abc@gmail.com" },
  { name: "xyz", email: "xyz@hotmail.com" },
  { name: "pqr", email: "pqr@gmail.com" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    // Handle CORS preflight request
    //res.setHeader("Access-Control-Allow-Origin", "*");
    //res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(204); // No content
    res.end();
  } else {
    switch (req.url) {
      case "/":
        fs.readFile("sample.html", "utf8", (err, data) => {
          if (err) throw console.log(err);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        });
        break;

      case "/userlist":
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(UserList));
        break;

      case "/adduser":
        console.log("iside adduse");
        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", () => {
            const { name, email } = JSON.parse(body);
            const newUser = { name, email };
            UserList.push(newUser);
            console.log("New user added:", newUser);
            res.statusCode = 201;
            res.end();
          });
        } else {
          // Handle other routes or requests
          res.statusCode = 404;
          res.end();
        }
        break;

      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("This page not found!");
        break;
    }
  }
});

server.listen("3005", () => {
  console.log("server started..");
});
