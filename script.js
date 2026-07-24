function speak(){

let text =
document.getElementById("message").innerText;


let speech =
new SpeechSynthesisUtterance(text);


speech.rate = 1;

speech.pitch = 1.2;


window.speechSynthesis.speak(speech);

}
