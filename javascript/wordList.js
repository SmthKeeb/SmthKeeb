var wordsTotal = 15;
var textspan = document.getElementById("text");

function createWordList(wordJson) {
    
    wordList= []; wordString = ""; textspan.innerHTML = "";
    wordList = getRandom(wordJson, wordsTotal); 
    wordString = wordList.join(" "); //gets rand 60 words from list and transforms to string

    for(var i = 0; i < wordString.length; i++) {
        if(wordString[i] != ' '){    
            node = document.createElement("letter");
        } //makes an HTML with every letter from the list
        else {
            node = document.createElement("space");
        }
        node.textContent = wordString[i];
        text.appendChild(node);
    }

}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}


