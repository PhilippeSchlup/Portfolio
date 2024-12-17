document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('downloadCV');
    button.addEventListener('click', () => {
        const pdfUrl = 'pdf/cv.pdf'; 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'pdf/CV_Philippe_Schlup_en.pdf';
        link.click();
    });
});
