const renderCharacter = async () => {
    const res = await fetch('/characters');
    const data = await res.json();
    console.log(data)
    const requestedID = parseInt(window.location.href.split('/').pop());
    const characterContent = document.getElementById('character-content')
    let character = data.find(character => character.id === requestedID);
    if (gift) {
        document.getElementById('name').textContent = character.name;
        document.getElementById('image').src = character.image;
        document.getElementById('description').textContent = character.description;
        document.getElementById('debut').textContent = character.debut;
        document.title = `Sanrio Character - ${character.name}`;

    } else {
        const noCharacter = document.createElement('h2');
        noCharacter.textContent = 'No character found';
        characterContent.appendChild(noCharacter);
    }
}

renderCharacter();