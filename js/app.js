// Home introduction script

let index = 0
const homeTxt = "Hi! I am Steven Ennis and I'm a Software developer."
const speed = 100

function typeWriter() {
  if (index < homeTxt.length) {
    document.getElementById('demo').innerHTML += homeTxt.charAt(index)
    index++
    setTimeout(typeWriter, speed)
  }
}

// Footer date display

document.getElementById('date').innerHTML = new Date().getFullYear()

// loader

let spinner

function mySpinner() {
  spinner = setTimeout(showItem, 2000)
}

function showItem() {
  document.getElementById('loader').style.display = 'none'
}
