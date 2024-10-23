
document.addEventListener('DOMContentLoaded', () => {
    
    document.body.classList.add('fade-in');
    

    const toggleCheckbox = document.getElementById('checkbox');
    const body = document.body;


    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleCheckbox.checked = true;
        } else {
            body.classList.remove('dark-mode');
            toggleCheckbox.checked = false; 
        }
    }

    // Retrieve the saved theme from localStorage on page load
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme || 'light'); // Default to 'light' if nothing is saved

    // Add event listener for the toggle switch
    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); 
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); 
        }
    });
    const faders = document.querySelectorAll('.fade-in-effect');
    
    const appearOptions = {
        threshold: 0.2, // Change this to control when to trigger the effect
        rootMargin: '0px 0px -50px 0px' // Optional margin to trigger earlier or later
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove the class when not in view
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

});


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const imageFilenames = [
    "aws_ccp.png",
    "ccp_certificate.png",
    "aws_aip.png",
    "aip_certificate.png"
];

// Function to create the cards dynamically
function createCards() {
    const container = document.getElementById('certificate-container');
    
    imageFilenames.forEach((filename) => {
       
        const card = document.createElement('div');
        card.className = 'card';
        card.style = "background: none; border: none;";

        const circle = document.createElement('div');
        circle.className = 'circle';

        const img = document.createElement('img');
        img.className = 'certificate';
        img.src = 'img/certificates/' + filename; 
        img.alt = 'Certificate';
        img.onclick = function() {
            showImage(filename); 
        };

        circle.appendChild(img);

        card.appendChild(circle);

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createCards);

function showImage(filename) {
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-container";

    let image = document.createElement("img");
    image.src = "img/certificates/" + filename; 

    let closeButton = document.createElement("button");
    closeButton.className = "close-btn";

    let closeIcon = document.createElement("i");
    closeIcon.className = "fa fa-close";
    closeButton.appendChild(closeIcon);

    closeButton.onclick = function () {
        document.body.removeChild(imageContainer);
    };

    imageContainer.appendChild(closeButton);
    imageContainer.appendChild(image);
    document.body.appendChild(imageContainer);
}



const projects = [
    {
        img: 'img/chatapp.png', // Image source
        alt: 'Chat Application',
        description: 'This is a chat application built in React and Firebase featuring real-time messaging. In that app you can add friends and message them on the Global Chat or privately.',
        link: 'https://philippeschlup.github.io/chatapp/'
    },
    {
        img: 'img/ipm.png', // Image source
        alt: 'EShop',
        description: 'This is a e-shop application',
        link: 'https://github.com/PhilippeSchlup/techtron'
    },
];

// Function to create project cards dynamically
function createProjectCards() {
    console.log('Creating project cards...'); // Log when the function starts
    const container = document.getElementById('project-container');

    if (!container) {
        console.error('Container not found! Check if the project-container ID is correct.');
        return; // Stop execution if the container is not found
    }

    projects.forEach((project, index) => {
        console.log(`Creating card for project ${index + 1}:`, project); // Log project details
        
        const projectWrapper = document.createElement('div');
        projectWrapper.className = 'project-wrapper';

        const img = document.createElement('img');
        img.className = 'projects-imgs';
        img.src = project.img; 
        img.alt = project.alt; 

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'icon-wrapper';

        const infoIcon = document.createElement('i');
        infoIcon.className = 'fas fa-info-circle';
        infoIcon.onclick = function() {
            console.log(`Showing info for project: ${project.alt}`); // Log info icon click
            showProjectInfo(project.description, projectWrapper);
        };

        const linkIcon = document.createElement('a');
        linkIcon.href = project.link; 
        linkIcon.target = "_blank"; // Open link in a new tab
        const linkElement = document.createElement('i');
        linkElement.className = 'fas fa-link';
        linkIcon.appendChild(linkElement);

        // Append icons to the wrapper
        iconWrapper.appendChild(infoIcon);
        iconWrapper.appendChild(linkIcon);
        projectWrapper.appendChild(img);
        projectWrapper.appendChild(iconWrapper);

        // Project info div
        const infoDiv = document.createElement('div');
        infoDiv.className = 'project-info';
        infoDiv.textContent = project.description;

        projectWrapper.appendChild(infoDiv);
        container.appendChild(projectWrapper);
    });

    console.log('Project cards created successfully.'); // Log when the function ends
}

// Function to show project info
function showProjectInfo(description, projectWrapper) {
    const infoDiv = projectWrapper.querySelector('.project-info');
    infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
    console.log(`Project info toggled: ${infoDiv.style.display}`); // Log the visibility state
}

// Wait for the DOM to be fully loaded before running the createProjectCards function
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.'); // Log when DOM is ready
    createProjectCards();
    document.getElementById("projects").classList.add("show"); // Add fade-in effect
    console.log('Fade-in effect added to projects section.'); // Log fade-in effect addition
});



