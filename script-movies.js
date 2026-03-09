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