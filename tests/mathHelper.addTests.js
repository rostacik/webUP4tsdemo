var assert = require("assert");
var mathHelper = require("../src/mathHelper");

describe("mathHelper tests", function() {
    describe("#add()", function() {
        it("should fail if no parameter passed in", () => {
            assert.throws(
                function() {
                    mathHelper.MathHelper.add();
                },
                Error
            );
        });

        it("should fail if undefined parameter passed in", function() {
            assert.throws(
                function() {
                    mathHelper.MathHelper.add(undefined, undefined);
                },
                Error
            );
        });

        it("should fail if null parameter passed in", function() {
            assert.throws(
                function() {
                    mathHelper.MathHelper.add(null, null);
                },
                Error
            );
        });

        it('should fail if string parameter passed in', function() {
            assert.throws(
                function() {
                    mMathHelper.MathHelper.add("0", "0");
                },
                Error
            )
        });

        it("should return 0 from 0 + 0", () => {
            var res = mathHelper.MathHelper.add(0, 0);

            assert.equal(res, 0);
        });

        it("should return 2 from 1 + 1", () => {
            var res = mathHelper.MathHelper.add(1, 1);

            assert.equal(res, 2);
        });

        it("should return 4 from 2 + 2", () => {
            var res = mathHelper.MathHelper.add(2, 2);

            assert.equal(res, 4);
        });

        it("should return 8 from 4 + 4", () => {
            var res = mathHelper.MathHelper.add(4, 4);

            assert.equal(res, 8);
        });

        it("should return 3 from 1 + 2", () => {
            var res = mathHelper.MathHelper.add(1, 2);

            assert.equal(res, 3);
        });
    });
});