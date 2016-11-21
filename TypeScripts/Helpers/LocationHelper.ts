/// <reference path="../../typings/globals/angular/index.d.ts"/>
namespace SinonJs.Training.Sample {

    export class LocationHelper {

        static $inject = ['$q', 'LocationService','$filter'];
        public Locations:SinonJs.Training.Sample.ILocation[];

        constructor(private $q:ng.IQService,
                    private LocationService:SinonJs.Training.Sample.LocationService,
                    private $filter:ng.IFilterService
        ) {

        }

        /**
         * 取得地區資料
         * @constructor
         */
        public GetLocationsList():ng.IPromise<SinonJs.Training.Sample.ILocation[]> {
            const defer = this.$q.defer();
            this.LocationService.GetLocations().then((res:SinonJs.Training.Sample.ILocation[])=>{
                this.Locations = res;
                defer.resolve(res);
            });
            return defer.promise;
        }

        /**
         * 取得地區資料的數量
         * @constructor
         */
        public GetLocationsListCount():ng.IPromise<number> {
            const defer = this.$q.defer();
            this.GetLocationsList().then((res:SinonJs.Training.Sample.ILocation[])=>{
                defer.resolve(res.length);
            });
            return defer.promise;
        }

    }

    angular.module('SinonJs.Training.Sample')
        .service('LocationHelper', LocationHelper);

}