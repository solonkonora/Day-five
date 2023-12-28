const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

const index = setInterval(blurring, 50)
function blurring () {
  load++

  if (load > 99) {
    clearInterval(index)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0) // as it goes from o to 100, opacity is set from 1 to 0
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
