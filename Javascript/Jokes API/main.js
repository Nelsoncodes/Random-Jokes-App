const btn = document.querySelector ('.btn')
const display = document.querySelector ('.display')

// console.log(btn);

async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":"application/json"
        }
    })
    const data =  await response.json()
    console.log(data);
    display.innerHTML = data.joke 
}


btn.addEventListener('click', fetchJoke)
