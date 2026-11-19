export function toggleMenu() {            
    const menu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav.main-nav');
    const links = document.querySelectorAll('nav.main-nav a');
            menu?.addEventListener('click', () => {
                nav?.classList.toggle('open');
                menu?.classList.toggle('open');
                document.body.classList.toggle('menu-open');
                console.log('Burger menu clicked');
            });
            links.forEach(link => {
                link.addEventListener('click', () => {
                    nav?.classList.remove('open');
                    menu?.classList.remove('open');
                    document.body.classList.remove('menu-open');
                });
            });
        }

export function setupBurgerMenu() {   
    return `
        <div id="burger-menu" class="burger-menu" role="button" aria-label="Toggle navigation menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;    
}


   