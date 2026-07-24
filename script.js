function speak(){

let text =
document.getElementById("message").innerText;


let speech =
new SpeechSynthesisUtterance(text);


speech.rate = 1;

speech.pitch = 1.2;


window.speechSynthesis.speak(speech);

}
let medicines = [];

function addMedicine(){

let name =
document.getElementById("medicineName").value;

let time =
document.getElementById("medicineTime").value;


if(name==="" || time===""){

alert("Enter medicine details");

return;

}


medicines.push({
name:name,
time:time
});


showMedicines();

document.getElementById("medicineName").value="";
document.getElementById("medicineTime").value="";

}



function showMedicines(){

let list="";


medicines.forEach(function(medicine,index){

list +=

"<p>💊 "+medicine.name+
" ⏰ "+medicine.time+
" <button onclick='deleteMedicine("+index+")'>❌</button></p>";

});


document.getElementById("medicineList").innerHTML=list;

}



function deleteMedicine(index){

medicines.splice(index,1);

showMedicines();

}



let waterCount=0;


function addWater(){

if(waterCount<8){

waterCount++;

}


document.getElementById("water").innerHTML=

waterCount+" / 8 glasses";

}
function healthAdvice(){

let message =
"Great job! Keep tracking your water, sleep, exercise and medicines regularly. Stay consistent!";


document.getElementById("advice").innerHTML =
message;


speakText(message);

}



function speakText(text){

let speech =
new SpeechSynthesisUtterance(text);


speech.rate=1;

speech.pitch=1.2;


window.speechSynthesis.speak(speech);

}



function darkMode(){

document.body.classList.toggle("dark");

}



// Save medicine data

function saveData(){

localStorage.setItem(
"medicines",
JSON.stringify(medicines)
);

}



// Load medicine data

let saved =
localStorage.getItem("medicines");


if(saved){

medicines =
JSON.parse(saved);

showMedicines();

}
