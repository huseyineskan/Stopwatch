const secondsValue = document.querySelector('#seconds');
const tensValue = document.querySelector('#tens');
const start = document.querySelector('#btn-start');
const pause = document.querySelector('#btn-pause');
const reset = document.querySelector('#btn-reset');

var seconds = Number(00);
var tens = Number(00);
var value = Number();

start.onclick = function(){
    timer();
}


function timer(){
    value++;
    
    if(value < 9){
        tensValue.innerHTML = "0" + value;
    }
    if(value > 9){
        tensValue.innerHTML = value;
    }
    if(value > 99){
        secondsValue.innerHTML = "0" + value;
    }

}