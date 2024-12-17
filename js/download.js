document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('downloadCV');
    button.addEventListener('click', () => {
        let pdfUrl = 'pdf/CV_Philippe_Schlup_en.pdf';
        const urlParams = window.location.hash.substring(1);
        if (urlParams === 'pt') {
            pdfUrl = 'pdf/CV_Philippe_Schlup_pt.pdf'; 
        } 
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = pdfUrl.split('/').pop();
        link.click();
    });
});
