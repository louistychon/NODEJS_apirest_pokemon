const express = require('express');
let pokemons = require('./mock-pokemon');

const app = express(); //instance du serveur web sur laquelle va fonctionner notre API rest
const port = 3000

app.get('/', (req, res) => res.send("Hello, Express 3!")) //fournir une réponse au client lorsque le point est appelé res = response, req = requete. La méthode send permet de retourner le message Hello, Express au client.

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    res.send("Hello, vous avez demandé le pokemon " + id + " " + pokemon.name + " <img src="+pokemon.picture+">")
})

app.get('/api/pokemons', (req, res) => {
    res.send("Le nombre de pokemon dans le pokedex est de : " + pokemons.length
    )
})

app.listen(port, () => console.log(`notre app node est démarréé sur http://localhost:${port}`))


// attention, les données renvoyées sont des chaines de caractères et pas du JSON (pas opti)