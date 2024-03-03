/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
    let count = 0
    let memo;
    function onced(){
      console.log(arguments, this)
      if(count){
        return memo
      }
      count+=1
      memo = func.call(this,...arguments);
      return memo
    }
    return onced
  }