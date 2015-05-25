describe('service1', function () {
    beforeEach(module('myService'));
    var service1 = {};

    beforeEach(inject(function (_service1_) {
        service1 = _service1_;

    }));

    describe('return 1', function() {
        it('should return 1', inject(function() {
            var one = service1.return1();

            expect(one).toBe(1);
        }));
    });
});
