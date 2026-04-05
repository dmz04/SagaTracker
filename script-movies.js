document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.uni-card');
    
    // On fait apparaître les cartes les unes après les autres
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
function saveUniverseNote(uniName) {
    const note = document.getElementById(`rating-${uniName}`).value;
    localStorage.setItem(`note-saga-${uniName}`, note);
    alert(`Note pour ${uniName} enregistrée !`);
}

function loadUniverseNotes() {
    // Liste de tes sagas
    const sagas = ['marvel', 'dc', 'starwars', 'harrypotter', 'fast', 'hunger', 'twilight', 'jurassic', 'lotr'];
    
    sagas.forEach(saga => {
        const savedNote = localStorage.getItem(`note-saga-${saga}`);
        const input = document.getElementById(`rating-${saga}`);
        if (savedNote && input) {
            input.value = savedNote;
        }
    });
}

// Charge les notes dès que la page s'affiche
document.addEventListener('DOMContentLoaded', loadUniverseNotes);
