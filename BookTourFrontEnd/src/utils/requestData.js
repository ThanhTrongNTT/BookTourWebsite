import getQueryVariable from "./getQueryVariable";

function configTourRequest(payload) {
  const tour = {
    tourDetail: {
      beginningLocation: {
        locationName: payload.beginningLocation,
        locationType: "BEGINNING",
      },
      destinationLocation: {
        locationName: payload.destinationLocation,
        locationType: "DESTINATION",
      },
      // startDay: format(value.startDay, "dd/MM/yyyy"),
    },
    // type: "TOUR_BASIC",
  };

  return tour;
}
function configLocationToParam() {
  const location = {
    beginningLocation: getQueryVariable("beginningLocation"),
    destinationLocation: getQueryVariable("destinationLocation"),
    startDay: getQueryVariable("startDay"),
  };
  return location;
}

export { configTourRequest, configLocationToParam };
