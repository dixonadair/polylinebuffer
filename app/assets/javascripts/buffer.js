$(function() {
	// console.log("hello");
	var directionsService = new google.maps.DirectionsService();
	var getDirections = function(requestParams) {
		return new Promise(function(resolve, reject) {
			directionsService.route(requestParams, function(response, status) {
				resolve(response);
				// console.log("getDirections status", status);
			});
		});
	};

	var makePolylineBuffer = function(polyline, thickness) {
		// ===== YOUR WORK HERE =====
	};

	var origin = "55 Brighton Ave San Francisco, CA";
	var destination = "633 Folsom St San Francisco, CA";
	var directDirRequest = {
	    origin: origin,
	    destination: destination,
	    travelMode: google.maps.TravelMode.DRIVING
    };
    var directDirectionsRequest = getDirections(directDirRequest);
    directDirectionsRequest.then(function(results) {
      	var gmapsRoute = results.routes[0].overview_path;
      	var len = results.routes[0].overview_path.length;
      	console.log(gmapsRoute);

      	var bufferPolygon = makePolylineBuffer(gmapsRoute, 1); // I will save the buffer polygon returned here to a variable and use it later in my app

      	// .........
    });
    // .........
});