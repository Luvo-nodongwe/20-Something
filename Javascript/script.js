// script.js

function openSurprise(){

  window.location.href = "surprise.html";

}

function openCard(){

  document.querySelector(".envelope-container").style.display = "none";

  document.getElementById("cardContainer").style.display = "flex";

}
// TYPING EFFECT

const textElement = document.getElementById("typing-text");

if(textElement){

  const firstText = "Silie’s 19th";
  const secondText = "Silie’s 20th 🫂";

  let index = 0;

  function typeFirst(){

    if(index < firstText.length){

      textElement.innerHTML += firstText.charAt(index);

      index++;

      setTimeout(typeFirst, 120);

    }

    else{

      setTimeout(deleteText, 1500);

    }

  }

  function deleteText(){

    if(textElement.innerHTML.length > 0){

      textElement.innerHTML =
      textElement.innerHTML.slice(0,-1);

      setTimeout(deleteText, 80);

    }

    else{

      index = 0;

      setTimeout(typeSecond, 300);

    }

  }

  function typeSecond(){

    if(index < secondText.length){

      textElement.innerHTML += secondText.charAt(index);

      index++;

      setTimeout(typeSecond, 120);

    }

  }

  typeFirst();

}