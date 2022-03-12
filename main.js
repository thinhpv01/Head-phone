const toggle = document.getElementById('nav-toggle'),
    menu = document.getElementById('nav-menu'),
    close = document.getElementById('nav-close'),
    changeTheme = document.getElementById('change-theme');

changeTheme.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark-theme')
    changeTheme.classList.toggle('fa-moon')
    changeTheme.classList.toggle('fa-sun')
})

toggle.addEventListener('click', () => {
    menu.classList.add('show-menu');
})

close.addEventListener('click', () => {
    menu.classList.remove('show-menu')
})

document.querySelectorAll('.nav__link').forEach(n => {
    n.addEventListener('click', () => {
        menu.classList.remove('show-menu')
    })
})

const sections = document.querySelectorAll('section[id]')
console.log(sections)

window.addEventListener('scroll', () => {
    const scrollY = this.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    else
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    })

    if(scrollY > 50)
        document.querySelector('.header').classList.add('scroll-header')
    else
        document.querySelector('.header').classList.remove('scroll-header')
    
    if(scrollY > 200)
        document.getElementById('scroll-top').classList.add('show-scroll-top')
    else
        document.getElementById('scroll-top').classList.remove('show-scroll-top')
})

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__data, .footer__img, .footer__box, .credit`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__content`)