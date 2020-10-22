//get longitude and latitude
window.addEventListener("load", () => {
  let long;
  let lat;

  //if this exists in the browser
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `http://api.weatherapi.com/v1/forecast.json?key=${config.apiKey}&q=${lat},${long}&days=1`;
      fetch(api)
        .then((response) => {
          return response;
        })
        .then((data) => console.log(data));
    });
  } else {
    window.alert("Error, please enable location services on your browser");
  }
});
