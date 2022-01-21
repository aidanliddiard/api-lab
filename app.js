import { getPokedex, getRickAndMortyPeople } from './fetch.js';

const template = document.querySelector('#template');
const selectEl = document.querySelector('select');
const list = document.querySelector('#list');

// console.log(template, selectEl);

async function loadPokedex() {
    const pokedex = await getPokedex();
    list.classList.add('pokemon');
    for (let pokemon of pokedex) {
        //console.log(pokemon);
        const clone = template.content.cloneNode(true);
        const name = clone.querySelector('h2');
        const type = clone.querySelector('h6');
        const ability = clone.querySelector('p');
        const image = clone.querySelector('img');

        //console.log(name, type, ability, image);

        name.textContent = 'Name: ' + pokemon.pokemon;
        type.textContent = 'Type: ' + pokemon.type_1;
        ability.textContent = 'Ability: ' + pokemon.ability_1;
        image.src = pokemon.url_image;
        image.alt = pokemon.pokedex;

        list.appendChild(clone);
    }
}

loadPokedex();