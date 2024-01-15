/**
 * @param {Array} array - The array to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @return {Array} Returns the slice of `array`.
 */
export default function dropRightWhile(array, predicate) {
    const ans = array.map(each => each)
    for (let i = ans.length - 1; i >= 0; i--) {
        if (predicate(ans[i], i, array)) {
            ans.pop()
        } else {
            break;
        }
    }
    return ans
}