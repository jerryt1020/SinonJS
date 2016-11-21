describe('StoreService', function () {
    var StoreService, $http;
    var server;
    var sandbox;
    beforeEach(angular.mock.module('SinonJs.Training.Sample'));
    beforeEach(inject(function (_StoreService_, _$http_) {
        StoreService = _StoreService_;
        $http = _$http_;
    }));

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        server = sinon.fakeServer.create();
    });

    afterEach(function () {
        sandbox.restore();
        server.restore();
    });

    it('取得庫存數量', function () {
        var id = 1;
        var apiPath = '/webapi/GetStoreAmount/' + id;

        server.respondWith("GET", apiPath, [
            200,
            {"Content-Type": "application/json"},
            JSON.stringify(5)
        ]);

        var callback = sandbox.spy($http, "get").withArgs(apiPath);

        StoreService.GetStoreAmount(1);
        server.respond();
        callback.calledOnce.should.is.true;
    });

    it('設定庫存數量', function () {
        var id = 1, amount = 5;
        var apiPath = '/webapi/SetStoreAmount';
        var data = JSON.stringify({id: id, amount: amount});
        server.respondWith("POST", apiPath, [
            200,
            {"Content-Type": "application/json"},
            data
        ]);
        var spySetStoreAmount = sandbox.spy($http, "post").withArgs(apiPath, {data: data});

        StoreService.SetStoreAmount(id, amount);
        server.respond();

        spySetStoreAmount.calledOnce.should.is.true;
    });


});
