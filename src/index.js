function generatePoem(event) {
  //step 3
  event.preventDefault(); // step 4

  new Typewriter("#poem", {
    //step 5; add code in html
    strings: "La tombe dit à la rose", //add these variables
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form"); //step 1
poemFormElement.addEventListener("submit", generatePoem); //step 2
