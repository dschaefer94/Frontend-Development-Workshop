
const koerper = document.querySelectorAll("#auswahl_koerper img");
const aktuellerKoerper = document.querySelector("#aktuellerKoerper")

koerper.forEach((bild) => {
  bild.addEventListener("click", function ()
  {
    aktuellerKoerper.style.transition = "opacity 1s";
    aktuellerKoerper.style.opacity = "0";
    setTimeout(() => {
    aktuellerKoerper.src = bild.src;
    aktuellerKoerper.style.opacity = "1";
    
    //Diese Zahl hier unten in Zeile 17 ist die Dauer der Transition in Millisekunden (1000ms = 1s),
    //wenn du auf ein anderes Tier klickst.
    //Du kannst sie größer machen!
    },100);
  });
});




