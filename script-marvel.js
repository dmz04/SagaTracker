const timeline = {
    "1931 - 1995": [
        { title: "Agent of SHIELD – Season 7" },
        { title: "Captain America: The First Avenger" },
        { title: "One Shot: Agent Carter" },
        { title: "Agent Carter – Season 1" },
        { title: "Agent Carter – Season 2" },
        { title: "Fantastic Four: First Steps" },
        { title: "Captain Marvel" }
    ],
    "2008 - 2012": [
        { title: "Iron Man" },
        { title: "Iron Man 2" },
        { title: "The Incredible Hulk" },
        { title: "One Shot: The Consultant" },
        { title: "One Shot: A funny thing happened on the way to Thor's hammer" },
        { title: "Thor" },
        { title: "Avengers" },
        { title: "One Shot: Item 47" }
    ],
    "2013 - 2015": [
        { title: "Iron Man 3" },
        { title: "One Shot: All Hail the King" },
        { title: "Agents of SHIELD – Season 1 ep.1-7" },
        { title: "Thor: The Dark World" },
        { title: "Agents of SHIELD – Season 1 ep.8-16" },
        { title: "Captain America: The Winter Soldier" },
        { title: "Agents of SHIELD – Season 1 ep.17-22" },
        { title: "Guardians of the Galaxy" },
        { title: "Guardians of the Galaxy Vol. 2" },
        { title: "I am Groot" },
        { title: "Daredevil - Season 1" },
        { title: "Jessica Jones Season 1" },
        { title: "Agents of SHIELD – Season 2 ep.1-19" },
        { title: "Avengers: Age of Ultron" },
        { title: "Agents of SHIELD – Season 2 ep.20-22" },
        { title: "Ant-Man" },
        { title: "Daredevil - Season 2" },
        { title: "Luke Cage - Season 1" },
        { title: "Agents of SHIELD – Season 3 ep.1-10" }
    ],
    "2016": [
        { title: "Agents of SHIELD – Season 3 ep.11-19" },
        { title: "Captain America: Civil War" },
        { title: "Agents of SHIELD – Season 3 ep.20-22" },
        { title: "Agents of SHIELD – Season 4 ep.1-8" },
        { title: "Agents of SHIELD – SlingShot" },
        { title: "Agents of SHIELD – Season 4 ep.9-22" },
        { title: "Iron Fist" },
        { title: "The Defenders" },
        { title: "Spider-Man: Homecoming" },
        { title: "The Punisher" },
        { title: "Black Widow" },
        { title: "Doctor Strange" }
    ],
    "2017 - 2018": [
        { title: "Agents of SHIELD – Season 5 ep.1-19" },
        { title: "Black Panther" },
        { title: "Jessica Jones – Season 2" },
        { title: "Inhumans – Season 1" },
        { title: "Luke Cage – Season 2" },
        { title: "Iron Fist – Season 2" },
        { title: "Daredevil – Season 3" },
        { title: "The Punisher – Season 2" },
        { title: "Jessica Jones – Season 3" },
        { title: "Runaways – Seasons 1 & 2" },
        { title: "Cloak and Dagger – Seasons 1 & 2" },
        { title: "Runaways – Season 3" },
        { title: "Thor: Ragnarok" },
        { title: "Agents of SHIELD – Season 5 ep.20-22" },
        { title: "Ant-Man and the Wasp" },
        { title: "Avengers: Infinity War" },
        { title: "Agents of SHIELD – Season 6" }
    ],
    "2018 - 2027": [
        { title: "Avengers: Endgame" },
        { title: "WandaVision" },
        { title: "Loki" },
        { title: "Loki – Season 2" },
        { title: "Shang-Chi and The Legend of the Ten Rings" },
        { title: "Deadpool and Wolverine" },
        { title: "The Falcon and the Winter Soldier" },
        { title: "Spider-Man: Far From Home" },
        { title: "Spider-Man: No Way Home" },
        { title: "Eternals" },
        { title: "Hawkeye" },
        { title: "Doctor Strange in the Multiverse of Madness" },
        { title: "Moon Knight" },
        { title: "Black Panther: Wakanda Forever" },
        { title: "Echo" },
        { title: "She-Hulk" },
        { title: "Ms. Marvel" },
        { title: "The Marvels" },
        { title: "Thor: Love and Thunder" },
        { title: "Ironheart" },
        { title: "Werewolf By Night" },
        { title: "Guardians of the Galaxy Holiday Special" },
        { title: "Ant-Man and the Wasp: Quantumania" },
        { title: "Guardians of the Galaxy Vol. 3" },
        { title: "Secret Invasion" },
        { title: "Agatha All Along" },
        { title: "Daredevil: Born Again – Season 1" },
        { title: "Captain America: Brave New World" },
        { title: "Thunderbolts" }
    ]
};

const container = document.getElementById("timeline");

// 1. Fonction pour tout mettre à jour (Barres locales + Compteur global)
function updateAllStats() {
    let globalSeen = 0;
    let globalTotal = 0;

    // Mise à jour de chaque section
    document.querySelectorAll('.section-header').forEach(header => {
        const period = header.querySelector('.section-title').textContent;
        const row = header.nextElementSibling; // La div timeline-row
        
        const total = timeline[period].length;
        const seen = row.querySelectorAll('.card.seen').length;
        const percentage = (seen / total) * 100;
        
        header.querySelector('.progress-bar').style.width = percentage + "%";
        header.querySelector('.status-text').textContent = `${seen} / ${total} seen`;

        globalSeen += seen;
        globalTotal += total;
    });

    // Mise à jour du compteur final
    const finalCounter = document.getElementById('final-total-counter');
    const finalPercentText = document.getElementById('final-percentage');
    
    if (finalCounter) finalCounter.textContent = `${globalSeen} / ${globalTotal}`;
    if (finalPercentText) {
        const globalPercent = Math.round((globalSeen / globalTotal) * 100) || 0;
        finalPercentText.textContent = `${globalPercent}% of MCU completed`;
    }
}

// 2. Génération de la Timeline
Object.keys(timeline)
    .sort((a, b) => parseInt(a.split(" ")[0]) - parseInt(b.split(" ")[0]))
    .forEach(period => {
        const items = timeline[period];

        // Création du Header avec Barre
        const sectionHeader = document.createElement("div");
        sectionHeader.className = "section-header";
        sectionHeader.innerHTML = `
            <h2 class="section-title">${period}</h2>
            <div class="period-status">
                <span class="status-text">0 / ${items.length} seen</span>
                <div class="progress-container"><div class="progress-bar"></div></div>
            </div>
        `;
        container.appendChild(sectionHeader);

        const row = document.createElement("div");
        row.className = "timeline-row";
        const slider = document.createElement("div");
        slider.className = "slider";

        // Création des cartes
        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            const filmId = item.title.replace(/\s+/g, '-').toLowerCase();

            if (localStorage.getItem(filmId) === "seen") {
                card.classList.add("seen");
            }

            card.innerHTML = `
                <div class="check-badge">✓</div>
                <img src="${item.poster}" alt="${item.title}">
                <h4>${item.title}</h4>
            `;

            card.addEventListener('click', () => {
                card.classList.toggle('seen');
                card.classList.contains('seen') ? 
                    localStorage.setItem(filmId, "seen") : 
                    localStorage.removeItem(filmId);
                
                updateAllStats(); // Recalcule tout au clic
            });

            slider.appendChild(card);
        });

        row.appendChild(slider);
        container.appendChild(row);
    });

// 3. Lancement initial au chargement de la page
updateAllStats();
