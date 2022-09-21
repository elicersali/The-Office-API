alert('Working')

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterQuote = document.querySelector('input').value
    try{
        const response = await fetch(`https://the-office-api-production.up.railway.app/api/${characterQuote}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.quote
    }catch(error){
        console.log(error)
    }
}