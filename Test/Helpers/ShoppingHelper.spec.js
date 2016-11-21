describe('ShoppingHelper', function () {
    var ShoppingHelper;
    var sandbox;
    var spyPrintActionMsg;

    beforeEach(angular.mock.module('SinonJs.Training.Sample'));
    beforeEach(inject(function (_ShoppingHelper_){
        ShoppingHelper = _ShoppingHelper_;
    }));

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        spyPrintActionMsg = sandbox.spy(ShoppingHelper, "PrintActionMsg")
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('執行加入購物車', function () {

        spyPrintActionMsg.withArgs("加入購物車");

        ShoppingHelper.AddToCart();

        expect(spyPrintActionMsg.called).to.be.true;
    });

    it('執行結帳', function () {
        spyPrintActionMsg.withArgs("結帳");

        ShoppingHelper.Checkout();

        spyPrintActionMsg.calledOnce.should.be.true;
    });

    it('執行加入購物車並結帳', function () {
        var spyAddToCart = sandbox.spy(ShoppingHelper, "AddToCart");
        var spyCheckout = sandbox.spy(ShoppingHelper, "Checkout");

        ShoppingHelper.AddToCartAndCheckout();

        spyAddToCart.calledOnce.should.be.true;
        spyCheckout.calledOnce.should.be.true;
        spyPrintActionMsg.calledTwice.should.be.true;

        spyAddToCart.calledBefore(spyCheckout).should.be.true;
        spyCheckout.calledAfter(spyAddToCart).should.be.true;

        spyCheckout.returned(false).should.be.true;
    });

    it('印出動作訊息', function () {
        var msg = "Msg Should be print";
        var spyConsoleLog = sandbox.spy(console, "log").withArgs(msg);

        ShoppingHelper.PrintActionMsg(msg);

        spyConsoleLog.called.should.be.true;
    })

});
