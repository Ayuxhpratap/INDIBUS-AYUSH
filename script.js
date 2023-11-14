/* SWIPER JS */

const swiper = new Swiper('.swiper', {
    
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        600: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

  });

  /* DARK - MODE */

  const themeBtn = document.querySelector('.nav_theme_btn');
themeBtn.addEventListener('click',() => {
    let bodyClass = document.body.className;
    if(!bodyClass) {
        bodyClass = 'dark' ;
        document.body.className = bodyClass;
        themeBtn.innerHTML = "<i class='uil uil-sun'></i>"
        window.localStorage.setItem('theme',bodyClass);
    } else {
        bodyClass = '' ;
        document.body.className = bodyClass;
        themeBtn.innerHTML = "<i class='uil uil-moon'></i>"
        window.localStorage.setItem('theme',bodyClass);
    }
})

window.addEventListener('load' , () => {
    document.body.className = window.localStorage.getItem('theme');
})

/*SMALL DEVICES*/

const navMenu = document.querySelector('.nav_menu')
const navOpenBtn = document.querySelector('.nav_toggle_open')
const navCloseBtn = document.querySelector('.nav_toggle_close')

const openNavHandler = () => {
    navMenu.style.display =  'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}


const closeNavHandler = () => {
    navMenu.style.display =  'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click' , openNavHandler)
navCloseBtn.addEventListener('click' , closeNavHandler)


/* close nav menu */

const navItems = navMenu.querySelectorAll('a');
if(window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener('click' , closeNavHandler)
    })
}


/* the end */