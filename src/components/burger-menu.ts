export function toggleMenu() {            
    const menu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav.main-nav');
    const links = document.querySelectorAll<HTMLAnchorElement>('nav.main-nav a.nav-link');

    const setActiveLink = (hash: string) => {
        links.forEach(link => {
            const isActive = link.hash === hash;
            link.classList.toggle('active', isActive);
            link.closest('li')?.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    };

    setActiveLink(window.location.hash);
    window.addEventListener('hashchange', () => setActiveLink(window.location.hash));

            menu?.addEventListener('click', () => {
                nav?.classList.toggle('open');
                menu?.classList.toggle('open');
                document.body.classList.toggle('menu-open');
                console.log('Burger menu clicked');
            });
            links.forEach(link => {
                link.addEventListener('click', () => {
                    setActiveLink(link.hash);
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


   