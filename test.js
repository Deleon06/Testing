//switching the information inside the string for the input value of the destination input box
//$("#City").val().trim();

//switching the information inside the string for the type of data (flight, car, hotel etc.)
//$("#flight").val().trim(); 
// var ENDPOINT = "airlineDatabase";  

var apiKey = "a84817-49ca4e-309a1b-b14dd5-2138df";

// ENDPOINT = airlineDatabase;

// var airlineDatabase =
// var airplaneDatabase =
// var airportDatabase =

// + ENDPOINT

// var location = "amsterdam";

var queryURL = "http://aviation-edge.com/api/public/autocomplete?key=" + apiKey + "&query=amsterdam";

	$.ajax({
		url: queryURL,
	    method: "GET"
	    }).done(function(response) {
	    console.log(response);
	      // console.log(response.Runtime);
	          //write a code that only return genre
	    });
	



