let tittle = document.querySelector(".tittle")
let words = document.querySelectorAll(".typed-string h1")
let i = 0;
tittle.innerHTML = words[i].innerHTML

let changeWord = setInterval(() => {

    tittle.innerHTML = words[i + 1 ].innerHTML
    i += 1;

    if (i === words.length - 1) {
        i = -1;
    }
}, 3000);