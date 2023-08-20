engbtn.addEventListener("click", () => {getWords("english"); input.value="";});
robtn.addEventListener("click", () => {getWords("romanian"); input.value="";});

async function getWords(language) {
    res = await fetch(
        `https://horix21.github.io/SomethingType/js/${language}_words.json`
    );
    wordJson = await res.json();


    createWordList(wordJson);
}

getWords("english");