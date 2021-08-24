function camelize(str) {
  const lettersArr = str.split("");
  lettersArr.forEach((letter, index) => { 
    lettersArr[index] = letter
    if (letter === "-") {
      lettersArr[index + 1] = lettersArr[index +1].toUpperCase()
    }
  })
  
  return result = lettersArr.join('').split("-").join('')
}
