const timeline = {
    "CHAPTER 01: THE ORIGINS": [
        { title: "Wonder Woman (1914-1918)" },
        { title: "Wonder Woman 1984" },
        { title: "Man of Steel" }
    ],
    "CHAPTER 02: THE AGE OF HEROES": [
        { title: "Batman v Superman: Dawn of Justice" },
        { title: "Suicide Squad (2016)" },
        { title: "Zack Snyder's Justice League" },
        { title: "Aquaman" }
    ],
    "CHAPTER 03: NEW THREATS": [
        { title: "Shazam!" },
        { title: "Birds of Prey" },
        { title: "The Suicide Squad (2021)" },
        { title: "Peacemaker - Season 1" },
        { title: "Black Adam" }
    ],
    "CHAPTER 04: THE MULTIVERSE & ENDING": [
        { title: "Shazam! Fury of the Gods" },
        { title: "The Flash" },
        { title: "Blue Beetle" },
        { title: "Aquaman and the Lost Kingdom" }
    ],
    "ADDITIONAL MOVIES & SERIES (ELSEWORLDS)": [
        { title: "Joker (2019)" },
        { title: "Joker: Folie à Deux" },
        { title: "The Batman (2022)" },
        { title: "The Penguin (Series)" },
        { title: "Watchmen" }
    ]
};

const container = document.getElementById('timeline-container');

// Fonction pour créer la page dynamiquement
Object.keys(timeline).forEach(phase => {
    const section = document.createElement('div');
    section.className = 'phase-section';
    
    // Si c'est la section additionnelle, on peut lui donner un style un peu différent en CSS plus tard
    if(phase === "ADDITIONAL MOVIES & SERIES (ELSEWORLDS)") {
        section.classList.add('additional-content');
    }

    section.innerHTML = `<h2 class="phase-title">${phase}</h2>`;

    timeline[phase].forEach(item => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="check-circle"></div>
            <div class="movie-info">
                <h3>${item.title}</h3>
            </div>
        `;

        card.addEventListener('click', () => {
            card.classList.toggle('watched');
            updateStats();
        });

        section.appendChild(card);
    });
    container.appendChild(section);
});

// Calcul des statistiques
function updateStats() {
    const total = document.querySelectorAll('.movie-card').length;
    const watched = document.querySelectorAll('.movie-card.watched').length;
    const percent = Math.round((watched / total) * 100) || 0;

    // Mise à jour des textes
    const countDisplay = document.getElementById('movies-count');
    if (countDisplay) {
        countDisplay.innerText = `${watched} / ${total} FILES DECODED`;
    }

    // Mise à jour de la barre de progression
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = `${percent}%`;
    }
}

// Lancement au chargement
updateStats();