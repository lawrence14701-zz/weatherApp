const express = require("express");
const app = express();
const axios = require("axios");
const { response } = require("express");
const API_KEY = require("./config").apiKey;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
