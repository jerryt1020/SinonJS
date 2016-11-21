describe('LocationService', function () {
    var LocationService,$http;
    var server;
    var fakeCitys = [{id: 1, name: '高雄市'}, {id: 2, name: '台北市'}];

    beforeEach(angular.mock.module('SinonJs.Training.Sample'));
    beforeEach(inject(function (_LocationService_,_$http_) {
        LocationService = _LocationService_;
        $http= _$http_;
    }));

    beforeEach(function () {
        server = sinon.fakeServer.create();
    });

    afterEach(function () {
        server.restore();
    });

    it('取得縣市資料', function () {
        var apiPath = '/webapi/GetLocations';
        server.respondWith("GET", apiPath, [
            200,
            {"Content-Type": "application/json"},
            JSON.stringify(fakeCitys)
        ]);
        var callback = sinon.spy($http,"get").withArgs(apiPath);

        LocationService.GetLocations();
        server.respond();

        callback.should.calledOnce;
    });


});
