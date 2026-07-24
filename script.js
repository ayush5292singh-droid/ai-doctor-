// ===============================
// Health Tracker AI Robot
// Complete script.js
// ===============================


// Robot Voice

function speakText(text){

let speech = new SpeechSynthesisUtterance(text);

speech.rate = 1;
speech.pitch = 1.2;

window.speechSynthesis.speak(speech);

}



function speak(){

let text =
document.getElementById("message").innerText;

speakText(text);

}



// ===============================
// Medicine Tracker
// ===============================


let medicines = [];


function addMedicine(){

let name =
document.getElementById("medicineName").value;

let time =
document.getElementById("medicineTime").value;


if(name==="" || time===""){

alert("Enter medicine name and time");

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


medicines.forEach(function(m,index){


list +=

"<p>💊 "+m.name+
" ⏰ "+m.time+
" <button onclick='deleteMedicine("+index+")'>❌</button></p>";


});


document.getElementById("medicineList").innerHTML=list;

}



function deleteMedicine(index){

medicines.splice(index,1);

showMedicines();

}



// ===============================
// Water Tracker
// ===============================


let waterCount = 0;


function addWater(){

if(waterCount < 8){

waterCount++;

}


document.getElementById("water").innerHTML =

waterCount+" / 8 glasses";


}



// ===============================
// Health Advice
// ===============================


function healthAdvice(){

let message =
"Remember to maintain healthy habits, drink enough water, sleep well and follow your healthcare provider's advice.";


document.getElementById("advice").innerHTML =
message;


speakText(message);

}



// ===============================
// Disease Information Robot
// ===============================


let healthData = {


fever:
"Fever: Rest, drink enough fluids and monitor your temperature. Seek medical advice if it is severe or continues.",


cold:
"Cold: Rest, stay hydrated and maintain hygiene.",


cough:
"Cough: Drink fluids and avoid irritants. Seek advice if it continues.",


headache:
"Headache: Rest, stay hydrated and manage stress. Get medical advice for frequent severe headaches.",


allergy:
"Allergy: Avoid known triggers and ask a healthcare professional for proper guidance.",


asthma:
"Asthma: Avoid triggers and follow your doctor's plan.",


diabetes:
"Diabetes: Healthy habits and regular medical checkups are important.",


migraine:
"Migraine: Rest in a quiet place and track possible triggers.",


dehydration:
"Dehydration: Drink enough fluids and watch for worsening symptoms.",


anemia:
"Anemia: A balanced diet and medical guidance are important."


};



function healthSearch(){


let input =

document.getElementById("healthQuestion").value.toLowerCase();


let answer = "I don't have information about this yet. Please consult a healthcare professional for medical advice.";



for(let disease in healthData){


if(input.includes(disease)){


answer = healthData[disease];

break;


}


}



document.getElementById("healthAnswer").innerHTML =

"🤖 "+answer;


speakText(answer);


}



// ===============================
// Dark Mode
// ===============================


function darkMode(){

document.body.classList.toggle("dark");

}
