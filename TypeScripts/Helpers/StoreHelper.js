var SinonJs;
(function (SinonJs) {
    var Training;
    (function (Training) {
        var Sample;
        (function (Sample) {
            var StoreHelper = (function () {
                function StoreHelper($q, StoreService) {
                    this.$q = $q;
                    this.StoreService = StoreService;
                }
                StoreHelper.prototype.IncrementStoredAmount = function (id, amount) {
                    var _this = this;
                    this.StoreService.GetStoreAmount(id).then(function (res) {
                        _this.StoreService.SetStoreAmount(id, res + amount);
                    });
                };
                StoreHelper.$inject = ['$q', 'StoreService'];
                return StoreHelper;
            }());
            Sample.StoreHelper = StoreHelper;
            angular.module('SinonJs.Training.Sample')
                .service('StoreHelper', StoreHelper);
        })(Sample = Training.Sample || (Training.Sample = {}));
    })(Training = SinonJs.Training || (SinonJs.Training = {}));
})(SinonJs || (SinonJs = {}));
