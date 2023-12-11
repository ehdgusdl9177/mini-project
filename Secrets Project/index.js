import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let userAuthorised = false;

// function passwordCheck(req, res, next) {
//   const password = req.body.password;
//   if (password === "ILoveProgramming") {
//     userAuthorised = true;
//   }
//   next();
// }

// app.use(passwordCheck);

// app.post("/check", (req, res) => {
//   if (userAuthorised) {
//     res.sendFile(__dirname + "/public/secret.html");
//   } else {
//     res.sendFile(__dirname + "/public/index.html");
//   }
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  const password = req.body.password;
  if (password === "ILoveProgramming") {
    userAuthorised = true;
  }
  if (userAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

let port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
