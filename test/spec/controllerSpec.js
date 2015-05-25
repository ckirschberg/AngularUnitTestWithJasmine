describe('Person controller', function () {
    beforeEach(module('personController'));

    describe('pController', function () {

        it('should create people array with 3 people', inject(function ($controller) {
            var scope = {};
            var ctrl = $controller('pController', { $scope: scope });

            expect(scope.people.length).toBe(3);
        }));
    });
});
