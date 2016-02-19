/**
 * This simple program takes an array of integers and 
 * calculates the percentage of positive, negative and 
 * zeros respectively. It demonstrates the use of
 * Array.prototype.filter.
 * 
 * Filter visits each element of the array once. Because
 * two filters are applied to the array one after the other
 * the array is traversed twice. Can a single filter be created
 * that solves the same problem and only traverse the array once?
 */
function isPositive(x){
    return x > 0;
}

function isNegative(x){
    return x < 0;
}

(function main() {
    var n = 6;
    var arr = [2, 3, -6, -9, 0, 2];
    var p = arr.filter(isPositive).length;
    var q = arr.filter(isNegative).length;
    var z = n - (p + q);
        
    console.log(p/n);
    console.log(q/n);
    console.log(z/n);
})();