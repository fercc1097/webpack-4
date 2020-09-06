function render (data) {
    const pokemon = document.createElement('img');
    console.log(data);
    pokemon.setAttribute('src', data.sprites.front_default);
    document.body.append(pokemon);
}

export default render; 