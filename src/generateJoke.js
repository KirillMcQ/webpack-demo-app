import axois from 'axios'

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };
    
    axois.get('https://icanhazdadjoke.com', config).then(res => {
        document.getElementById('joke').innerHTML = res.data.joke
    })
}

export default generateJoke;