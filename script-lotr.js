const moviesData = {
    "The Hobbit Trilogy": [
        { id: "hob1", title: "An Unexpected Journey", year: 2012 },
        { id: "hob2", title: "The Desolation of Smaug", year: 2013 },
        { id: "hob3", title: "The Battle of the Five Armies", year: 2014 }
    ],
    "The Lord of the Rings": [
        { id: "lotr1", title: "The Fellowship of the Ring", year: 2001 },
        { id: "lotr2", title: "The Two Towers", year: 2002 },
        { id: "lotr3", title: "The Return of the King", year: 2003 }
    ]
};

const container = document.getElementById('timeline-container');

function refreshProgress() {
    let seenCount = 0;
    document.querySelectorAll('.movie-item').forEach(item => {
        if (localStorage.getItem(item.dataset.id) === 'true') {
            item.classList.add('seen');
            seenCount++;
        } else {
            item.classList.remove('seen');
        }
    });

    const percent = Math.round((seenCount / 6) * 100);
    document.getElementById('main-bar').style.width = percent + '%';
    document.getElementById('final-percentage').innerText = percent + '% COMPLETED';
    document.getElementById('final-count').innerText = `${seenCount} / 6 MOVIES SECURED`;
}

Object.keys(moviesData).forEach(era => {
    const eraTitle = document.createElement('h2');
    eraTitle.className = 'era-header';
    eraTitle.innerText = era;
    container.appendChild(eraTitle);

    const list = document.createElement('div');
    list.className = 'movie-list';

    moviesData[era].forEach(movie => {
        const item = document.createElement('div');
        item.className = 'movie-item';
        item.dataset.id = movie.id;
        item.innerHTML = `
            <div>
                <h3>${movie.title}</h3>
                <span>${movie.year}</span>
            </div>
            <div class="check-mark">✦</div>
        `;
        
        item.onclick = () => {
            const isSeen = localStorage.getItem(movie.id) === 'true';
            localStorage.setItem(movie.id, !isSeen);
            refreshProgress();
        };
        list.appendChild(item);
    });
    container.appendChild(list);
});

refreshProgress();