function playButton(){
//Usando dos prompts el sistema pedira entrar el nombre del primer y despues del segundo jugador
var firstPlayer = prompt("Por favor, agrega el nombre del primer jugador.");
var secondPlayer = prompt("Por favor, agrega el nombre del segundo jugador.");
//Las variable otorgara un numero aleatorio en el dado 1 y el dado 2
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

//Por medio de los numero aleatorio declaro una variable que eligira una de las 6 imagenes
var imageSrc = "./images/dice"+ randomNumber1 + ".png";
var imageSrc2 = "./images/dice"+ randomNumber2 + ".png";

//Usando DOM Manipulation y las variables cambio la imagen del html a una aleatoria
document.querySelector("img.img1").setAttribute("src", imageSrc);
document.querySelector("img.img2").setAttribute("src", imageSrc2);
//Usando DOM cambio los nombre de player 1 y 2 a los nombre que el sistema pidio al inicio
document.querySelector("p.p1").innerHTML = firstPlayer;
document.querySelector("p.p2").innerHTML = secondPlayer;

// Usando una serie de "Ifs" cambio el titulo a uno nuevo que refleja quien gano
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "🚩 " + firstPlayer + " Gano!";
    } 
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = secondPlayer + " Gano! 🚩";
    }
      else {
        document.querySelector("h1").innerHTML = "Empatado!";
      }
  
}