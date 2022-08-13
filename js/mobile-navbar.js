class mobileNavbar {
    constructor (mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    /* perguntando se possui link animação, se possuir remover, se não possuir adicionar */
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            /* console.log(index / 7 + 0.3); */    /* teste para o index dividindo o tempo por 7 e acrescentando 3 segundo de cada link, um do outro */
            link.style.animation
                ?(link.style.animation = "")
                :(link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick() {
        /* console.log(this); */   /* teste para handleClick e handleClick.bind(this) */
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {

    /* teste console.log */    
    /* this.mobileMenu.addEventListener("click", () => console.log
    ("oi, tudo bem.")); */

    this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar2 = new mobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar2.init();