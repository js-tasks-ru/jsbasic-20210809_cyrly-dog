function makeDiagonalRed(table) {
  const rows = table.children[0].children
  for (let i = 0; i < rows.length; i++) {
  	rows[i].children[i].style.background = "red" 
  }
}
