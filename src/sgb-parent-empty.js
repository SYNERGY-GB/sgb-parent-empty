'use strict';

angular.module('sgb-parent-empty', ['megazord'])
    .controller('sgb-parent-empty-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams', function ($scope, _router, _screen, _screenParams, $stateParams) {
        _screen.initialize($scope, _screenParams);

        //Add your controller logic here.
    }]);