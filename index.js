const header = document.getElementById("header")
header.style.textAlign = "center"
header.style.color ="white"
const navbar = document.querySelectorAll("#navbar a")
for(element of navbar){
element.style.padding = "10px"
element.style.textDecoration = "none"
element.style.cursor = "pointer"
element.style.color = "red"
}

const hero = document.getElementById("hero")
