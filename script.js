// Extra Long Factorials ------------------------------------------>
function extraLongFactorials(n) {
  n = BigInt(n)
  let result = BigInt(1);
  
  
  for(let i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

console.log(extraLongFactorials(25)); //15511210043330985984000000