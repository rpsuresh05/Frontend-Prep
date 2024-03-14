/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
    let ans = [];
    let obj =  this;
    for(let i = 0; i < obj.length; i++){
      if(callbackFn.call( thisArg ? thisArg : this, obj[i], i , obj)){
        ans.push(obj[i])
      }
    }
    return ans
  };