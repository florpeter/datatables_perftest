'use strict';

/**
 * @ngdoc service
 * @name jsonTools.jsonTools
 * @description
 * # jsonTools
 * Service in the jsonTools.
 */
angular.module('jsonTools', [])
  .service('jsonTools', ['$http', '$q', '$log', function ($http, $q, $log) {

    //VALIDATE: Calls a remote URL and determines if the response is valid JSON.

    //If 200 from server:
    // JSON VALID: 
    //    ADDS: response.validJSON = true
    // JSON INVALID RETURNS OBJECT: 
    //    response.validJSON = false;
    //    response.statusText = 'Angular - Failed to Parse JSON object';
    //    response.error = parseError;
    //    response.status = 422;

    //If non 200 from server
    //  Server did not respond:
    //    on error just check that validJSON was set..
    var canceler = $q.defer();
    var wasCancelled = false;

    this.cancelResponse = function () {
      canceler.resolve();
      wasCancelled = true;
    };

    this.validateResponse = function (url, method) {
      canceler = $q.defer();
      if (method === undefined) {
        method = 'GET';
      }

      method = method.toUpperCase();

      return $http({
          method: method,
          url: url,
          transformResponse: undefined,
          timeout: canceler.promise
        })
        .then(
          function resolve(response) {
            var parseError;
            try {
              response.data = JSON.parse(response.data);
            } catch (e) {
              $log.debug('failed to parse JSON: ', response.data, e);
              parseError = e;
            }

            response.wasCancelled = wasCancelled;
            wasCancelled = false;

            if (parseError !== undefined) {
              $log.warn('Invalid JSON Detected. Rejecting response.');
              response.validJSON = false;
              response.statusText = 'Angular - Failed to Parse JSON object';
              response.error = parseError;
              response.status = 422;
              return $q.reject(response);
            } else {
              response.validJSON = true;
              return $q.resolve(response);
            }

          },
          function reject(response) {
            response.wasCancelled = wasCancelled;
            if (!wasCancelled) {
              $log.error('JSON-Validator: Unable to complete request.', response.status);
            }
            wasCancelled = false;
            return $q.reject(response);
          }
        );
    };
}]);