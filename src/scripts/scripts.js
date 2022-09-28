var input_btn = document.querySelector("#input-btn");
var input_textArea = document.querySelector("#input-textarea");
var output_textArea = document.querySelector("#output-textarea");
var inputText = "";
var outputText = "";
var endPointUrl =
"https://api.funtranslations.com/translate/morse.json?text=";
//   "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";

input_btn.addEventListener("click", () => {
  let finalURL = "";
  inputText = input_textArea.value;
  finalURL = endPointUrl + inputText;

  console.log("Final URL", finalURL);
  makeCallBackToApi(finalURL);
});

function makeCallBackToApi(finalURL) {
  fetch(finalURL)
    .then(response => response.json())
    .then(jsonResponse => {
      outputText =  jsonResponse?.contents?.translated;
      output_textArea.innerHTML = outputText
    })
    .catch((error) => {
      console.log("Error encountered : ", error);
    });
}
