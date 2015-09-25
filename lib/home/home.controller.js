 class HomeController {

    constructor ($scope, $state, itemsService) {
        'ngInject';

        let vm = this;

        vm.items = itemsService.getAllItems();
    }

}


export default HomeController;
