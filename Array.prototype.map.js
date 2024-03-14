/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
    if(typeof callbackFn !== 'function' || 
    !callbackFn.apply ||
    !callbackFn.call){
      throw new Error(`${callbackFn} is not Function`)
    }
    const len = this.length;
    const A = []
    let k = 0
    let to = 0
    while(k < len) {
      if(Object.hasOwn(this, k)){
      A[to] = callbackFn.call(thisArg, this[k], k, this)}
      to+=1
      k+=1
    }
    return A
  };