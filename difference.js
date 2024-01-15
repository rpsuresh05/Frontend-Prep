/**
 * @param {Array} array - Array from which different elements are to be removed.
 * @param {Array} values - Array of values that are to be removed from the original array.
 * @return {Array} Returns filtered array.
 */
export default function difference(array, values) {
    const valueSet = new Set(values);
    const ans = []
    array.forEach((each) => {
        if (valueSet.has(each)) {

        } else {
            ans.push(each)
        }
    })
    return ans
}