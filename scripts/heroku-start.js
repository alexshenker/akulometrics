const express = require("express");
const path = require("path");

//https://medium.com/captainme-ai/deploying-migrating-static-create-react-app-project-to-heroku-22-stack-b19a4255ea7c

//For the sake of the deploying to Heroku, we use this solution

const app = express();
const port = process.env.PORT || 3000;

// Check if request is from HTTP and if so, redirect to HTTPS
app.enable("trust proxy");

app.use((req, res, next) => {
  req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.use(express.json());

// Your static site folder name
app.use(express.static(path.join(__dirname, "..", "build")));

// Root Redirects to the build in assets folder
app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "..", "build"));
});

// Any Page Redirects to the build in assets folder index.html that will load the react app
app.get("*", function (_, res) {
  res.sendFile(path.join(__dirname, "..", "build/index.html"));
});

app.listen(port, () => {
  console.log("Running on port: ", port);
});
