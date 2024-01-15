/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
export default function chunk(array, size = 1) {
    const ans = []
    let temp = []
    let i = 0
    while (i < array.length) {
        temp.push(array[i])
        if (temp.length === size) {
            ans.push(temp)
            temp = []
        }
        i += 1;
    }
    if (temp.length) {
        ans.push(temp)
    }
    return ans
}