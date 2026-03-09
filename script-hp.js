const timeline = {
    "L'ÈRE DES ANIMAUX FANTASTIQUES": [
        { title: "Les Animaux Fantastiques (1926)" },
        { title: "Les Crimes de Grindelwald (1927)" },
        { title: "Les Secrets de Dumbledore (1932)" }
    ],
    "LES ANNÉES POUDLARD (HARRY POTTER)": [
        { title: "Harry Potter à l'école des sorciers" },
        { title: "Harry Potter et la Chambre des secrets" },
        { title: "Harry Potter et le Prisonnier d'Azkaban" },
        { title: "Harry Potter et la Coupe de feu" },
        { title: "Harry Potter et l'Ordre du Phénix" },
        { title: "Harry Potter et le Prince de sang-mêlé" },
        { title: "Harry Potter et les Reliques de la Mort - Partie 1" },
        { title: "Harry Potter et les Reliques de la Mort - Partie 2" }
    ],
    "L'HÉRITAGE": [
        { title: "Harry Potter et l'Enfant maudit (Pièce/Script)" }
    ]
};

const container = document.getElementById('timeline-container');

function updateStats() {
    const allCards = document.querySelectorAll('.movie-card');
    const watchedCards = document.querySelectorAll('.movie-card.watched');
    const total = allCards.length;
    const watched = watchedCards.length;
    const percent = total > 0 ? Math.round((watched / total) * 100) : 0;

    const countText = document.getElementById('movies-count');
    const progressFill = document.getElementById('progress-fill');

    if(countText) countText.innerText = `${watched} / ${total} SORTILÈGES APPRIS`;
    if(progressFill) progressFill.style.width = `${percent}%`;
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