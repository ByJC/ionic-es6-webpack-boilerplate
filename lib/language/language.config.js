function TranslateConfig ($translateProvider) {
    'ngInject';

    let url = 'locales/en.json';

    $translateProvider
        .useUrlLoader(url)
        .preferredLanguage('en')
        .useSanitizeValueStrategy('sanitize');
}

export default TranslateConfig;
