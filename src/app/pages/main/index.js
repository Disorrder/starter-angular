// import Controller from './controller';
// import template from './template.pug';

angular.module('app').config(['$stateProvider', ($stateProvider) => {
    $stateProvider.state('main', {
        url: '',
        controller: require('./controller').default,
        controllerAs: 'page',
        template: require('./template.pug')(),
    });
}]);
