const experience = document.querySelector('#experience');
const modalRight = document.querySelector('.modal-container.right');
const modalLeft  = document.querySelector('.modal-container.left');
const drawerBtn  = document.querySelectorAll('.drawer-button');
const container  = document.querySelector('.container');
const contact    = document.querySelector('#contact');
const navbar     = document.querySelector('.navbar');
const drawer     = document.querySelector('.left-drawer');
const skils      = document.querySelector('#skills');
const self       = document.querySelector('#self');

container.addEventListener("scroll", function() {
    if(container.scrollTop == 0){
        drawer.style.paddingTop = '40px';
        navbar.querySelector('.navbar-contact-details').classList.add('active-ncd');
    } else {
        drawer.style.paddingTop = '0';
        navbar.querySelector('.navbar-contact-details').classList.remove('active-ncd');
    }

    if(isScrolledIntoView(self)) {
        let btn = document.querySelector("a[link='#"+ self.id +"']");
        
        clearAllAnimations();
        navbarBtnActive(btn);
    
        let title = document.querySelector(".web-title");
        title.classList.add('active-web-title');
    }

    if(isScrolledIntoView(skils)) {
        let btn = document.querySelector("a[link='#"+ skils.id +"']");

        clearAllAnimations();
        navbarBtnActive(btn);

        let card1 = skils.querySelector('.skils-card:nth-child(1)');
        let card2 = skils.querySelector('.skils-card:nth-child(2)');
        let card3 = skils.querySelector('.skils-card:nth-child(3)');
        let card4 = skils.querySelector('.skils-card:nth-child(4)');
        let pipes = skils.querySelectorAll('.skils-pipe');

        card1.classList.add('active-card1');
        card2.classList.add('active-card2');
        card3.classList.add('active-card3');
        card4.classList.add('active-card4');
        pipes.forEach(pipe => {
            pipe.classList.add('active-pipe');
        })
    }

    if(isScrolledIntoView(experience)) {
        let btn = document.querySelector("a[link='#"+ experience.id +"']");

        clearAllAnimations();
        navbarBtnActive(btn);
    }

    if(isScrolledIntoView(contact)) {
        let btn = document.querySelector("a[link='#"+ contact.id +"']");
        
        clearAllAnimations();
        navbarBtnActive(btn);
    }
});

// start helper functions

function navbarBtnActive(btn, content = null) {
    if (content) {
        let box = document.querySelector('#' + content);
        box.scrollIntoView();
    }

    let previousBtn = document.querySelector('.active-decoration');
    let decoration  = btn.querySelector('div');
    
    if (previousBtn && previousBtn != btn)
    previousBtn.classList.remove('active-decoration');

    if (!decoration.classList.contains('active-decoration'))
    decoration.classList.add('active-decoration');
}

function showContact() {
    document.querySelector('[link="#contact"]').click();
}

function clearAllAnimations() {
    let pipes = skils.querySelectorAll('.skils-pipe');
    let card1 = skils.querySelector('.skils-card:nth-child(1)');
    let card2 = skils.querySelector('.skils-card:nth-child(2)');
    let card3 = skils.querySelector('.skils-card:nth-child(3)');
    let card4 = skils.querySelector('.skils-card:nth-child(4)');
    
    card1.classList.remove('active-card1');
    card2.classList.remove('active-card2');
    card3.classList.remove('active-card3');
    card4.classList.remove('active-card4');

    pipes.forEach(pipe => {
        pipe.classList.remove('active-pipe');
    })
}

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function toggleLeftDrawer() {
    drawerBtn.forEach(btn => {
        if (btn.classList.contains('active-button')) {
            btn.classList.remove('active-button')
        } else {
            btn.classList.add('active-button')
        }
    });

    if (drawer.offsetWidth > 0) {
        drawer.classList.remove('active-drawer');
    } else {
        drawer.classList.add('active-drawer');
    }
}

function addTextToTheTitle() {
    const text = 'Elevate Your Online Presence';
}

window.onclick = function(event) {
    if (event.target == modalRight || event.target == modalLeft) {
        closeModal();
    }
}


function closeModal() {
    modalLeft.style.display = "none";
    modalRight.style.display = "none";
}

function openModal(side = null) {
    if (side == 'right') {
        modalRight.style.display = 'flex';
    } else {
        modalLeft.style.display = "flex";
    }
}

// end helper functions