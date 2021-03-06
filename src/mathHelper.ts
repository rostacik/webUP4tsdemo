import * as is from "is_js";

/**
 * math helper
 */
export class MathHelper {

    /** add two numbers
     * @param  {number} param1
     * @param  {number} param2
     * @returns number
     */
    public static add(param1: number, param2: number): number {
        if (this.paramsAreNumber(param1, param2)) {
            return param1 + param2;
        } else {
            throw new Error("mathHelper - add - empty or non numbers specified");
        }
    }

    /** subtract two numbers
     * @param  {number} param1
     * @param  {number} param2
     * @returns number
     */
    static sub(param1: number, param2: number): number {
        if (this.paramsAreNumber(param1, param2)) {
            return param1 - param2;
        } else {
            throw new Error("mathHelper - sub - empty or non numbers specified");
        }
    }

    /** multiply two numbers
     * @param  {number} param1
     * @param  {number} param2
     * @returns number
     */
    static mul(param1: number, param2: number): number {
        if (this.paramsAreNumber(param1, param2)) {
            return param1 * param2;
        } else {
            throw new Error("mathHelper - mul - empty or non numbers specified");
        }
    }

    /**
     * both supplied params numbers?
     * @param  {number} param1
     * @param  {number} param2
     * @returns boolean
     */
    static paramsAreNumber(param1: number, param2: number): boolean {
        return is.number(param1) && (is.number(param2));
    }
}