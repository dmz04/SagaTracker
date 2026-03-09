const timeline = {
    "LE PRÉQUEL": [
        { title: "Hunger Games: La Ballade du serpent et de l'oiseau chanteur" }
    ],
    "LA TRILOGIE ORIGINALE": [
        { title: "Hunger Games (1)" },
        { title: "Hunger Games: L'Embrasement" },
        { title: "Hunger Games: La Révolte, partie 1" },
        { title: "Hunger Games: La Révolte, partie 2" }
    ]
};

const container = document.getElementById('timeline-container');

function updateStats() {
    const total = document.querySelectorAll('.movie-card').length;
    const watched = document.querySelectorAll('.movie-card.watched').length;
    const percent = Math.round((watched / total) * 100) || 0;

    document.getElementById('movies-count').innerText = `${watched} / ${total} DISTRICTS SECURED`;
    document.getElementById('progress-fill').style.width = `${percent}%`;
}

Object.keys(timeline).forEach(phase => {
    const section = document.createElement('div');
    section.className = 'phase-section';
    section.innerHTML = `<h2 class="phase-title">${phase}</h2>`;

    timeline[phase].forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="check-circle"></div>
            <div class="movie-info"><h3>${item.title}</h3></div>
        `;

        card.addEventListener('click', () => {
            card.classList.toggle('watched');
            updateStats();
        });

        section.appendChild(card);
    });
    container.appendChild(section);
});

updateStats();