let i =0;
let txt = "Hi! I am Steven Ennis and I'm a Software developer.";
let speed = 100;

function typeWriter(){
    if (i < txt.length) {
        document.getElementById("demo").innerHTML +=txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}