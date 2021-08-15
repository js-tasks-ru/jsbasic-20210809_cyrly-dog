function factorial(n) {
  let result = n > 0 ? n : 1;
  
  for (let i = 1; i < n; i++) {
      result *= n - i
  }
  
  return result
}
