// Fonction pour sauvegarder
function saveData(movieId) {
    // On récupère les éléments parents
    const card = document.querySelector(`[data-movie-id="${movieId}"]`);
    const rating = card.querySelector('.movie-rating').value;
    const note = card.querySelector('.movie-note').value;

    const movieData = {
        rating: rating,
        note: note
    };

    // Sauvegarde locale
    localStorage.setItem(movieId, JSON.stringify(movieData));
    alert("C'est noté !");
}

// Fonction pour charger les notes quand on ouvre la page
function loadData() {
    const allMovies = document.querySelectorAll('.movie-item');
    
    allMovies.forEach(movie => {
        const movieId = movie.getAttribute('data-movie-id');
        const savedData = localStorage.getItem(movieId);

        if (savedData) {
            const data = JSON.parse(savedData);
            movie.querySelector('.movie-rating').value = data.rating;
            movie.querySelector('.movie-note').value = data.note;
        }
    });
}

// Lancer le chargement au démarrage
window.onload = loadData;
