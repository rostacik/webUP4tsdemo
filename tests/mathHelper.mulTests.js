var assert = require('assert')
var mathHelper = require('../src/mathHelper')

describe('mathHelper tests', function () {
    describe('#sub()', function () {
        it('should fail if no parameter passed in', function () {
            assert.throws(
                function () {
                    mathHelper.MathHelper.mul();
                },
                Error
            )
        });

        it('should fail if undefined parameter passed in', function () {
            assert.throws(
                function () {
                    mathHelper.MathHelper.mul(undefined, undefined);
                },
                Error
            )
        });

        it('should fail if null parameter passed in', function () {
            assert.throws(
                function () {
                    mMathHelper.MathHelper.mul(null, null);
                },
                Error
            )
        });

        it('should fail if string parameter passed in', function() {
            assert.throws(
                function() {
                    mMathHelper.MathHelper.mul("0", "0");
                },
                Error
            )
        });

        it('should return 0 from 0 x 0', function () {
            var res = mathHelper.MathHelper.mul(0, 0);

            assert.equal(res, 0);
        });

        it('should return 1 from 1 x 1', function () {
            var res = mathHelper.MathHelper.mul(1, 1);

            assert.equal(res, 1);
        });

        it('should return 4 from 2 x 2', function () {
            var res = mathHelper.MathHelper.mul(2, 2);

            assert.equal(res, 4);
        });

        it('should return 16 from 4 x 4', function () {
            var res = mathHelper.MathHelper.mul(4, 4);

            assert.equal(res, 16);
        });

        it('should return 25 from 5 x 5', function () {
            var res = mathHelper.MathHelper.mul(5, 5);

            assert.equal(res, 25);
        });

        it('should return 36 from 6 x 6', function () {
            var res = mathHelper.MathHelper.mul(6, 6);

            assert.equal(res, 36);
        });

        it('should return 49 from 7 x 7', function () {
            var res = mathHelper.MathHelper.mul(7, 7);

            assert.equal(res, 49);
        });
    })
})