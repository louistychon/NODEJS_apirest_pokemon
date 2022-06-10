//reponse en json et passage de l'objet

const express = require('express');
let pokemons = require('./mock-pokemon');
const app = express();
const morgan = require('morgan');
const {success} = require('./helper')
const port = 3000

//la methode next signifie que le traitement du middleware express est terminé
app.use(morgan('dev'));

app.get('/', (req, res) => res.json("Hello world !")) 

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = "un pokemon a été trouvé"
    res.json(success(message, pokemon))
})

app.get('/api/pokemons', (req, res) => {
    const message = `il y a ${pokemons.length} dans votre pokedex`
    res.json(success(message, pokemons))
    res.json(pokemons)
})

app.listen(port, () => console.log(`notre app node est démarréé sur http://localhost:${port}`))