function getMinMax(str) {
  let numbers = []
  
  str.split(" ").forEach((item, index) => {
   if (isFinite(parseFloat(item))) {
     numbers.push(parseFloat(item))
   }
  })
  
  return result = {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  }
}
