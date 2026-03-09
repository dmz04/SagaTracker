const timeline = {
    "L'HISTOIRE DE BELLA & EDWARD": [
        { title: "Twilight, Chapitre I : Fascination" },
        { title: "Twilight, Chapitre II : Tentation" },
        { title: "Twilight, Chapitre III : Hésitation" }
    ],
    "L'ÉTERNITÉ": [
        { title: "Twilight, Chapitre IV : Révélation (Partie 1)" },
        { title: "Twilight, Chapitre V : Révélation (Partie 2)" }
    ]
};

const container = document.getElementById('timeline-container');

function updateStats() {
    const total = document.querySelectorAll('.movie-card').length;
    const watched = document.querySelectorAll('.movie-card.watched').length;
    const percent = Math.round((watched / total) * 100) || 0;

    const countLabel = document.getElementById('movies-count');
    const fillBar = document.getElementById('progress-fill');

    if(countLabel) countLabel.innerText = `${watched} / ${total} CHAPITRES TERMINÉS`;
    if(fillBar) fillBar.style.width = `${percent}%`;
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