const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)
function blurring() {
  load++

  if(load > 99) {
  clearInterval(int)
  }

loadText.innerText = `${load}%`
loadText.style.opacity = scale(load, 0, 100, 1, 0) // as it goes from o to 100, opacity is set from 1 to 0
}

const scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
