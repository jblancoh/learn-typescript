"use strict";
const myIceCream2 = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true,
};
function tooManyScoops2(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops2({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));
