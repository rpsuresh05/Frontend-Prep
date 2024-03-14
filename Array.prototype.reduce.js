/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
    const len = this.length;
    let k = 0;
    if(initialValue === undefined) {
      if(len === 0 ){
        throw new Error()
      }else{
        initialValue = this[0]
        k = 1
      }
    }
    while(k < len) {
      if(Object.hasOwn(this, k)){
        initialValue = callbackFn(initialValue, this[k], k, this)
      }
      k+=1
    }
    return initialValue
  };