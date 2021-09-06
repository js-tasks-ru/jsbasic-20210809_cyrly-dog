function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");
  let hideText = false;
  button.addEventListener("click", () => {
    hideText = !hideText
    if (hideText) {
      text.setAttribute("hidden", hideText)
    } else {
      text.removeAttribute("hidden")
    }
    
  })
}
