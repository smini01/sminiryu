const images = ["3.jpeg"];

const chosenImage = images[0];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
