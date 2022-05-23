const number = document.querySelector(".count");

const btn = document.querySelector(".generate");

btn.addEventListener("click", generateNumber);

function generateNumber() {
    //Math.random ist eine Methode um einen Zufallswert zwischen 0 und 1 zu generieren. (z.B. 0.83746, 0.83847, 0.56233 ...)
    //Wenn wir jetzt mit 1000 multiplizieren, erhalten wir einen Wert zwischen 0 to 999.99999. Um die 1000 einzuschließen, müssen wir am Ende noch eine 1 ergänzen.
    const rand = Math.floor(Math.random() * 1000  + 1);
    // Since Math.random gives us a lot of decimal numbers we will use Math.floor to remove the decimals and will get a whole number.
    //Da uns Math.random viele Dezimalzahlen erzeugt, verwenden wir Math.floor, um aus einer Dezimalzahl eine ganze Zahl zu erhalten.
    number.innerHTML = rand;
}
