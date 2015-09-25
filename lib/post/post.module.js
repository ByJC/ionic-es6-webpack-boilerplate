import modConfig from './post.config';
import modController from './post.controller';

export default angular.module('prototype.post', [])
    .config(modConfig)
    .controller('PostController', modController)
    .name;
