class ItemsService {

    constructor () {
        'ngInject';

        let vm = this;

        vm.getAllItems = getAllItems;
        vm.getItemById = getItemById;

        vm.items = [{
            id:0,
            name : 'First item',
            description : 'This is my first item',
            status : 'active'
        },{
            id:1,
            name : 'Second item',
            description : 'This is my second item',
            status : 'active'
        },{
            id:2,
            name : 'Third item',
            description : 'This is my third item',
            status : 'active'
        },{
            id:3,
            name : 'Fourth item',
            description : 'This is my fourth item',
            status : 'active'
        },{
            id:4,
            name : 'Fifth item',
            description : 'This is my fifth item',
            status : 'active'
        }];

        function getAllItems () {
            return vm.items;
        }

        function getItemById (index) {
            index = parseInt(index);
            return vm.items.filter((item) => {
                if (item.id === index) {
                    return item;
                }
            })[0];
        }

    }
}

export default ItemsService;
