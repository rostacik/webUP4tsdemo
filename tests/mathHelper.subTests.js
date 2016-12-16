var assert = require('assert')
var mathHelper = require('../src/mathHelper')

describe('mathHelper tests', function() {
    describe('#sub()', function() {
        it('should fail if no parameter passed in', function() {
            assert.throws(
                function() {
                    mathHelper.MathHelper.sub();
                },
                Error
            )
        });

        it('should fail if undefined parameter passed in', function() {
            assert.throws(
                function() {
                    mathHelper.MathHelper.sub(undefined, undefined);
                },
                Error
            )
        });

        it('should fail if null parameter passed in', function() {
            assert.throws(
                function() {
                    mMathHelper.MathHelper.sub(null, null);
                },
                Error
            )
        });

        it('should fail if string parameter passed in', function() {
            assert.throws(
                function() {
                    mMathHelper.MathHelper.sub("0", "0");
                },
                Error
            )
        });

        it('should return 0 from 0 - 0', function() {
            var res = mathHelper.MathHelper.sub(0, 0);

            assert.equal(res, 0);
        });

        it('should return 0 from 1 + 1', function() {
            var res = mathHelper.MathHelper.sub(1, 1);

            assert.equal(res, 0);
        });

        it('should return 0 from 2 - 2', function() {
            var res = mathHelper.MathHelper.sub(2, 2);

            assert.equal(res, 0);
        });

        it('should return 0 from 4 - 4', function() {
            var res = mathHelper.MathHelper.sub(4, 4);

            assert.equal(res, 0);
        });

        it('should return 0 from 5 - 5', function() {
            var res = mathHelper.MathHelper.sub(5, 5);

            assert.equal(res, 0);
        });

        it('should return 0 from 6 - 6', function() {
            var res = mathHelper.MathHelper.sub(6, 6);

            assert.equal(res, 0);
        });

        it('should return 0 from 7 - 7', function() {
            var res = mathHelper.MathHelper.sub(7, 7);

            assert.equal(res, 0);
        });
    })
})