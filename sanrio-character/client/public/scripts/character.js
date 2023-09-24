const renderCharacter = async () => {
    const res = await fetch('/characters');
    const data = await res.json();
    const requestedID = parseInt(window.location.href.split('/').pop());
    const characterContent = document.getElementById('character-content')
    let character = data.find(character => character.id === requestedID);
    if (character) {
        document.getElementById('name').textContent = character.name;
        document.getElementById('jpname').textContent = `Japanese name: ${character.japanesename}`;
        document.getElementById('fullname').textContent = `Full name: ${character.fullname}`;
        document.getElementById('birthday').textContent = `Birthday: ${character.birthday}`;
        document.getElementById('universe').textContent = `Universe: ${character.universe}`;
        document.getElementById('image').src = character.image;
        document.getElementById('description').textContent = `Description: ${character.description}`;
        document.getElementById('debut').textContent = `Debut year: ${character.debutyear}`;
        
        document.title = `Sanrio Character - ${character.name}`;

    } else {
        const noCharacter = document.createElement('h2');
        noCharacter.textContent = 'No character found';
        characterContent.appendChild(noCharacter);
    }
}

renderCharacter();