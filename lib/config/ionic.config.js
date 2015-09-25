export default function($ionicConfigProvider) {
    'ngInject';
    $ionicConfigProvider.views.maxCache(10);
    $ionicConfigProvider.views.forwardCache(false);
    $ionicConfigProvider.scrolling.jsScrolling(false);
}
