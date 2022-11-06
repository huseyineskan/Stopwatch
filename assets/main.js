const minutesValue = document.querySelector('#minutes');
const secondsValue = document.querySelector('#seconds');
const tensValue = document.querySelector('#tens');
const start = document.querySelector('#btn-start');
const pause = document.querySelector('#btn-pause');
const reset = document.querySelector('#btn-reset');
const lap = document.querySelector('#btn-lap');
const lapList = document.querySelector('#lap-list');

var minutes = 59;
var seconds = 00;
var tens = 00;
var interval;

start.onclick = function(){
    interval = setInterval(timer, 1); //1000ms = 1sec
}

pause.onclick = function(){
    clearInterval(interval);
}

reset.onclick = allReset;
lap.onclick = lapAdd;

function timer(){
    tens++; // increase tens

    if(tens <= 9){
        tensValue.textContent = "0" + tens;
    }

    if(tens > 9){
        tensValue.textContent = tens;
    }

    if(tens > 99){
        seconds++; //increase second
        secondsValue.textContent = "0" + seconds;
        tens = 0;
        tensValue.textContent = "0" + tens;
    }

    if(seconds > 9){
        secondsValue.textContent = seconds;
    }

    if(seconds > 59){
        minutes++; //increase minute
        
        if(minutes <= 9){
            minutesValue.textContent = "0" + minutes;
        }
        else{
            minutesValue.textContent = minutes;
        }
        
        seconds = 0;
        secondsValue.textContent = "0" + seconds;
    }
    
    if(minutes > 59){
        allReset(); // Reset all value
    }
}

function allReset(){
    tens = "00";
    seconds = "00";
    minutes = "00";
    tensValue.textContent = tens;
    secondsValue.textContent = seconds;
    minutesValue.textContent = minutes;
    lapList.textContent = "";
}

function lapAdd(){
    let li = document.createElement('li');
    li.textContent = `${minutesValue.textContent}:${secondsValue.textContent}:${tensValue.textContent}`;

    lapList.appendChild(li);
    
}