let x = 10;
let result;
const firstFunction = () => {
  const secondX = x + 5;
  secondFunction(secondX);
}
const secondFunction = (x) => {
  x += 5;
  thirdFunction(x);
}
const thirdFunction = (num) => {
  x += 5;
  result = x;
}
firstFunction();
return result