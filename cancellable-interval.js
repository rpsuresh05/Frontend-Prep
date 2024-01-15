/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableInterval(callback, delay, ...args) {
    const timeId = setInterval(callback, delay, ...args);
    return () =>
        clearInterval(timeId)
}