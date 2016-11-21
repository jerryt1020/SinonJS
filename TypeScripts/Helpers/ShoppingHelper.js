var SinonJs;
(function (SinonJs) {
    var Training;
    (function (Training) {
        var Sample;
        (function (Sample) {
            var ShoppingHelper = (function () {
                function ShoppingHelper() {
                }
                ShoppingHelper.prototype.PrintActionMsg = function (action) {
                    console.log(action);
                };
                ShoppingHelper.prototype.AddToCart = function () {
                    this.PrintActionMsg("加入購物車");
                };
                ShoppingHelper.prototype.Checkout = function () {
                    this.PrintActionMsg("結帳");
                    return false;
                };
                ShoppingHelper.prototype.AddToCartAndCheckout = function () {
                    this.AddToCart();
                    this.Checkout();
                };
                return ShoppingHelper;
            }());
            Sample.ShoppingHelper = ShoppingHelper;
            angular.module('SinonJs.Training.Sample')
                .service('ShoppingHelper', ShoppingHelper);
        })(Sample = Training.Sample || (Training.Sample = {}));
    })(Training = SinonJs.Training || (SinonJs.Training = {}));
})(SinonJs || (SinonJs = {}));
