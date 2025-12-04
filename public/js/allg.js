// Dieser Codeblock hier unten sorgt dafür, dass wenn du auf ein Körperbild
// klickst, das große Körperbild oben sich ändert.
// Gehe zum nächsten Kommentar, um da etwas zu ändern!

const koerper = document.querySelectorAll("#auswahl_koerper img");
const aktuellerKoerper = document.querySelector("#aktuellerKoerper");

koerper.forEach((bild) => {
  bild.addEventListener("click", function () {
    aktuellerKoerper.style.transition = "opacity 1s";
    aktuellerKoerper.style.opacity = "0";
    setTimeout(() => {
      aktuellerKoerper.src = bild.src;
      aktuellerKoerper.style.opacity = "1";

      //Diese Zahl hier unten (100) ist die Dauer der Transition in Millisekunden (1000ms = 1s)
      //Guck mal, was passiert, wenn du z.B. 1000 eingibst, aktualisierst und auf ein anderes Tier klickst!
   }, 100);
  });
});

// Knopf-Magic

const knopfBereich = document.querySelector("#knopfBereich");
const knopf = document.querySelector("#knopf");
knopf.addEventListener("click", function () {

  // Ändere mal die Farbe des kleinen farbigen Kästchens hier unten im Code.
  // Aktualisiere den Browser nach jeder Änderung und klicke auf den Knopf

  document.body.style.backgroundColor = "#8df0ca";

  // Der Knopf kann auch andere Dinge machen. Mache die zwei "//" ab den Zeilen unten weg
  // und schau, was passiert, wenn du den Knopf klickst (immer vorher Browser aktualisieren).

  // document.body.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
  // document.getElementById("knopfBereich").insertAdjacentHTML("afterend", "<p>Du hast den Knopf geklickt!</p>");
  // alert("Hallo! Du hast den Knopf geklickt!");
  // document.body.style.opacity = "0.5";
  // aktuellerKoerper.src = "Bilder/gif/surprise.gif";
  // knopfBereich.insertAdjacentHTML("afterend", "<p>Gib hier ein was du willst!</p>");
});




