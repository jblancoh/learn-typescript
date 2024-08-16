"use strict";
const myIceCream = {
    flavor: 'vanilla',
    scoops: 2
};
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({
    flavor: 'chocolate',
    scoops: 2
}));
