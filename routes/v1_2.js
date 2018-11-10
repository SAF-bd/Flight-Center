

/*
 * GET /v1.2/flights/inspiration-search
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * origin(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart. See the location and airport interfaces for more information.
 * destination(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
 * departure_date(type: string) - query parameter - Range of dates between which the traveler could depart. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single date is specified, only that date will be searched. By default, the date range starts today and applies up to 361 in the future is applied. Past dates are generally not supported, future dates should be in the next 361 days, although results start to become sparse after about 6 months in the future, as airlines may still be defining their schedules. The default is to search all future dates available.
 * one-way(type: boolean) - query parameter - When set to true, the query will be for a single trip from the origin to the destination. When this parameter is not provided, or is set to false, the query is for a round trip from the origin to the destination and back again.
 * duration(type: string) - query parameter - The allowed duration or range of durations of the trip, in days. This parameter must not be set if the one-way parameter is set to true.
 * direct(type: boolean) - query parameter - Limit the search to results that do not require the passenger to change plane?
 * max_price(type: string) - query parameter - Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
 * aggregation_mode(type: string) - query parameter - Specifies the granularity of results to be found. DESTINATION is the default and finds one result per city. COUNTRY finds one result per country, DAY finds on result for every day in the date range, WEEK finds one result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.
 */
