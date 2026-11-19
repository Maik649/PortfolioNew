import { setupLogo } from './logo';
import { setupBurgerMenu } from './burger-menu';
import { Link } from './link.component';
import {ImageComponent} from './image.component'

export function setupHeader() {
const locationIconPath_1 = "/img/Mail-icon.svg";
const locationIconPath_2 = "/img/Githup-icon.svg";
const locationIconPath_3 = "/img/LinkedIn-icon.svg";

setTimeout(() => {
        const header = document.getElementById('main-header');
        const headerMenu = document.getElementById('burger-menu');
        const content = document.querySelector('section');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header?.classList.add('fixed-header');
                headerMenu?.classList.add('fixed-header-menu');
                content?.style.setProperty('margin-top', '75px');
            } else {
                header?.classList.remove('fixed-header');
                headerMenu?.classList.remove('fixed-header-menu');
                content?.style.removeProperty('margin-top');
            }
        });
    });

    return `
    <header id="main-header" class="main-header ">
        <div class="header-content limitet">
            <div class="logo-content">
             ${Link('#hero','logo-link','', undefined,`${setupLogo()}`)}
            </div>
            <nav class="main-nav">
            <ul>
            <li>
            ${Link('#about', '', '', undefined, 'About Me' )}
            </li>
            <li>
            ${Link('#portfolio','','',undefined, 'Portfolio')}
            </li>
            <li>
            ${Link('#contact', '', '', undefined, 'Contact' )}
            </li>
            </ul>
            <div class="shape-content">
            <div class="shape-content-left">
            ${Link('#contact', '','',undefined,ImageComponent("location-icon", locationIconPath_1, "Location Icon"))}
            ${Link('https://github.com/Maik649','', '_blank',undefined, ImageComponent("location-icon", locationIconPath_2, "Location Icon"))}
            ${Link('https://www.linkedin.com/in/maik-pankow-6aaba0376','', '_blank', undefined, ImageComponent("location-icon", locationIconPath_3, "Location Icon"))}
            </div> 
            <div class="shape-content-right">
            </div> 
            </div>
            <div>
            </div>
            </nav>
             ${setupBurgerMenu()}
    </div>
</header>
`;
}

