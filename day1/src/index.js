import "./index.css"
import logo from "./logo.png"

console.log(10)
const root = document.getElementById("root")

const h1 = document.createElement("h1")
h1.setAttribute("id","colortext")
h1.innerText = "Hajira Sultana - Full Stack Web Developer"

const image = document.createElement("img")
image.setAttribute("id","image")
image.src = logo


root.append(h1,image)
