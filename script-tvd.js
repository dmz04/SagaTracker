const tvdData = [
    { season: 1, episodes: 22 },
    { season: 2, episodes: 22 },
    { season: 3, episodes: 22 },
    { season: 4, episodes: 23 },
    { season: 5, episodes: 22 },
    { season: 6, episodes: 22 },
    { season: 7, episodes: 22 },
    { season: 8, episodes: 16 }
];

const container = document.getElementById('seasons-container');

function init() {
    tvdData.forEach(s => {
        // Create Season Container
        const seasonSection = document.createElement('div');
        seasonSection.className = 'season-section';
        
        seasonSection.innerHTML = `
            <h2 class="season-title">Season ${s.season}</h2>
            <div class="episodes-grid" id="s${s.season}-grid"></div>
        `;
        
        container.appendChild(seasonSection);

        const grid = document.getElementById(`s${s.season}-grid`);

        // Create Episode Buttons
        for (let i = 1; i <= s.episodes; i++) {
            const epId = `tvd-s${s.season}-e${i}`;
            const isSeen = localStorage.getItem(epId) === 'true';
            
            const btn = document.createElement('button');
            btn.className = `ep-btn ${isSeen ? 'seen' : ''}`;
            btn.innerText = i;
            
            btn.onclick = () => {
                const nowSeen = btn.classList.toggle('seen');
                localStorage.setItem(epId, nowSeen);
                updateGlobalProgress();
            };
            grid.appendChild(btn);
        }
    });
    updateGlobalProgress();
}

function updateGlobalProgress() {
    const totalEpisodes = 171;
    const seen = document.querySelectorAll('.ep-btn.seen').length;
    const percent = Math.round((seen / totalEpisodes) * 100);
    
    const progressBar = document.getElementById('main-progress');
    const statsText = document.getElementById('stats');
    
    if(progressBar) progressBar.style.width = percent + '%';
    if(statsText) statsText.innerText = `${seen} / ${totalEpisodes} Episodes watched (${percent}%)`;
}

init();