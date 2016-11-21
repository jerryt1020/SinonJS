var SinonJs;
(function (SinonJs) {
    var Training;
    (function (Training) {
        var Sample;
        (function (Sample) {
            var LocationService = (function () {
                function LocationService($q, $http) {
                    this.$q = $q;
                    this.$http = $http;
                }
                LocationService.prototype.GetLocations = function () {
                    var url = "/webapi/GetLocations";
                    return this.$http.get(url);
                };
                LocationService.$inject = ['$q', '$http'];
                return LocationService;
            }());
            Sample.LocationService = LocationService;
            angular.module('SinonJs.Training.Sample')
                .service('LocationService', LocationService);
        })(Sample = Training.Sample || (Training.Sample = {}));
    })(Training = SinonJs.Training || (SinonJs.Training = {}));
})(SinonJs || (SinonJs = {}));
