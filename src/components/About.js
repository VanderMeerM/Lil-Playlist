import React from "react";


function About() {
    return (
    <div>
        <main>
        <p></p>
        Dit project (<strong>Lill' playlist</strong>) was het vijfde project van de frontend-development-opleiding die ik in maart/april 2020 bij <a href="https://wincacademy.nl" target="_blank"> WincAcademy</a> heb voltooid. <p></p>
        De focus lag hier op het framework React. Het vergde even wat oefening daarmee vertrouwd te raken, maar zoals met alles geldt ook hier: al doende leert men en oefening baart kunst. <br></br>
        De voor de artiest en song in te vullen velden, zijn formulieren. Samen met het genre en de rating worden deze middels setState aan een state toegevoegd. De objecten van de state worden vervolgens in de HTML-tabel in het paars weergegeven. Abba's Dancing Queen is als voorbeeld vast toegevoegd.<p></p>
        Bovenstaande functionaliteit vormde de basis. Het project was uiteindelijk voldoende gemaakt als je een aantal extra features kon inbouwen die in totaal drie punten waard waren. <br></br>De features, waarvoor ik koos, waren elk 1 punt waard: <ul><option>sorteren op song, artist of rating (klik hiervoor op de betreffende headers)</option> <option>een extra pagina inbouwen met wat uitleg over dit project (zoals deze About-link) </option> <option>de mogelijkheid een rij te verwijderen </option></ul> Een andere, extra bonus (twee punten) kon worden verdiend met het inbouwen van een functionaliteit, waarmee op het genre kan worden gefilterd. Deze functie staat nog op mijn wensenlijstje.   
        </main>
            </div>
    )
}

export default About;