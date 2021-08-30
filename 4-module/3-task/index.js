function highlight(table) {
  const tableBody = table.children[1].children
  for (let i = 0; i < tableBody.length; i++) {
    const cells = tableBody[i].children
    let available = false;
    let gender = "male";
    let age = false
    for (let j = 0; j < cells.length; j++) {
      available = cells[j].dataset.available === undefined ? "hidden" : cells[j].dataset.available === "true" ? "available" : "unavailable"
      if (j === 2) {
        gender = cells[j].innerHTML === "m" ? "male" : "female"
      }
      if (j === 1) {
        age = cells[j].innerHTML < 18
      }

    }
    if (age) {
    	tableBody[i].style = "text-decoration: line-through"
    }
    if (available === "hidden") {
    	tableBody[i].setAttribute("hidden", true);
    } else {
      tableBody[i].classList.add(available)
    }
    tableBody[i].classList.add(gender)
  }
}
