async function getData() {
    const data = await fetch('https://restcountries.com/v3.1/region/europe');
    const json = await data.json();
    return json;
}

async function kraje() {
    const countries = await getData();

    const div = document.getElementById('div');
    const input = document.querySelector('input');
    const button = document.getElementById("button");
    const good = document.getElementById('good');
    const bad = document.getElementById('bad');
    let goodAnsw = 0;
    let badAnsw = 0;
    let country;

    const img = document.createElement('img');
    const nazwa = document.createElement("h1");
    const p = document.createElement('p');

    div.appendChild(img);
    div.appendChild(nazwa);
    div.appendChild(p);

    function losujKraj() {
        country = Math.floor(Math.random() * countries.length);
        img.setAttribute("src", countries[country].flags.png);
        nazwa.innerHTML = countries[country].name.common;
        p.innerHTML = "";
        input.value = "";
    }
    function nowaGra() {
        goodAnsw = 0;
        badAnsw = 0;
        good.innerHTML = `Poprawne: ${goodAnsw}`;
        bad.innerHTML = `Niepoprawne: ${badAnsw}`;
        losujKraj();
    }
    nowaGra();

    button.addEventListener('click', function() {
        if (input.value === countries[country].capital[0]) {
            p.innerHTML = "Zgadłeś!";
            goodAnsw++;
        } else {
            p.innerHTML = "Nie zgadłeś";
            badAnsw++;
        }

        good.innerHTML = `Poprawne: ${goodAnsw}`;
        bad.innerHTML = `Niepoprawne: ${badAnsw}`;

        if (badAnsw === 5) {
            alert(`Zgadłeś ${goodAnsw} stolic. Nowa gra rozpocznie się automatycznie.`);
            nowaGra();
        } else {
            losujKraj();
        }
    });
}

kraje();
