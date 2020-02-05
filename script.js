const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)

aCopy.querySelector("h2").textContent = "Russian Ringbread";
aCopy.querySelector("p:nth-child(2)").textContent = "Starter";
aCopy.querySelector("p:nth-child(3)").textContent = "Russisk ringbrød af Karapatisk mel";
aCopy.querySelector("p:nth-child(4)").textContent = "29 DKK";

const whosYourDaddy = document.querySelector("main");

whosYourDaddy.appendChild(aCopy)
