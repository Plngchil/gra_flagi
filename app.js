async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/region/europe')
    const json = await data.json()
    return json 
}

getData()
async function kraje(){
    const countries  = await getData()

    let body = document.querySelector('body')
    let div = document.getElementById('div')
    const input = document.querySelector('input')
    let button = document.getElementById("button")
    let country = Math.floor(Math.random()*countries.length)
    let good = document.getElementById('good')
    let bad = document.getElementById('bad')
    let goodAnsw = 0
    let badAnsw = 0
    let img = document.createElement('img')
    img.setAttribute("src", countries[country].flags.png)
    div.appendChild(img)
    let nazwa = document.createElement("h1")
    nazwa.innerHTML=countries[country].name.common
    div.appendChild(nazwa)
    let p = document.createElement('p')
    div.appendChild(p)
    console.log(countries[country].capital[0]);

    button.addEventListener('click', function(){
        console.log(input.value);
        if(input.value==countries[country].capital[0]){
            p.innerHTML="Zgadłeś!"
            goodAnsw = goodAnsw+1   
        }
        else if(input.value!=countries[country].capital[0]){
            p.innerHTML="Nie zgadłeś"
            badAnsw = badAnsw+1
        }
        good.innerHTML = `Poprawne:${goodAnsw}`
        bad.innerHTML = `Niepoprawne:${badAnsw}`
        if(badAnsw==5){
            alert(`Zgadłeś ${goodAnsw} stolic`)
        }
        else{
            img.setAttribute("src", countries[country].flags.png)
            nazwa.innerHTML=countries[country].name.common
            kraje()
        }
    })
}
kraje()