function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/foto-perfil2(1).jpg")
  } else {
    img.setAttribute("src", "./assets/foto-perfil.jpg")
  }
}
