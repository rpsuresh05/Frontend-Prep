// This question evaluates your knowledge on closures and higher-order functions.

/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
    let value;
    let counter = () => {
        if (value !== undefined) {
            value = value + 1
            return value;
        }
        value = initialValue
        return value
    }
    return counter;
}