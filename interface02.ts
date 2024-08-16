interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

const myIceCream2: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true,
}

function tooManyScoops2(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops2({ flavor: 'vanilla', scoops: 5, sauce: 'caramel' }));