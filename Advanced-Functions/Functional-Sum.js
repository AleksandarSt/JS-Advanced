/**
 * Created by Aleksandar on 16/07/2017.
 */

var add = (function () {
    var sum = 0;
    return function sumN(number) {
        sum += Number(number);
        sumN.toString = () => sum;
        return sumN;
    }
})();


console.log(add(6)(3).toString());