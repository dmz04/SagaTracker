const timeline = {
    "THE FANTASTIC BEASTS ERA": [
        { title: "Fantastic Beasts and Where to Find Them (1926)" },
        { title: "The Crimes of Grindelwald (1927)" },
        { title: "The Secrets of Dumbledore (1932)" }
    ],
    "THE HOGWARTS YEARS (HARRY POTTER)": [
        { title: "Harry Potter and the Philosopher's Stone" },
        { title: "Harry Potter and the Chamber of Secrets" },
        { title: "Harry Potter and the Prisoner of Azkaban" },
        { title: "Harry Potter and the Goblet of Fire" },
        { title: "Harry Potter and the Order of the Phoenix" },
        { title: "Harry Potter and the Half-Blood Prince" },
        { title: "Harry Potter and the Deathly Hallows – Part 1" },
        { title: "Harry Potter and the Deathly Hallows – Part 2" }
    ],
    "THE LEGACY": [
        { title: "Harry Potter and the Cursed Child (Stage Play/Script)" }
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
