document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('downloadCV');
    button.addEventListener('click', () => {
        const pdfUrl = 'pdf/cv.pdf'; 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'pdf/Philippe_Schlup_CV.pdf';
        link.click();
    });
});
