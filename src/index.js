function displayPoem(response) {
  new Typewriter("#poem", {
    //step 5; add code in html
    strings: response.data.answer, //add these variables
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault(); // step 4
  //step 3
  //display the generated poem

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "61dfa07e8o8462teba3fadad30e70d77"; //step 6; build api url ad api key
  //step 7; make a call to the api url
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem); //step 7
}
let poemFormElement = document.querySelector("#poem-generator-form"); //step 1
poemFormElement.addEventListener("submit", generatePoem); //step 2
