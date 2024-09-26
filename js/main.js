function redirectToPortfolio() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'portfolio.html';
    }, 1000);
}

document.addEventListener('click', redirectToPortfolio);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        redirectToPortfolio();
    }
});