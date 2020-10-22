//get longitude and latitude
window.addEventListener("load", () => {
  let long;
  let lat;

  //if this exists in the browser
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
    });
  } else {
    window.alert("Error, please enable location services on your browser");
  }
});
