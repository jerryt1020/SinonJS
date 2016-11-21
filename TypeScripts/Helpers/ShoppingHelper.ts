namespace SinonJs.Training.Sample {

    export class ShoppingHelper {
        /**
         * 印出動作訊息
         * @param action
         * @constructor
         */
        public PrintActionMsg(action) {
            console.log(action);
        }

        /**
         * 執行加入購物車
         * @constructor
         */
        public AddToCart() {
            this.PrintActionMsg("加入購物車");
        }

        /**
         * 執行結帳
         * @constructor
         */
        public  Checkout() {
            this.PrintActionMsg("結帳");
            return false;
        }

        /**
         * 執行加入購物車並結帳
         * @constructor
         */

        public AddToCartAndCheckout() {
            this.AddToCart();
            this.Checkout();
        }

    }

    angular.module('SinonJs.Training.Sample')
        .service('ShoppingHelper', ShoppingHelper);
}