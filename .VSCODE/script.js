function togglemode() {
  const html = document.documentElement
  //if(html.classList.contains("light")){
  // html.classList.remove("light")
  // }
  // else{
  //    html.classList.add("light")
  // }
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Mobile/Avatar1.png")
  } else {
    img.attributes("src", "./assets/Mobile/Avatar.png")
  }
}
