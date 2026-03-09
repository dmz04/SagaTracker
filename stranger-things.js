const strangerThingsData = [
    { id: "st-s1", title: "Season 1", info: "8 Episodes" },
    { id: "st-s2", title: "Season 2", info: "9 Episodes" },
    { id: "st-s3", title: "Season 3", info: "8 Episodes" },
    { id: "st-s4", title: "Season 4", info: "9 Episodes" }
];

const grid = document.getElementById('tracker-grid');
const progressBar = document.getElementById('progress-bar');

// Création des cartes
strangerThingsData.forEach(season => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <div class="info">
            <h3>${season.title}</h3>
            <span>${season.info}</span>
        </div>
        <input type="checkbox" id="${season.id}" class="st-check">
    `;
    grid.appendChild(card);
});

const checkboxes = document.querySelectorAll('.st-check');

function updateProgress() {
    const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
    const percentage = Math.round((checkedCount / checkboxes.length) * 100);
    
    progressBar.style.width = percentage + "%";
    progressBar.textContent = percentage + "%";

    // Sauvegarde locale
    const savedStates = {};
    checkboxes.forEach(cb => {
        savedStates[cb.id] = cb.checked;
    });
    localStorage.setItem('sagatraker-st', JSON.stringify(savedStates));
}

// Charger la sauvegarde
function loadProgress() {
    const saved = JSON.parse(localStorage.getItem('sagatraker-st'));
    if (saved) {
        checkboxes.forEach(cb => {
            if (saved[cb.id] !== undefined) {
                cb.checked = saved[cb.id];
            }
        });
        updateProgress();
    }
}

checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));

// Initialisation
loadProgress();