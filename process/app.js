"use strict";

var Q = require('q');

/**
 * process takes some data and returns processed data
 * @param settings {object} user input settings
 * @param data {object} data sent from previous slab in network
 * @returns {object}
 */
exports.process = function(settings, data){
	var deferred = Q.defer();
	/* do some processing */
	return deferred.promise;
};
