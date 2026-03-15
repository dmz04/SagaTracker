const timeline = {
    "THE PREQUEL ERA": [
        { title: "Episode I: The Phantom Menace" },
        { title: "Episode II: Attack of the Clones" },
        { title: "The Clone Wars (Series/Movie)" },
        { title: "Episode III: Revenge of the Sith" }
    ],
    "REIGN OF THE EMPIRE": [
        { title: "The Bad Batch (Series)" },
        { title: "Solo: A Star Wars Story" },
        { title: "Obi-Wan Kenobi (Series)" },
        { title: "Andor (Series)" },
        { title: "Star Wars Rebels (Series)" },
        { title: "Rogue One: A Star Wars Story" },
        { title: "Episode IV: A New Hope" }
    ],
    "THE GALACTIC CIVIL WAR": [
        { title: "Episode V: The Empire Strikes Back" },
        { title: "Episode VI: Return of the Jedi" }
    ],
    "THE NEW REPUBLIC (MANDO-VERSE)": [
        { title: "The Mandalorian (Series)" },
        { title: "The Book of Boba Fett (Series)" },
        { title: "Ahsoka (Series)" }
    ],
    "THE RISE OF THE FIRST ORDER": [
        { title: "Episode VII: The Force Awakens" },
        { title: "Episode VIII: The Last Jedi" },
        { title: "Episode IX: The Rise of Skywalker" }
    ]
};
const container = document.getElementById('timeline-container');

function updateStats() {
    const allCards = document.querySelectorAll('.movie-card');
    const watchedCards = document.querySelectorAll('.movie-card.watched');
    const total = allCards.length;
    const watched = watchedCards.length;
    const percent = total > 0 ? Math.round((watched / total) * 100) : 0;

    document.getElementById('movies-count').innerText = `${watched} / ${total} MISSIONS COMPLETED`;
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
