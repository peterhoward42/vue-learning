// Provide latitude / longitude information about the given
// postcode string.

import axios from "axios"

export function getLatLong (postCode) {
    var latLong = {}
    axios.get("https:/postcodes.io/postcodes/" + postCode)
        .then(function (response) {
            console.log("XXXX sending back good response");
            latLong.notRecognized = false;
            latLong.lat = res.latitude;
            latLong.long = res.longitude;
        })
        .catch(function (error) {
            console.log("XXXX sending back bad response")
            latLong.notRecognized = true;
            latLong.lat = 0;
            latLong.long = 0;
        });
    console.log("XXXXX final return is: " + latLong)
    return latLong;
}