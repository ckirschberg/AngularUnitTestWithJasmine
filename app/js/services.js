
var myService = angular.module("myService", []);

myService.service('service1', function () {
    this.return1 = function () {
        return 1;
    };
});
