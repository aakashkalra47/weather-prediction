// componentDidMount() {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       console.log("Latitude is :", position.coords.latitude);
//       console.log("Longitude is :", position.coords.longitude);
//       Geocode.setApiKey(API);
//     Geocode.setLanguage("en");
//     Geocode.setRegion("in");
//     Geocode.enableDebug();
//     Geocode.fromLatLng(position.coords.latitude,position.coords.longitude).then(
//       (response) => {
//         const address = response.results[0].formatted_address;
//         console.log(address);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//     });
    
//   }