function dropFunct() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

// Get the language from the URL hash (e.g., #en, #es, etc.)
function getLanguageFromHash() {
    return window.location.hash.substring(1) || 'en'; // Default to English if no hash is present
}

// Change the language and update the page URL
function changeLanguage(lang) {
    window.location.hash = lang; // Update the URL hash
    setLanguage(); // Update the content
}

// Update the page based on the language selected
function setLanguage() {
    const lang = getLanguageFromHash();

    const languageMap = {
        'en': 'English',
        'es': 'Español',
        'fr': 'Français',
        'pt': 'Português'
    };

    const selectedLanguageText = languageMap[lang] || 'English';
    document.getElementById("selectedLanguage").innerHTML = `${selectedLanguageText} <i class="fa fa-caret-down"></i>`;

    // Update content based on language
    updateContentForLanguage(lang);
}

// Example function to update content on the page for each language
function updateContentForLanguage(lang) {
    const contentMap = {
        'en': {
            about: {
                title: "About me",
                text: "I'm a Computer Science student at the University of Algarve, I'm excited to use my knowledge in software development, algorithms, and problem-solving to tackle practical issues. I'm now looking for an internship or entry-level job where I can continue studying professionally and contributing. \n\nI have French and Portuguese as my native languages, and I also have advanced proficiency in English and Spanish. \n\nThroughout my studies, I’ve learned through various academic projects programming languages such as C, Java, Python, and JavaScript, I also learned mathematics and physics. I recently received the AWS Cloud Practitioner certification and am studying for the AWS AI Practitioner exam. \n\nI am fascinated by the fields of artificial intelligence, data science, and cloud computing. I’m excited to work, study, and contribute to new projects."
            },
            languages: {
                title: "Languages",
                text: [
                    { language: "French", proficiency: "Native" },
                    { language: "Portuguese", proficiency: "Native" },
                    { language: "English", proficiency: "Advanced" },
                    { language: "Spanish", proficiency: "Advanced" }
                ]
            }, 
            skills: {
                title: "Skills",
                text: ["C programming", "Java programming", "AWS", "Object-Oriented Programming", "Web development", "Problem Solving", "Python", "Mathematics", "Physics"]
            },
            projects: {
                title: "Projects",
                text: ""
            },
            certifications: {
                title: "Certifications",
                text: ""
            },
            contacts: {
                title: "Contacts",
                text: `
                    <a href="https://www.linkedin.com/in/philippe-schlup-78651a235/"><i class="fa-brands fa-linkedin responsive-icon"></i></a>
                    <a href="https://github.com/PhilippeSchlup"><i class="fa-brands fa-github responsive-icon"></i></a>
                    <a href="mailto:philippe.schlup@gmail.com"><i class="fas fa-envelope responsive-icon"></i></a>
                    <a href="tel:+351910194788"><i class="fas fa-phone responsive-icon"></i></a>
                `
            },
            downloadCV: "Download CV",
            lightMode: "Light Mode",
            darkMode: "Dark Mode",
            navbar: {
                skills: "Skills",
                projects: "Projects",
                certifications: "Certifications",
                about: "About me",
                languages: "Languages",
                contacts: "Contacts",
                language: "English"
            }
        },
        'es': {
            about: {
                title: "Sobre mí",
                text: "Soy estudiante de Ingeniería Informática en la Universidad del Algarve. Estoy emocionado de usar mis conocimientos en desarrollo de software, algoritmos y resolución de problemas para abordar cuestiones prácticas. Ahora estoy buscando una pasantía o un trabajo de nivel inicial donde pueda continuar estudiando profesionalmente y contribuir. \n\nTengo el francés y el portugués como idiomas nativos, y también tengo un nivel avanzado de inglés y español. \n\nA lo largo de mis estudios, he aprendido a través de varios proyectos académicos lenguajes de programación como C, Java, Python y JavaScript, también aprendí matemáticas y física. Recientemente obtuve la certificación de AWS Cloud Practitioner y estoy estudiando para el examen de AWS AI Practitioner. \n\nMe fascinan los campos de la inteligencia artificial, la ciencia de datos y la computación en la nube. Estoy emocionado de trabajar, estudiar y contribuir a nuevos proyectos."
            },
            languages: {
                title: "Idiomas",
                text: [
                    { language: "Francés", proficiency: "Nativo" },
                    { language: "Portugués", proficiency: "Nativo" },
                    { language: "Inglés", proficiency: "Avanzado" },
                    { language: "Español", proficiency: "Avanzado" }
                ]
            },   
            skills: {
                title: "Habilidades",
                text: ["Programación en C", "Programación en Java", "AWS", "Programación Orientada a Objetos", "Desarrollo Web", "Resolución de Problemas", "Python", "Matemáticas", "Física"]
            },
            projects: {
                title: "Proyectos",
                text: ""
            },            
            certifications: {
                title: "Certificaciones",
                text: ""
            },
            contacts: {
                title: "Contactos",
                text: `
                    <a href="https://www.linkedin.com/in/philippe-schlup-78651a235/"><i class="fa-brands fa-linkedin responsive-icon"></i></a>
                    <a href="https://github.com/PhilippeSchlup"><i class="fa-brands fa-github responsive-icon"></i></a>
                    <a href="mailto:philippe.schlup@gmail.com"><i class="fas fa-envelope responsive-icon"></i></a>
                    <a href="tel:+351910194788"><i class="fas fa-phone responsive-icon"></i></a>
                `
            },
            downloadCV: "Descargar CV",
            lightMode: "Modo Claro",
            darkMode: "Modo Oscuro",
            navbar: {
                skills: "Habilidades",
                projects: "Proyectos",
                certifications: "Certificaciones",
                about: "Sobre mí",
                languages: "Idiomas",
                contacts: "Contactos",
                language: "Español"
            }
        },
        'fr': {
            about: {
                title: "À propos de moi",
                text: "Je suis étudiant en informatique à l'Université de l'Algarve. Je suis ravi d'utiliser mes connaissances en développement logiciel, en algorithmes et en résolution de problèmes pour aborder des questions pratiques. Je recherche actuellement un stage ou un emploi de débutant où je pourrai continuer à étudier professionnellement et à contribuer. \n\nJ'ai le français et le portugais comme langues maternelles, et j'ai également une maîtrise avancée de l'anglais et de l'espagnol. \n\nTout au long de mes études, j'ai appris à travers divers projets académiques des langages de programmation tels que C, Java, Python et JavaScript, et j'ai également appris les mathématiques et la physique. J'ai récemment obtenu la certification AWS Cloud Practitioner et je me prépare pour l'examen AWS AI Practitioner. \n\nJe suis fasciné par les domaines de l'intelligence artificielle, de la science des données et de l'informatique en nuage. Je suis impatient de travailler, d'étudier et de contribuer à de nouveaux projets."
            },
            languages: {
                title: "Langues",
                text: [
                    { language: "Français", proficiency: "Natif" },
                    { language: "Portugais", proficiency: "Natif" },
                    { language: "Anglais", proficiency: "Avancé" },
                    { language: "Espagnol", proficiency: "Avancé" }
                ]
                
            }, 
            skills: {
                title: "Compétences",
                text: ["Programmation en C", "Programmation en Java", "AWS", "Programmation Orientée Objet", "Développement Web", "Résolution de Problèmes", "Python", "Mathématiques", "Physique"]
            },
            projects: {
                title: "Projets",
                text: ""
            },
            certifications: {
                title: "Certifications",
                text: ""
            },
            contacts: {
                title: "Contacts",
                text: `
                    <a href="https://www.linkedin.com/in/philippe-schlup-78651a235/"><i class="fa-brands fa-linkedin responsive-icon"></i></a>
                    <a href="https://github.com/PhilippeSchlup"><i class="fa-brands fa-github responsive-icon"></i></a>
                    <a href="mailto:philippe.schlup@gmail.com"><i class="fas fa-envelope responsive-icon"></i></a>
                    <a href="tel:+351910194788"><i class="fas fa-phone responsive-icon"></i></a>
                `
            },
            downloadCV: "Télécharger le CV",
            lightMode: "Mode Clair",
            darkMode: "Mode Sombre",
            navbar: {
                skills: "Compétences",
                projects: "Projets",
                certifications: "Certifications",
                about: "À propos de moi",
                languages: "Langues",
                contacts: "Contacts",
                language: "Français"
            }
        },
        'pt': {
            about: {
                title: "Sobre mim",
                text: "Sou estudante de Ciência da Computação na Universidade do Algarve. Estou empolgado para usar meu conhecimento em desenvolvimento de software, algoritmos e resolução de problemas para enfrentar questões práticas. Agora estou procurando um estágio ou emprego de nível inicial onde possa continuar estudando profissionalmente e contribuindo. \n\nTenho francês e português como línguas nativas, e também tenho proficiência avançada em inglês e espanhol. \n\nAo longo dos meus estudos, aprendi por meio de vários projetos acadêmicos linguagens de programação como C, Java, Python e JavaScript, e também estudei matemática e física. Recentemente, recebi a certificação AWS Cloud Practitioner e estou estudando para o exame AWS AI Practitioner. \n\nSou fascinado pelos campos de inteligência artificial, ciência de dados e computação em nuvem. Estou empolgado para trabalhar, estudar e contribuir para novos projetos."
            },
            languages: {
                title: "Línguas",
                text: [
                    { language: "Francês", proficiency: "Nativo" },
                    { language: "Português", proficiency: "Nativo" },
                    { language: "Inglês", proficiency: "Avançado" },
                    { language: "Espanhol", proficiency: "Avançado" }
                ]
                
            }, 
            skills: {
                title: "Competências",
                text: ["Programação em C", "Programação em Java", "AWS", "Programação Orientada a Objetos", "Desenvolvimento Web", "Resolução de Problemas", "Python", "Matemática", "Física"]
            },
            projects: {
                title: "Projetos",
                text: ""
            },            
            certifications: {
                title: "Certificações",
                text: ""
            },
            contacts: {
                title: "Contactos",
                text: `
                    <a href="https://www.linkedin.com/in/philippe-schlup-78651a235/"><i class="fa-brands fa-linkedin responsive-icon"></i></a>
                    <a href="https://github.com/PhilippeSchlup"><i class="fa-brands fa-github responsive-icon"></i></a>
                    <a href="mailto:philippe.schlup@gmail.com"><i class="fas fa-envelope responsive-icon"></i></a>
                    <a href="tel:+351910194788"><i class="fas fa-phone responsive-icon"></i></a>
                `
            },
            downloadCV: "Baixar CV",
            lightMode: "Modo Claro",
            darkMode: "Modo Escuro",
            navbar: {
                skills: "Competências",
                projects: "Projetos",
                certifications: "Certificações",
                about: "Sobre mim",
                languages: "Línguas",
                contacts: "Contactos",
                language: "Português"
            }
        }
    };

    const content = contentMap[lang] || contentMap['en']; // Fallback to English if not found

    document.getElementById("about").querySelector(".title").innerText = content.about.title;
    document.getElementById("about").querySelector(".text").innerText = content.about.text;

    document.getElementById("languages").querySelector(".title").innerText = content.languages.title;
    const languagesList = document.querySelector('.languages-list');
    languagesList.innerHTML = ''; // Clear existing content

    content.languages.text.forEach(({ language, proficiency }) => {
        const listItem = document.createElement('li');
        listItem.textContent = language; // Add language name
        
        // Create a proficiency badge
        const proficiencyBadge = document.createElement('span');
        proficiencyBadge.className = 'proficiency-badge';
        proficiencyBadge.textContent = proficiency; // Add proficiency level
        
        listItem.appendChild(proficiencyBadge); // Append badge to list item
        languagesList.appendChild(listItem); // Append list item to the list
    });

    document.getElementById("skills").querySelector(".title").innerText = content.skills.title;
    const skillsList = document.querySelector('.skills-list');
    skillsList.innerHTML = ''; 

    content.skills.text.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });

    document.getElementById("projects").querySelector(".title").innerText = content.projects.title;

    document.getElementById("certifications").querySelector(".title").innerText = content.certifications.title;
    // If you have content in certifications, you can update it here.

    document.getElementById("contacts").querySelector(".title").innerText = content.contacts.title;
    document.getElementById("contacts").querySelector(".text-div").innerHTML = content.contacts.text;

    // Update the download button text
    document.getElementById("downloadCV").innerText = content.downloadCV;

    // Update the theme switcher text
    document.getElementById("themeLabel").innerText = content.darkMode; // Default to Light Mode


    // Update navbar items
    const navbarItems = document.querySelectorAll('.navbar-nav .nav-link');
    const navLinks = content.navbar;
    
    navbarItems.forEach((item) => {
        const href = item.getAttribute('href').substring(1);
        if (navLinks[href]) {
            item.innerText = navLinks[href];
        }
    });
}

// Call the setLanguage function on page load to initialize the content
document.addEventListener('DOMContentLoaded', setLanguage);

// Also call setLanguage whenever the hash in the URL changes
window.addEventListener('hashchange', setLanguage);

// Example function to update the theme switcher
document.getElementById('checkbox').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.getElementById('themeLabel').innerText = contentMap[lang].darkMode;
    } else {
        document.getElementById('themeLabel').innerText = contentMap[lang].lightMode;
    }
});
