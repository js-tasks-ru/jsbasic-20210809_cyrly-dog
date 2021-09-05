function initCarousel() {
  const left = document.querySelector(".carousel__arrow_left");
  const right = document.querySelector(".carousel__arrow_right");
  const slider = document.querySelector(".carousel__inner");
  const sliderWidth = slider.offsetWidth;
  let moveWidth = 0

  left.style.display = "none";

  let count = 1;

  right.addEventListener("click", () => {
    if (count < 4) {
      moveWidth -= sliderWidth
      slider.style.transform = `translateX(${moveWidth}px)`
      count++
      if (count === 4) {
        right.style.display = 'none'
      } 
      left.style.display = ''
    }
  })

  left.addEventListener("click", () => {
    if (count > 1) {
      moveWidth += sliderWidth
      slider.style.transform = `translateX(${moveWidth}px)`
      count--
      if (count === 1) {
        left.style.display = 'none'
      }
      right.style.display = ''
    }
  })

}