exports.getV1_2FlightsInspiration_search = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /v1.2/flights/extensive-search
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * origin(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart. See the location and airport interfaces for more information.
 * destination(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
 * departure_date(type: string) - query parameter - Range of dates between which the traveler could depart. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single date is specified, only that date will be searched. By default, the date range starts today and applies up to 361 in the future is applied. Past dates are generally not supported, future dates should be in the next 361 days, although results start to become sparse after about 6 months in the future, as airlines may still be defining their schedules. The default is to search all future dates available.
 * one-way(type: boolean) - query parameter - When set to true, the query will be for a single trip from the origin to the destination. When this parameter is not provided, or is set to false, the query is for a round trip from the origin to the destination and back again.
 * duration(type: string) - query parameter - The allowed duration or range of durations of the trip, in days. This parameter must not be set if the one-way parameter is set to true.
 * direct(type: boolean) - query parameter - Limit the search to results that do not require the passenger to change plane?
 * max_price(type: string) - query parameter - Maximum price of trips to find in the result set, in the currency specified for this origin and destination pair in the cache contents spreadsheet. So, for example, if the origin is NYC, and the max price is 400, this means 400 USD. If the origin is PAR, and the max price is 400, this means 400 EUR. By default, no limit is applied
 * aggregation_mode(type: string) - query parameter - Specifies the granularity of results to be found. DAY is the default when one-way is true finds a result for departure date in the date range. STAY is the default otherwise and finds all round trip permutations for this route withim the given date range. DESTINATION finds one result, only the cheapest price for this route over the provided date range. WEEK finds the cheapest result for every week in the date range. Note that specifying a small granularity but a large search scope may result in a huge output. For some very large outputs, the API may refuse to provide a result.
 */
exports.getV1_2FlightsExtensive_search = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	req.checkQuery('destination', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /v1.2/flights/low-fare-search
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * origin(type: string) - query parameter - City code from which the traveler will depart. See the location and airport interfaces for more information.
 * destination(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
 * departure_date(type: string) - query parameter - The date on which the traveler will depart from the origin to go to the destination. You can specify a date range of up to 2 days. For a larger date range, use the Extensive Search. Dates are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-dd date format and separated by --.
 * return_date(type: string) - query parameter - The date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, the search will find only one-way trips. If this, or the return_by parameter are specified, only return trips are found. You can specify a date range of up to 2 days.
 * arrive_by(type: string) - query parameter - The datetime by which the outbound flight should arrive, based on local time at the destination airport.  Date-times are specified in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> yyyy-MM-ddTHH:mm date format
 * return_by(type: string) - query parameter - The time by which the inbound flight should arrive, based on local time at the airport specified as the origin parameter
 * adults(type: integer) - query parameter - The number of adult (age 12 and over) passengers traveling on this flight.
 * children(type: integer) - query parameter - The number of child (younger than age 12 on date of departure) passengers traveling on this flight who will each have their own separate seat
 * infants(type: integer) - query parameter - The number of infant (younger than age 2 on date of departure) passengers traveling on this flight. Infants travel in the lap of an adult passenger, and thus the number of infants must not exceed the number of adults.
 * include_airlines(type: array) - query parameter - If specified, all results will include at least one flight where one or more of these airlines is the marketing carrier. This behaves as an OR function. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>.
 * exclude_airlines(type: array) - query parameter - If specified, no results will include any flights where any of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>.
 * nonstop(type: boolean) - query parameter - Setting this to true will find only flights that do not require the passenger to change from one flight to another
 * max_price(type: integer) - query parameter - Maximum price of trips to find in the result set, in USD (US dollars) unless some other currency code is specified. By default, no limit is applied
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
 * travel_class(type: string) - query parameter - Searches for results where the majority of the itinerary flight time should be in a the specified cabin class or higher
 * number_of_results(type: integer) - query parameter - The number of results to display. This will not be strictly interpreted but used as a guideline to display a useful number of results. By default, the number of results is dynamically determined. A maximum of 250 results will be displayed.
 */
exports.getV1_2FlightsLow_fare_search = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	req.checkQuery('destination', 'Invalid query parameter').notEmpty();
	req.checkQuery('departure_date', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2FlightsLow_fare_search');
};

/*
 * GET /v1.2/flights/affiliate-search
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * origin(type: string) - query parameter - City code from which the traveler will depart. See the location and airport interfaces for more information.
 * destination(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
 * departure_date(type: string) - query parameter - The date on which the traveler will depart from the origin to go to the destination. The maximum scope for a date range is 2 days, for a larger scope, use the Extensive Search!
 * return_date(type: string) - query parameter - The date on which the traveler will depart from the destination to return to the origin. If this parameter is not specified, the search will find only one-way trips. If this, or the return_by parameter are specified, only return trips are found
 * adults(type: integer) - query parameter - The number of adult (age 12 and over) passengers traveling on this flight.
 * children(type: integer) - query parameter - The number of child (younger than age 12 on date of departure) passengers traveling on this flight who will each have their own separate seat
 * infants(type: integer) - query parameter - The number of infant (younger than age 2 on date of departure) passengers traveling on this flight. Infants travel in the lap of an adult passenger, and thus the number of infants must not exceed the number of adults.
 * include_merchants(type: array) - query parameter - If specified, all results will include at least one flight where one or more of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>
 * exclude_merchants(type: array) - query parameter - If specified, no results will include any flights where any of these airlines is the marketing carrier. Airlines are specified using <a href="https://en.wikipedia.org/wiki/Airline_codes"><a href="https://en.wikipedia.org/wiki/Airline_codes">IATA airline code</a>s</a>
 * max_price(type: integer) - query parameter - Maximum price of trips to find in the result set, in USD (US dollars) unless some other currency code is specified. By default, no limit is applied
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
 * mobile(type: boolean) - query parameter - Setting this to true will show mobile web deeplinks
 */
exports.getV1_2FlightsAffiliate_search = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	req.checkQuery('destination', 'Invalid query parameter').notEmpty();
	req.checkQuery('departure_date', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2FlightsAffiliate_search');
};

/*
 * GET /v1.2/location/{code}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * code(type: string) - path parameter - IATA location code for which further information is required
 */
exports.getV1_2Location = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.check('code', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Location');
};

/*
 * GET /v1.2/airports/autocomplete
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * term(type: string) - query parameter - Search keyword that should represent the start of a word in a city or airport name.
 * country(type: string) - query parameter - Identified a country based of a <a href="https://en.wikipedia.org/wiki/ISO_3166-2#Current_codes">ISO 3166-1 alpha-2 code</a>
 * all_airports(type: boolean) - query parameter - Boolean to include or not all airports, no matter their traffic rank. False by default, to only display relevant airports.
 */
exports.getV1_2AirportsAutocomplete = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('term', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2AirportsAutocomplete');
};

/*
 * GET /v1.2/airports/nearest-relevant
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * latitude(type: string) - query parameter - Latitude location to be at the center of your search circle.
 * longitude(type: string) - query parameter - Longitude location to be at the center of your search circle.
 */
exports.getV1_2AirportsNearest_relevant = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('latitude', 'Invalid query parameter').notEmpty();
	req.checkQuery('longitude', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2AirportsNearest_relevant');
};

/*
 * GET /v1.2/hotels/search-airport
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * location(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA airport code</a> for hotel availability is required requested.
 * check_in(type: string) - query parameter - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
 * check_out(type: string) - query parameter - Date on which the guest will end their stay in the hotel.
 * radius(type: integer) - query parameter - Radius around the center to look for hotels in kilometers (km).
 * lang(type: string) - query parameter - The preferred language of the content related to each hotel. Content will be returned in this language if available.
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
 * chain(type: string) - query parameter - Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
 * max_rate(type: number) - query parameter - The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
 * number_of_results(type: integer) - query parameter - The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
 * all_rooms(type: boolean) - query parameter - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
 * show_sold_out(type: boolean) - query parameter - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
 * amenity(type: array) - query parameter - Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).
 */
exports.getV1_2HotelsSearch_airport = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('location', 'Invalid query parameter').notEmpty();
	req.checkQuery('check_in', 'Invalid query parameter').notEmpty();
	req.checkQuery('check_out', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /v1.2/hotels/search-circle
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * latitude(type: number) - query parameter - Latitude of the center of the search.
 * longitude(type: number) - query parameter - Longitude of the center of the search.
 * radius(type: integer) - query parameter - Radius around the center to look for hotels in kilometers (km).
 * check_in(type: string) - query parameter - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
 * check_out(type: string) - query parameter - Date on which the guest will end their stay in the hotel.
 * lang(type: string) - query parameter - The preferred language of the content related to each hotel. Content will be returned in this language if available.
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
 * chain(type: string) - query parameter - Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
 * max_rate(type: number) - query parameter - The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
 * number_of_results(type: integer) - query parameter - The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
 * all_rooms(type: boolean) - query parameter - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
 * show_sold_out(type: boolean) - query parameter - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
 * amenity(type: array) - query parameter - Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).
 */
exports.getV1_2HotelsSearch_circle = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('latitude', 'Invalid query parameter').notEmpty();
	req.checkQuery('longitude', 'Invalid query parameter').notEmpty();
	req.checkQuery('radius', 'Invalid query parameter').notEmpty();
	req.checkQuery('check_in', 'Invalid query parameter').notEmpty();
	req.checkQuery('check_out', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /v1.2/hotels/search-box
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * south_west_corner(type: string) - query parameter - The coordinates of the south-west corner of the search box.
 * north_east_corner(type: string) - query parameter - The coordinates of the north-east corner of the search box.
 * check_in(type: string) - query parameter - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
 * check_out(type: string) - query parameter - Date on which the guest will end their stay in the hotel.
 * lang(type: string) - query parameter - The preferred language of the content related to each hotel. Content will be returned in this language if available.
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
 * chain(type: string) - query parameter - Narrows the hotel search to a given hotel provider. The hotel chain is indicated by the first two characters of the property code.
 * max_rate(type: number) - query parameter - The maximum amount per night that any hotel in the shopping response should cost. This is calculated by dividing the total price of the stay for the given dates by the number of nights specified falling between the check_in and check_out dates.
 * number_of_results(type: integer) - query parameter - The maximum number of hotels to return in the results set. Hotels are ordered by total price, so if more than the given maximum number of hotels are available, only the cheapest options are returned.
 * all_rooms(type: boolean) - query parameter - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
 * show_sold_out(type: boolean) - query parameter - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
 * amenity(type: array) - query parameter - Hotel <a href="hotels-api-supported-amenities-filter">amenities filter</a> to search narrow down hotels with certain amenities. For example&colon; amenity=POOL. (Note: multiple amenities can be used in searches: amenity=PARKING&amenity=RESTAURANT&amenity=PETS_ALLOWED).
 */
exports.getV1_2HotelsSearch_box = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('south_west_corner', 'Invalid query parameter').notEmpty();
	req.checkQuery('north_east_corner', 'Invalid query parameter').notEmpty();
	req.checkQuery('check_in', 'Invalid query parameter').notEmpty();
	req.checkQuery('check_out', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /v1.2/hotels/{property_code}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * property_code(type: string) - path parameter - A Hotel property code based on 2 letter chain code + 3 letter <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city + 3 char property unique id.
 * check_in(type: string) - query parameter - Date on which the guest will begin their stay in the hotel. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
 * check_out(type: string) - query parameter - Date on which the guest will end their stay in the hotel.
 * lang(type: string) - query parameter - The preferred language of the content related to each hotel. Content will be returned in this language if available.
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> for the results
 * all_rooms(type: boolean) - query parameter - This option if enabled will return all hotel room rates, not just the lowest room rate. Note: This will have an impact on the response time due to the larger messages returned.
 * show_sold_out(type: boolean) - query parameter - This option if enabled will return hotel names and addresses even if rooms are sold out (closed properties)
 */
exports.getV1_2Hotels = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.check('property_code', 'Invalid parameter').notEmpty();
	req.checkQuery('check_in', 'Invalid query parameter').notEmpty();
	req.checkQuery('check_out', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Hotels');
};

/*
 * GET /v1.2/cars/search-airport
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * location(type: string) - query parameter - The <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the airport at which the car will be rented.
 * pick_up(type: string) - query parameter - Date on which the car rental will be collected from the car rental location. If no time is provided, a default value of 09:00 is used. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
 * drop_off(type: string) - query parameter - Date at which the car rental will end and the car will be returned to the rental location. If no time is provided, a default value of 17:00 is used.
 * lang(type: string) - query parameter - The preferred language of the content related to each car rental. Content will be returned in this language if available.
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> to use when displaying prices and rates related to the car rental.
 * provider(type: string) - query parameter - 2 character car rental provider code. You may provide this parameter more than once.
 * rate_class(type: string) - query parameter - Allows to request specific rate types.
 * rate_plan(type: string) - query parameter - Qualifies the rate depending on the pickup date and the rental duration.
 * rate_filter(type: string) - query parameter - Defines the types of rates to be returned in the output
 * vehicle(type: array) - query parameter - Specifies the type of vehicle to be rented. If selected, the results set will include only vehicles that match these type descriptions. The enumerations above correspond to ACRISS Pseudo Codes, and you may also provide an ACRISS pseudo code directly. If specifying a vehicle-specific ACRISS code, you may provide this parameter up to 3 times.
 */
exports.getV1_2CarsSearch_airport = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('location', 'Invalid query parameter').notEmpty();
	req.checkQuery('pick_up', 'Invalid query parameter').notEmpty();
	req.checkQuery('drop_off', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2CarsSearch_airport');
};

/*
 * GET /v1.2/cars/search-circle
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * latitude(type: number) - query parameter - Latitude of the center of the search.
 * longitude(type: number) - query parameter - Longitude of the center of the search.
 * radius(type: integer) - query parameter - Radius around the center to look for hotels in kilometers (km).
 * pick_up(type: string) - query parameter - Date on which the car rental will be collected from the car rental location. If no time is provided, a default value of 09:00 is used. Past availability is not displayed, future availability becomes less useful from about 6 months from the current date.
 * drop_off(type: string) - query parameter - Date at which the car rental will end and the car will be returned to the rental location. If no time is provided, a default value of 17:00 is used.
 * lang(type: string) - query parameter - The preferred language of the content related to each car rental. Content will be returned in this language if available.
 * currency(type: string) - query parameter - The preferred <a href="https://en.wikipedia.org/wiki/ISO_4217">currency</a> to use when displaying prices and rates related to the car rental.
 * provider(type: string) - query parameter - 2 character car rental provider code. You may provide this parameter more than once.
 * rate_class(type: string) - query parameter - Allows to request specific rate types.
 * rate_plan(type: string) - query parameter - Qualifies the rate depending on the pickup date and the rental duration.
 * rate_filter(type: string) - query parameter - Defines the types of rates to be returned in the output
 * vehicle(type: array) - query parameter - Specifies the type of vehicle to be rented. If selected, the results set will include only vehicles that match these type descriptions. The enumerations above correspond to ACRISS Pseudo Codes, and you may also provide an ACRISS pseudo code directly. If specifying a vehicle-specific ACRISS code, you may provide this parameter up to 3 times.
 */
exports.getV1_2CarsSearch_circle = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('latitude', 'Invalid query parameter').notEmpty();
	req.checkQuery('longitude', 'Invalid query parameter').notEmpty();
	req.checkQuery('radius', 'Invalid query parameter').notEmpty();
	req.checkQuery('pick_up', 'Invalid query parameter').notEmpty();
	req.checkQuery('drop_off', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2CarsSearch_circle');
};

/*
 * GET /v1.2/rail-stations/autocomplete
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * term(type: string) - query parameter - Search term that should represent some part of a station name. Not case sensitive, may be blank.
 */
exports.getV1_2Rail_stationsAutocomplete = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('term', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Rail_stationsAutocomplete');
};

/*
 * GET /v1.2/rail-station/{id}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * id(type: string) - path parameter - Station ID for which further information is required.
 */
exports.getV1_2Rail_station = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.check('id', 'Invalid parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Rail_station');
};

/*
 * GET /v1.2/trains/extensive-search
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * origin(type: string) - query parameter - Identifier of the rail station from which you would like to depart.
 * destination(type: string) - query parameter - Identifier of the rail station to which you would like to travel.
 * departure_date(type: string) - query parameter - The date or range of dates on which you would like to depart from the origin station to go to the destination.
 */
exports.getV1_2TrainsExtensive_search = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	req.checkQuery('destination', 'Invalid query parameter').notEmpty();
	req.checkQuery('departure_date', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2TrainsExtensive_search');
};

/*
 * GET /v1.2/trains/schedule-search
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * origin(type: string) - query parameter - Identifier of the rail station where you would like to depart from.
 * departure_date(type: string) - query parameter - The date on which you would like to depart from the origin station to go to the destination.
 */
exports.getV1_2TrainsSchedule_search = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	req.checkQuery('departure_date', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.json({});
};

/*
 * GET /v1.2/travel-record/{record_locator}
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * record_locator(type: string) - path parameter - The Amadeus identifier of the given travel record. Usually printed at the top of an itinerary or boarding pass.
 * last_name(type: string) - query parameter - The last name of any traveler in this record, as written on their identification used for travel. This is required to ensure that applications retrieving the record are acting on behalf of the customer.
 * env(type: string) - query parameter - Indicates the Amadeus system from which this record should be retrieved.
 */
exports.getV1_2Travel_record = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.check('record_locator', 'Invalid parameter').notEmpty();
	req.checkQuery('last_name', 'Invalid query parameter').notEmpty();
	req.checkQuery('env', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Travel_record');
};

/*
 * GET /v1.2/travel-intelligence/top-destinations
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * period(type: string) - query parameter - Period, in month of the year (YYYY-MM), when consumers are traveling. Only periods from 2011-01 up to previous month of the current year are valid. Future dates are not supported.
 * origin(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
 * number_of_results(type: integer) - query parameter - The maximum number of destinations to return in the results set. Destinations are ordered by number of travelers. The maximum number of destinations returned is 50
 */
exports.getV1_2Travel_intelligenceTop_destinations = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('period', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Travel_intelligenceTop_destinations');
};

/*
 * GET /v1.2/travel-intelligence/top-searches
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * period(type: string) - query parameter - Period of date (month or year) when consumers are searching to travel. Use YYYY-MM for month or YYYY for year. Only periods from year 2011-01 up to current year, previous month are valid. Future dates are not supported.
 * origin(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
 * destination(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going
 * country(type: string) - query parameter - 2-letter IATA country code of the country where the search queries originates from.
 * number_of_results(type: integer) - query parameter - The maximum number of destinations to return in the results set. Destinations are ordered by number of searches. The maximum number of destinations returned is 50
 */
exports.getV1_2Travel_intelligenceTop_searches = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('period', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	req.checkQuery('country', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Travel_intelligenceTop_searches');
};

/*
 * GET /v1.2/travel-intelligence/flight-traffic
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * period(type: string) - query parameter - Range of periods for which flight traffic information is required. Ranges are inclusive and ranges of months will apply from the start to the end of the month. If just a single period is specified, only that period will be displayed. Only periods from 2011-01 up to previous month of the current year are valid. Future periods are not supported.
 * origin(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city from which the traveler will depart.
 * destination(type: string) - query parameter - <a href="https://en.wikipedia.org/wiki/International_Air_Transport_Association_airport_code">IATA code</a> of the city to which the traveler is going.
 * number_of_results_per_period(type: integer) - query parameter - The maximum number of destinations to return for each period. Destinations are ordered by dates and number of travelers. The maximum number of destinations per period returned is 50
 */
exports.getV1_2Travel_intelligenceFlight_traffic = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('period', 'Invalid query parameter').notEmpty();
	req.checkQuery('origin', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Travel_intelligenceFlight_traffic');
};

/*
 * GET /v1.2/points-of-interest/yapq-search-text
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * city_name(type: string) - query parameter - The name of the <a href="http://yapq.io/cities.txt">supported city</a> for which you are searching, in the selected language.
 * lang(type: string) - query parameter - The preferred language of the content related to each point of interest. Content will be returned in this language if available
 * category(type: string) - query parameter - Filters the resulting points_of_interest to include only results which have a least one category containing the given provided word. Good examples are <em>museum</em>, <em>landmark</em> or <em>church</em>
 * geonames(type: boolean) - query parameter - Setting this to true includes only points of interest with a geonames ID
 * vibes(type: boolean) - query parameter - Includes content that doesn't correspond to an active physical place, but which gives the user some background information, or <em>vibe</em> for the place they are visiting. An example of this may be information on an influential demolished building that used to exist at a certain location, or more information on a district of the city
 * social_media(type: boolean) - query parameter - Enabling this includes images from Instagram in the output results. This is disabled by default, since these images are often just pictures of people or food, which often have little relevance to the actual location
 * image_size(type: string) - query parameter - The size of the images you'd like to see in the response
 * number_of_images(type: integer) - query parameter - Number of images to display
 * number_of_results(type: integer) - query parameter - The maximum number of points of interest to return in the results set. This is a range from 1 to 100
 */
exports.getV1_2Points_of_interestYapq_search_text = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('city_name', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Points_of_interestYapq_search_text');
};

/*
 * GET /v1.2/points-of-interest/yapq-search-circle
 *
 * Parameters (named path params accessible on req.params and query params on req.query):
 *
 * apikey(type: string) - query parameter - API Key provided for your account, to identify you for API access. Make sure to keep this API key secret.
 * latitude(type: number) - query parameter - Latitude of the center of the search, in decimal degrees
 * longitude(type: number) - query parameter - Longitude of the center of the search, in decimal degrees
 * radius(type: integer) - query parameter - Radius around the center to look for points-of-interest around the given latitude and longitude in kilometers (km)
 * lang(type: string) - query parameter - The preferred language of the content related to each point of interest. Content will be returned in this language if available
 * category(type: string) - query parameter - Filters the resulting points_of_interest to include only results which have a least one category containing the given provided word. Good examples are <em>museum</em>, <em>landmark</em> or <em>church</em>
 * geonames(type: boolean) - query parameter - Setting this to true includes only points of interest with a geonames ID
 * vibes(type: boolean) - query parameter - Includes content that doesn't correspond to an active physical place, but which gives the user some background information, or <em>vibe</em> for the place they are visiting. An example of this may be information on an influential demolished building that used to exist at a certain location, or more information on a district of the city
 * social_media(type: boolean) - query parameter - Enabling this includes images from Instagram in the output results. This is disabled by default, since these images are often just pictures of people or food, which often have little relevance to the actual location
 * image_size(type: string) - query parameter - The size of the images you'd like to see in the response
 * number_of_images(type: integer) - query parameter - Number of images to display.
 * number_of_results(type: integer) - query parameter - The maximum number of points of interest to return in the results set. This is a range from 1 to 100
 */
exports.getV1_2Points_of_interestYapq_search_circle = function(req, res) {
	req.checkQuery('apikey', 'Invalid query parameter').notEmpty();
	req.checkQuery('latitude', 'Invalid query parameter').notEmpty();
	req.checkQuery('longitude', 'Invalid query parameter').notEmpty();
	req.checkQuery('radius', 'Invalid query parameter').notEmpty();
	if (req.validationErrors()) {
		return res.json(400,req.validationErrorsJson());
	}
	res.status(200);

	// set response body and send
	res.type('json');
	res.render('v1_2_getV1_2Points_of_interestYapq_search_circle');
};