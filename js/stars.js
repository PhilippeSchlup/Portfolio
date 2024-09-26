document.addEventListener('DOMContentLoaded', () => {
    const numStars = 25; 
    const body = document.body;

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');     
        const top = Math.random() * 100; 
        const left = Math.random() * 100; 
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;
        const delay = Math.random() * 2; 
        star.style.animationDelay = `${delay}s`;
        body.appendChild(star);
    }
});
