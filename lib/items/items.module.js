import ItemsService from './items.service';

export default angular.module('prototype.items', [])
    .service('itemsService', ItemsService)
    .name;
