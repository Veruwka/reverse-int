module.exports = function reverse(n) {
  if(n < 0) n = n * (-1);
  let newArray = [];
  let nArray = Array.from(String(n));
  newArray = nArray.reverse();
  return (Number(newArray.join('')));
}
