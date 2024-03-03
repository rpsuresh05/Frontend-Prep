
Function.prototype.myApply = function (thisArg, argArray = []) {
    return this.bind(thisArg)(...argArray);
};

Function.prototype.myCall = function (thisArg, argArray = []) {
    return this.bind(thisArg)(...argArray);
};