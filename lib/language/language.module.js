import angularTranslate from 'angular-translate';
import urlTranslateLoader from 'angular-translate/dist/angular-translate-loader-url/angular-translate-loader-url';

import LanguageConfig from './language.config.js';

export default angular.module('prototype.language', ['pascalprecht.translate'])
    .config(LanguageConfig)
    .name;
