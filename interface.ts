interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

const myIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2
}

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops({
  flavor: 'chocolate',
  scoops: 2
}))