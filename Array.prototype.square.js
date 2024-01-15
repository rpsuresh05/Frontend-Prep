/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(this[i] * this[i])

    }
    return newArr;
};