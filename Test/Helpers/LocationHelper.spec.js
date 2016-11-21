describe('LocationHelper', function () {
    var LocationHelper, LocationService, $filter;
    var sandbox;
    var fakeCitys = [{id: 1, name: '高雄市'}, {id: 2, name: '台北市'}];

    beforeEach(angular.mock.module('SinonJs.Training.Sample'));
    beforeEach(inject(function (_LocationHelper_, _LocationService_, _$filter_) {
        LocationHelper = _LocationHelper_;
        LocationService = _LocationService_;
        $filter = _$filter_;
    }));


    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('取得地區資料', function () {
        var stubGetLocations = sandbox.stub(LocationService, "GetLocations");
        var promiseGetLocations = stubGetLocations.returnsPromise().resolves(fakeCitys);

        LocationHelper.GetLocationsList();

        promiseGetLocations().then(function (res) {
            res.should.equal(fakeCitys);
            res.length.should.equal(2);
            LocationHelper.Locations.length.should.equal(2);
            promiseGetLocations.restore();
        });
    });

    it('取得地區資料的數量', function () {
        var stubGetLocationsList = sandbox.stub(LocationHelper, "GetLocationsList");
        var promiseGetLocationsList = stubGetLocationsList.returnsPromise().resolves(fakeCitys);

        LocationHelper.GetLocationsListCount();

        stubGetLocationsList.called.should.is.true;
        promiseGetLocationsList().then(function (res) {
            res.length.should.equal(2);
        });
    });

});
