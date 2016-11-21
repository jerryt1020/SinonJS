/// <reference path="../../typings/globals/angular/index.d.ts"/>
module SinonJs.Training.Sample {
    export interface ILocation {
        name: string;
        id: number;
    }

    export class LocationService {

        static $inject = ['$q', '$http'];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService) {

        }

        /**
         * 取得縣市資料
         * @param action
         * @constructor
         */
        public GetLocations(): ng.IHttpPromise<SinonJs.Training.Sample.ILocation[]> {
            const url = "/webapi/GetLocations";
            return this.$http.get(url);
        }

    }

    angular.module('SinonJs.Training.Sample')
        .service('LocationService', LocationService);

}