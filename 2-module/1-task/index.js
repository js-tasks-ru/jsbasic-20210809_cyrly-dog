function sumSalary(salaries) {
  let summedSalary = 0
  
  for (let keys in salaries) {
  const value = salaries[keys];
  	if(typeof(value) === "number" && isFinite(value)) {
    	summedSalary += value;
    }
  }
  
  return summedSalary;
}
