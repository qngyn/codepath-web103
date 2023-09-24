const renderCharacters = async () => {
    const res = await fetch('/characters');
    const data = await res.json();

    const mainContent = document.getElementById('main-content');
    if (data) {
        data.map(character => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';

            const topContainer = document.createElement('div');
            topContainer.className = 'top-container';
            topContainer.style.backgroundImage = `url(${character.image})`;

            const bottomContainer = document.createElement('div');
            bottomContainer.className = 'bottom-container';

            const characterName = document.createElement('h3');
            characterName.textContent = character.name;
            bottomContainer.appendChild(characterName);

            const characterJapaneseName = document.createElement('h5');
            characterJapaneseName.textContent = character.japanesename;
            bottomContainer.appendChild(characterJapaneseName);

            const readMore = document.createElement('a');
            readMore.textContent = 'Read More >';
            readMore.setAttribute('role', 'button');
            readMore.href = `/characters/${character.id}`;
            bottomContainer.appendChild(readMore);

            characterCard.appendChild(topContainer);
            characterCard.appendChild(bottomContainer);
            mainContent.appendChild(characterCard);

        })

    } else {
        const noCharacters = document.createElement('h2')
        noCharacters.textContent = 'No characters found';
        mainContent.appendChild(noCharacters);
    }


}
const requestedUrl = window.location.href.split('/').pop()
if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderCharacters()
  }