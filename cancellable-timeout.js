/**
 * @param {Function} callback
 * @param {number} delay
 * @param {...any} args
 * @returns {Function}
 */
export default function setCancellableTimeout(callback, delay, ...args) {
    const timerID = setTimeout(callback, delay, ...args);
    return () => {
        clearTimeout(timerID)
    }
}