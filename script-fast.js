const timeline = {
    "THE EARLY DAYS": [
        { title: "The Fast and the Furious (2001)" },
        { title: "The Turbo Charged Prelude (Short Film)" },
        { title: "2 Fast 2 Furious" },
        { title: "Better Luck Tomorrow (Optional)" }, // Souvent considéré comme l'origine de Han
        { title: "Los Bandoleros (Short Film)" },
        { title: "Fast & Furious (2009)" } // Le 4ème film s'appelle juste comme ça en VO
    ],
    "THE HEISTS & TOKYO DRIFT": [
        { title: "Fast Five" },
        { title: "Fast & Furious 6" },
        { title: "The Fast and the Furious: Tokyo Drift" }
    ],
    "THE GLOBAL SAGA": [
        { title: "Furious 7" },
        { title: "The Fate of the Furious" },
        { title: "Fast & Furious Presents: Hobbs & Shaw" },
        { title: "F9: The Fast Saga" },
        { title: "Fast X" }
    ]
};

const container = document.getElementById('timeline-container');

function updateStats() {
    const total = document.querySelectorAll('.movie-card').length;
    const watched = document.querySelectorAll('.movie-card.watched').length;
    const percent = Math.round((watched / total) * 100) || 0;

    document.getElementById('movies-count').innerText = `${watched} / ${total}`;
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
