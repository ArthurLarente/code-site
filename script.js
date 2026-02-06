let value=0;
let type=0;
let total=0;
const nbofrolls=10;
function d4set(){ 
    value = 4;
    type = 4;
    document.getElementById("value").innerHTML = value;
}

function d6set(){ 
    value = 6;
    type = 6;
    document.getElementById("value").innerHTML = value;
}

function d8set(){ 
    value = 8;
    type = 8;
    document.getElementById("value").innerHTML = value;
}

function d10set(){ 
    value = 10;
    type = 10;
    document.getElementById("value").innerHTML = value;
}

function d12set(){ 
    value = 12;
    type = 12;
    document.getElementById("value").innerHTML = value;
}

function d20set(){ 
    value = 20;
    type = 20;
    document.getElementById("value").innerHTML = value;
}

function rolldice(){
        if(type == 4){
            value = Math.floor(Math.random()*4) + 1;
            document.getElementById("value").innerHTML = value;
        } else if(type == 6){
            value = Math.floor(Math.random()*6) + 1;
            document.getElementById("value").innerHTML = value;
        } else if(type == 8){
            value = Math.floor(Math.random()*8) + 1;
            document.getElementById("value").innerHTML = value;
        } else if(type == 10){
            value = Math.floor(Math.random()*10) + 1;
            document.getElementById("value").innerHTML = value;
        } else if(type == 12){
            value = Math.floor(Math.random()*12) + 1;
            document.getElementById("value").innerHTML = value;
        } else if(type == 20){
            value = Math.floor(Math.random()*20) + 1;
        document.getElementById("value").innerHTML = value;
        }
    total = total + value;
    document.getElementById("total").innerHTML = total;
}

function reset(){
    total = 0
    document.getElementById("total").innerHTML = total;
}