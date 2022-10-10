const title = document.querySelector('.title');
const joao = document.querySelector('.name');
window.sr = ScrollReveal({reset: true, mobile: false});

const write = (title, name) => {
    const titleArray = title.innerHTML.split('');
    const nameArray = name.innerHTML.split('');
    title.innerHTML = '';
    name.innerHTML = ''
    setTimeout(() => {
        titleArray.forEach((letra, i) => {
            setTimeout(() => {
                title.innerHTML += letra;
            }, 200 * i);
        });

        
    }, 1000);

    setTimeout(() => {
        nameArray.forEach((letra, i) => {
            setTimeout(() => {
                name.innerHTML += letra;
            }, 200 * i);
        });
    }, 3000);
}

write(title, joao);

sr.reveal('.about', {
    delay: 200,
    duration: 500,
    origin: 'top',
    distance: '5rem'
});

sr.reveal('.tech-title', {
    delay: 30,
    duration: 500,
    origin: 'top',
    distance: '5rem'
});

sr.reveal('.bottom-left', {
    delay: 30,
    duration: 500,
    origin: 'top',
    distance: '5rem'
});

sr.reveal('.bottom-right', {
    delay: 30,
    duration: 500,
    origin: 'bottom',
    distance: '5rem'
});

sr.reveal('.icon', {
    delay: 30,
    duration: 800,
    origin: 'right',
    distance: '5rem'
});

sr.reveal('#first-row', {
    delay: 60,
    duration: 500,
    origin: 'right',
    distance: '7rem'
});

sr.reveal('#second-row', {
    delay: 90,
    duration: 500,
    origin: 'right',
    distance: '7rem'
});

sr.reveal('#third-row', {
    delay: 120,
    duration: 500,
    origin: 'right',
    distance: '7rem'
});
