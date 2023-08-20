var input = document.getElementById("input");
var speed = document.getElementById("wpm");
var engbtn = document.getElementById("eng");
var robtn = document.getElementById("ro");
input.value = ""; input.oninput = getVal; input.focus();
var wordsTyped = 0; var wordsCorrect = 0; var wordsWrong = 0;

var start = false; var startTime = 0; var time = 0; var WPM = 0;

function getVal() {
    startTest();

    if((input.value).includes(" ") && wordsTyped < wordsTotal){
        
        input.value = input.value.slice(0, -1)

        if((input.value)  == wordList[wordsTyped]){
            wordsTyped++;
            input.value = "";
        }   

        
    }
    else if(input.value == wordList[wordsTyped] && wordsTyped == wordsTotal-1){
        endTest();
    }
}

function endTest() {
    input.value = "";
    input.readOnly = true;
    time = new Date().getTime() - startTime;
    console.log(time);
    wordsTyped++;
    calcWPM();
}

function startTest() {
    if (start == false && input.value != "") {
        startTime = new Date().getTime();
        start = true;
    }
}

function calcWPM() {
    WPM = (wordsTyped *(60 / (time / 1000))).toFixed(2)
    speed.innerHTML = `WPM: ${WPM}`;
}