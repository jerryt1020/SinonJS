describe('StoreHelper', function () {
    var StoreHelper, StoreService;
    var sandbox;

    beforeEach(angular.mock.module('SinonJs.Training.Sample'));
    beforeEach(inject(function (_StoreHelper_, _StoreService_) {
        StoreHelper = _StoreHelper_;
        StoreService = _StoreService_;
    }));


    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('修改庫存資料', function () {
        var id = 1;
        var amount = 5;
        var mockStoreService = sandbox.mock(StoreService);
        var mock = mockStoreService.expects('GetStoreAmount').withArgs(id);
        mock.returnsPromise().resolves(2);
        mockStoreService.expects('SetStoreAmount').once().withArgs(id, 2 + amount);

        StoreHelper.IncrementStoredAmount(id, amount);

        mockStoreService.restore();
        mockStoreService.verify();
    });


});
