/*=======SHOW MENU =========*/
const navMenu = document.getElementById('nav-meny'),
     navToogle = document.getElementById('nav-toogle'),
     navClose = document.getElementById('nav-close')

     /*===MENU SHOW====*/
     /*Validate if constant exists */
     if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.class
        })
     }

     /*======MENU HIDDEN=====*/
     /*Validate if constant exists=====*/
     if(navToogle){
        navToogle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
     })
    }

    /*=======REMOVE MENU MOBILE====*/
    const navLink = document.querySelectorAll('.nav_link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        //when we click on each nav_link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n=> n.addEventListener('click', linkAction))

    /*=====CHANGE BACKGROUND HEADER====*/
    function scrollheader(){
    const header =document.getElementById('header')
   // when viewer is greater than 50 viewport height ,add the scroll-header class to header tag
   if(this.scrollY >= 50 ) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
    }
window.addEventListener('scroll', scrollHeader)

/*====SHOW SCROLL UP=====*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
// when scroll is higher  than 200 viewport height ,add the  show -scroll class to the a tag with the scroll top class
if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*===== SCROLL SELECTION ACTIVE LINK====*/
const sections = document.querySelectorAll('section[id}')

function scrollActive(){
    const scrollY = window_pageYOffset

    sections.forEach(current =>
        const sectionHeight = current.offsetheight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)

