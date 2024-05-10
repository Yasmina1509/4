let h1 = document.getElementById("random")

let body = document.querySelector("body")

h1.style.backgroundColor = "red"
body.style.backgroundColor = "black"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.height = "100vh"
let num = Math.floor(Math.random() * 100)
h1.textContent = num


