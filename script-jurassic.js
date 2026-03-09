const movies = {
    "PARK ERA": [
        { id: "jp1", title: "Jurassic Park", year: 1993 },
        { id: "jp2", title: "The Lost World", year: 1997 },
        { id: "jp3", title: "Jurassic Park III", year: 2001 }
    ],
    "WORLD ERA": [
        { id: "jw1", title: "Jurassic World", year: 2015 },
        { id: "jw2", title: "Fallen Kingdom", year: 2018 },
        { id: "jw3", title: "Dominion", year: 2022 }
    ]
};

const container = document.getElementById('timeline-container');

function refresh() {
    let seen = 0;
    document.querySelectorAll('.movie-card-item').forEach(card => {
        if(localStorage.getItem(card.dataset.id) === 'true') {
            card.classList.add('seen');
            seen++;
        } else {
            card.classList.remove('seen');
        }
    });

    const percent = Math.round((seen / 6) * 100);
    document.getElementById('main-bar').style.width = percent + '%';
    document.getElementById('final-percentage').innerText = percent + '%';
    document.getElementById('final-count').innerText = seen + ' / 6';
}

Object.keys(movies).forEach(era => {
    const eraTitle = document.createElement('h2');
    eraTitle.className = 'era-title';
    eraTitle.innerText = era;
    container.appendChild(eraTitle);

    const grid = document.createElement('div');
    grid.className = 'movie-grid';

    movies[era].forEach(m => {
        const card = document.createElement('div');
        card.className = 'movie-card-item';
        card.dataset.id = m.id;
        card.innerHTML = `
            <div class="card-content">
                <span class="movie-id">ID: ${m.id.toUpperCase()}</span>
                <h3>${m.title}</h3>
                <span class="movie-year">RELEASE: ${m.year}</span>
                <div class="status-indicator">NOT SECURED</div>
            </div>
        `;
        
        card.onclick = () => {
            const current = localStorage.getItem(m.id) === 'true';
            localStorage.setItem(m.id, !current);
            refresh();
        };
        grid.appendChild(card);
    });
    container.appendChild(grid);
});

refresh();