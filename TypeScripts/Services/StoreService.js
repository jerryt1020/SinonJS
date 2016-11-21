var SinonJs;
(function (SinonJs) {
    var Training;
    (function (Training) {
        var Sample;
        (function (Sample) {
            var StoreService = (function () {
                function StoreService($q, $http) {
                    this.$q = $q;
                    this.$http = $http;
                }
                StoreService.prototype.GetStoreAmount = function (id) {
                    var url = "/webapi/GetStoreAmount/";
                    return this.$http.get(url + id);
                };
                StoreService.prototype.SetStoreAmount = function (id, amount) {
                    var url = "/webapi/SetStoreAmount";
                    return this.$http.post(url, { data: JSON.stringify({ id: id, amount: amount }) });
                };
                StoreService.$inject = ['$q', '$http'];
                return StoreService;
            }());
            Sample.StoreService = StoreService;
            angular.module('SinonJs.Training.Sample')
                .service('StoreService', StoreService);
        })(Sample = Training.Sample || (Training.Sample = {}));
    })(Training = SinonJs.Training || (SinonJs.Training = {}));
})(SinonJs || (SinonJs = {}));
