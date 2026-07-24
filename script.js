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
let healthData = {

fever:
"Fever: Rest, drink enough fluids and monitor your temperature. Seek medical advice if it is severe, persistent, or worrying.",


cold:
"Cold: Rest, stay hydrated and maintain hygiene. Consult a healthcare professional if symptoms become severe.",


cough:
"Cough: Drink enough fluids and avoid irritants like smoke. Get medical advice if it continues or becomes serious.",


headache:
"Headache: Rest, manage stress and stay hydrated. Seek medical advice for frequent or severe headaches.",


allergy:
"Allergy: Avoid known triggers and monitor symptoms. Consult a healthcare professional for proper evaluation.",


asthma:
"Asthma: Follow your doctor's plan and avoid triggers. Seek help if breathing problems become serious.",


diabetes:
"Diabetes: Healthy eating, activity and regular medical checkups are important. Follow your healthcare provider's advice.",


migraine:
"Migraine: Rest in a quiet place and track triggers. Consult a doctor for repeated or severe episodes.",


dehydration:
"Dehydration: Drink enough fluids and watch for signs of worsening condition.",


anemia:
"Anemia: A balanced diet and medical guidance are important. Testing may be needed to find the cause.",


sprain:
"Sprain: Rest the affected area and avoid activities that increase pain. Get medical advice for serious injuries.",


sorethroat:
"Sore throat: Drink fluids and rest your voice. Seek advice if symptoms are severe or persistent.",


stomachache:
"Stomach ache: Rest and stay hydrated. Get medical help for severe or ongoing pain.",


flu:
"Flu: Rest, drink fluids and monitor symptoms. Seek medical advice if symptoms are concerning.",


foodpoisoning:
"Food poisoning: Stay hydrated and seek medical help if symptoms are severe.",


eyeinfection:
"Eye problems need proper evaluation. Avoid touching eyes and seek professional advice if symptoms continue."

};



function healthSearch(){

let question =
document.getElementById("healthQuestion").value
.toLowerCase()
.replaceAll(" ","");


let answer =
healthData[question];


if(answer){

document.getElementById("healthAnswer").innerHTML =
"🤖 "+answer;


speakText(answer);


}

else{


document.getElementById("healthAnswer").innerHTML =

"🤖 I don't have information about this yet. Please consult a healthcare professional for reliable advice.";

}

}
