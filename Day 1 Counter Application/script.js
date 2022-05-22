// Beginnen wir mit unserer Arbeit ;)

const count = document.querySelector(".count");

const add = document.querySelector(".add");

const subtract = document.querySelector(".subtract");

const reset_count = document.querySelector(".reset");

// Ein EventListener der bei einem Click-Ereignis addiert.
add.addEventListener("click", () => {
    count.innerHTML++;
    changeColor();
});

//Ein EventListener der bei einem Click-Ereignis substrahiert.
subtract.addEventListener("click", () => {
    count.innerHTML--;
    changeColor();
});

// //Ein EventListener der bei einem Click-Ereignis resetet. (i.e 0).
reset_count.addEventListener("click", () => {
    count.innerHTML = 0;
    changeColor();
})

// Eine Funktion mit einer if Abfrage um die Farben zu ändern.
function changeColor() {
    if (count.innerHTML < 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML > 0) {
        // Mit dem folgenden Code ändern wir die Farbe des Elements (element.style.color = "colorname");
        count.style.color = "black"
    } else {
        count.style.color = "white";
    }
}
