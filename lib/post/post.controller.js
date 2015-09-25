class PostController {

    constructor ($scope, $log, $stateParams, itemsService) {
        'ngInject';
        var vm = this;

        vm.item = itemsService.getItemById($stateParams.id);
    }
}

export default PostController;
