const timeline = {
    "THE BELLA & EDWARD STORY": [
        { title: "Twilight" },
        { title: "The Twilight Saga: New Moon" },
        { title: "The Twilight Saga: Eclipse" }
    ],
    "ETERNITY": [
        { title: "The Twilight Saga: Breaking Dawn – Part 1" },
        { title: "The Twilight Saga: Breaking Dawn – Part 2" }
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
