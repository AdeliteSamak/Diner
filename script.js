const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)
aCopy.querySelector("h2").textContent = "Russian Ringbread";
aCopy.querySelector("p:nth-child(3)").textContent = "Starter";
aCopy.getElementById("shortText").textContent = "Russisk ringbrød af Karapatisk mel.";
aCopy.getElementById("more").textContent = "Russisk ringbrød efter en klassisk opskrift fra Karapatien. Dejen blandes koldhæver 30 dage, inde brødet bages over bål. Meget sprødt, godt med Karapatisk bjerggedsmør.";
aCopy.querySelector("p:nth-child(6)").textContent = "29 DKK";

const whosYourDaddy = document.querySelector("main");

whosYourDaddy.appendChild(aCopy)

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }