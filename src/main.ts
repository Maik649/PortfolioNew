import './style.scss'
import { setupHeader } from './components/header';
import { setupHero } from './pages/hero';
import { About } from './pages/about';
import { Skill } from './pages/skill';
import { Portfolio } from './pages/portfolio';

import { References } from './pages/references';
import { Contact } from './pages/contact';
import { setupFooter } from './components/footer';
import { setupScrollTop } from './components/scrollTop';
import { toggleMenu } from './components/burger-menu';
import {setupFormInputs} from './service/formservice'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${setupHeader()}
  <div id="main-content">
  ${setupHero()}
  ${About()}
  ${Skill()}
  ${Portfolio()}
  ${References()}
  ${Contact()}
  </div>
  ${setupFooter()}
    `;
    setupFormInputs()
    setupScrollTop()
    toggleMenu()
    
});

