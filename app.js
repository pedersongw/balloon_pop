let thing = window.document.getElementById("balloon");
let compStyles = window.getComputedStyle(thing);
let parsed = compStyles.getPropertyValue('font-size');
let othered = parseInt(parsed, 10).toString();

let currentSize = othered;
let didExplode = false;

document.addEventListener("keydown", function (event) {
  let thing = event.code;
    if(thing == "ArrowUp" && currentSize < 185 && didExplode == false) {
      event.preventDefault();
      currentSize = (Math.floor(Number(currentSize) * 1.1));
      let stringed = currentSize.toString();
    document.getElementById("balloon").style.fontSize = stringed + "px";
    } else if (currentSize > 185 || didExplode == true){
      document.getElementById("balloon").style.display = "none";
      document.getElementById("explosion").style.display = "block";
      didExplode = true;
    } else if(thing == "ArrowDown") {
      event.preventDefault();
      if(currentSize > 10) {
      currentSize = (Math.floor(Number(currentSize) * 0.9));
      let otherStringed = currentSize.toString();
      document.getElementById("balloon").style.fontSize = otherStringed + "px";
    } else {
      currentSize = 10;
    }
  }
});