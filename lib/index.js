import 'ionic-sdk/release/js/ionic.bundle';
import 'expose?_!lodash';

// Our modules
import modConfigIonic from './config/ionic.config';
import modConfigRouter from './config/router.config';
import modRun from './run';
import modLanguage from './language/language.module';
import modHome from './home/home.module';
import modPost from './post/post.module';
import modMenu from './menu/menu.module';
import modItems from './items/items.module';


// Style entry point
import './scss/bootstrap';

// Create our prototype module
let mod = angular.module('prototype', [
    'ionic',
    'ui.router',
    modLanguage,
    modHome,
    modMenu,
    modPost,
    modItems,
]);
// ROUTER CONFIG
mod.config(modConfigRouter);
// IONIC CONFIG
mod.config(modConfigIonic);
// Run
mod.run(modRun);

export default mod = mod.name;
