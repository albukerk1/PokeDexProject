
import express,{Request, Response} from 'express'

const app = express();

app.set('view engine','ejs')
app.set('views','./src/views')

app.get('/', (req : Request, resp : Response) => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((value) => {
        return value.json()
    })
    .then((data) => {
        resp.render('index', data)
    })

})

app.get('/pokemon/:name', (req : Request, resp : Response) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)

    .then((value) => {
        return value.json()
    })
    .then((data) => {
        resp.render('PokemonView', { pokemon : data})
    })

})

app.listen(3000, () => {
    console.log('Servidor está online.')
})