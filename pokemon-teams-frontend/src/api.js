const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

//get pokemons
const fetchPokemons = () =>
fetch(POKEMONS_URL).then(resp => resp.json())


//get trainers
const fetchTrainers = () =>
fetch(TRAINERS_URL).then(resp => resp.json())


//create pokemon
const createPokemon = pokemon =>
fetch(POKEMONS_URL, {
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify({
        species: pokemon.species,
        nickname: pokemon.nickname,
        trainer_id: pokemon.trainer_id
	})
}).then(resp => resp.json())


//delete a pokemon
const deletePokemon = pokemon =>
fetch(POKEMONS_URL + `/${pokemon.id}`, {
	method: 'DELETE'
}).then(resp => resp.json())


