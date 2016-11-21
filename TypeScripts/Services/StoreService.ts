/// <reference path="../../typings/globals/angular/index.d.ts"/>
namespace SinonJs.Training.Sample {
    export class StoreService {

        static $inject = ['$q', '$http'];

        constructor(private $q: ng.IQService,
                    private $http: ng.IHttpService) {

        }

        /**
         * 取得庫存數量
         * @param id
         * @returns {IPromise<number>}
         * @constructor
         */
        public GetStoreAmount(id: number): ng.IHttpPromise<number> {
            const url = "/webapi/GetStoreAmount/";
            return this.$http.get(url + id);

        }

        /**
         * 設定庫存數量
         * @param id
         * @param amount
         * @returns {IHttpPromise<T>}
         * @constructor
         */
        public SetStoreAmount(id: number, amount: number): ng.IHttpPromise<{}> {
            const url = "/webapi/SetStoreAmount";
            return this.$http.post(url, {data: JSON.stringify({id: id, amount: amount})});
        }

    }

    angular.module('SinonJs.Training.Sample')
        .service('StoreService', StoreService);

}