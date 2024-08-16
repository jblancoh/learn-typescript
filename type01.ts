

let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if((z === undefined)) {
    return x + y
  } else {
    return x + y + z
  }
}

let subtractThreeNumbers = (x: number, y: number, z = 100): number => x - y - z;

console.log(addThreeNumbers(10,20))

console.log(subtractThreeNumbers(10, 20, 15))