var SinonJs;
(function (SinonJs) {
    var Training;
    (function (Training) {
        var Sample;
        (function (Sample) {
            var LocationHelper = (function () {
                function LocationHelper($q, LocationService, $filter) {
                    this.$q = $q;
                    this.LocationService = LocationService;
                    this.$filter = $filter;
                }
                LocationHelper.prototype.GetLocationsList = function () {
                    var _this = this;
                    var defer = this.$q.defer();
                    this.LocationService.GetLocations().then(function (res) {
                        _this.Locations = res;
                        defer.resolve(res);
                    });
                    return defer.promise;
                };
                LocationHelper.prototype.GetLocationsListCount = function () {
                    var defer = this.$q.defer();
                    this.GetLocationsList().then(function (res) {
                        defer.resolve(res.length);
                    });
                    return defer.promise;
                };
                LocationHelper.$inject = ['$q', 'LocationService', '$filter'];
                return LocationHelper;
            }());
            Sample.LocationHelper = LocationHelper;
            angular.module('SinonJs.Training.Sample')
                .service('LocationHelper', LocationHelper);
        })(Sample = Training.Sample || (Training.Sample = {}));
    })(Training = SinonJs.Training || (SinonJs.Training = {}));
})(SinonJs || (SinonJs = {}));
