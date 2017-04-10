import './vendor';

// --- app ---

export let app = angular.module('app',  [
    'ui.router',
    // require('angular-animate'),
    // require('angular-ui-bootstrap'),
    // require('angular-translate')
]);

require('./pages');
