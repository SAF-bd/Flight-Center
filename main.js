
/*
 * Amadeus Travel Innovation Sandbox
 *
 * 
 */


var v1_2 = require("./routes/v1_2.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/v1.2/flights/inspiration-search", "GET", v1_2.getV1_2FlightsInspiration_search);
Sandbox.define("/v1.2/flights/extensive-search", "GET", v1_2.getV1_2FlightsExtensive_search);
Sandbox.define("/v1.2/flights/low-fare-search", "GET", v1_2.getV1_2FlightsLow_fare_search);
Sandbox.define("/v1.2/flights/affiliate-search", "GET", v1_2.getV1_2FlightsAffiliate_search);
Sandbox.define("/v1.2/location/{code}", "GET", v1_2.getV1_2Location);
Sandbox.define("/v1.2/airports/autocomplete", "GET", v1_2.getV1_2AirportsAutocomplete);
Sandbox.define("/v1.2/airports/nearest-relevant", "GET", v1_2.getV1_2AirportsNearest_relevant);
Sandbox.define("/v1.2/hotels/search-airport", "GET", v1_2.getV1_2HotelsSearch_airport);
Sandbox.define("/v1.2/hotels/search-circle", "GET", v1_2.getV1_2HotelsSearch_circle);
Sandbox.define("/v1.2/hotels/search-box", "GET", v1_2.getV1_2HotelsSearch_box);
Sandbox.define("/v1.2/hotels/{property_code}", "GET", v1_2.getV1_2Hotels);
Sandbox.define("/v1.2/cars/search-airport", "GET", v1_2.getV1_2CarsSearch_airport);
Sandbox.define("/v1.2/cars/search-circle", "GET", v1_2.getV1_2CarsSearch_circle);
Sandbox.define("/v1.2/rail-stations/autocomplete", "GET", v1_2.getV1_2Rail_stationsAutocomplete);
Sandbox.define("/v1.2/rail-station/{id}", "GET", v1_2.getV1_2Rail_station);
Sandbox.define("/v1.2/trains/extensive-search", "GET", v1_2.getV1_2TrainsExtensive_search);
Sandbox.define("/v1.2/trains/schedule-search", "GET", v1_2.getV1_2TrainsSchedule_search);
Sandbox.define("/v1.2/travel-record/{record_locator}", "GET", v1_2.getV1_2Travel_record);
Sandbox.define("/v1.2/travel-intelligence/top-destinations", "GET", v1_2.getV1_2Travel_intelligenceTop_destinations);
Sandbox.define("/v1.2/travel-intelligence/top-searches", "GET", v1_2.getV1_2Travel_intelligenceTop_searches);
Sandbox.define("/v1.2/travel-intelligence/flight-traffic", "GET", v1_2.getV1_2Travel_intelligenceFlight_traffic);
Sandbox.define("/v1.2/points-of-interest/yapq-search-text", "GET", v1_2.getV1_2Points_of_interestYapq_search_text);
Sandbox.define("/v1.2/points-of-interest/yapq-search-circle", "GET", v1_2.getV1_2Points_of_interestYapq_search_circle);

Sandbox.define('/','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})