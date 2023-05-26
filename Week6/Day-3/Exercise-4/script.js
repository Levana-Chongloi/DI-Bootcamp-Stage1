(function (name){

  const div = document.createElement("div")
  div.innerText = name;

  const image = document.createElement ("img");
  image.src = "https://picsum.photos/id/1/60/80";

  const navbar = document.querySelector(".navbar");
  navbar.appendChild(div);
  navbar.appendChild(image);

}) ("Levana")