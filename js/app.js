// Home introduction script

let index = 0;
let homeTxt = "Hi! I am Steven Ennis and I'm a Software developer.";
let speed = 100;

const typeWriter=()=> {
  if (index < homeTxt.length) {
    document.getElementById("demo").innerHTML += homeTxt.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Footer date display

document.getElementById("date").innerHTML = new Date().getFullYear();

// loader

let spinner;

const mySpinner=()=> {
  spinner = setTimeout(showItem, 2000);
}

const showItem=()=>{
  document.getElementById("loader").style.display = "none";
}
