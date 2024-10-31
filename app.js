async function getData(){
    const data = await fetch('https://restcountries.com/v3.1/all')
    const json = await data.json()
    
    console.log(json);

    return json 
}

getData()
async function kraje(){
    const data = await getData()
    console.log(data[0].name.common);
    
    let body = document.querySelector('body')
    let div = document.getElementById('div')
    
    
}
kraje()