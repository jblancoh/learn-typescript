"use strict";
let addThreeNumbers = (x, y, z) => {
    if ((z === undefined)) {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
let subtractThreeNumbers = (x, y, z = 100) => x - y - z;
console.log(addThreeNumbers(10, 20));
console.log(subtractThreeNumbers(10, 20, 15));
