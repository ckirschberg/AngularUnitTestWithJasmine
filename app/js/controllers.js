var personController = angular.module('personController', []);

personController.controller('pController', function ($scope) {
    $scope.people = [
        {'name':       'Jens Jensen'},
        {'name':       'Hans Hansen'},
        {'name':       'Per Persen'}
    ];
});
