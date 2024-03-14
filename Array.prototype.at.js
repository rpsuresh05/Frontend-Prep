/**
 * @param {number} index
 * @return {any | undefined}
 */
Array.prototype.myAt = function (index) {
    index = parseInt(index);
    index = isNaN(index) ? 0: index;
    
    if(index>=this.length || index < -this.length){
      return undefined
    }
    // console.log((this.length + index) % this.length )
    return this[(this.length + index) % this.length ]
  };