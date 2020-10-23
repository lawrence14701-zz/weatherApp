const express = require("express");
const app = express();
const axios = require("axios");
const API_KEY = require("./config").apiKey;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const params = {
  access_key: API_KEY,
  query: "New York",
};

app.get("/", function (req, res) {
  axios
    .get("http://api.weatherstack.com/current", { params })
    .then((response) => {
      const apiResponse = response.data;
      console.log(
        `Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`
      );
      res.render("index", {
        location: apiResponse.location.name,
        temperature: apiResponse.current.temperature,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.set("port", process.env.PORT || 5000);

// Start node server
app.listen(app.get("port"), function () {
  console.log("Node server is running on port " + app.get("port"));
});
