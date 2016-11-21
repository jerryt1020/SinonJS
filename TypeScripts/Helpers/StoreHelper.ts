/// <reference path="../../typings/globals/angular/index.d.ts"/>
namespace SinonJs.Training.Sample {

    export class StoreHelper {

        static $inject = ['$q', 'StoreService'];
        public Locations: SinonJs.Training.Sample.ILocation[];

        constructor(private $q: ng.IQService,
                    private StoreService: SinonJs.Training.Sample.StoreService) {

        }

        /**
         * 增加庫存數量
         * @constructor
         */
        public IncrementStoredAmount(id: number, amount: number): void {
            this.StoreService.GetStoreAmount(id).then((res) => {
                this.StoreService.SetStoreAmount(id, res + amount);
            });
        }

    }

    angular.module('SinonJs.Training.Sample')
        .service('StoreHelper', StoreHelper);

}