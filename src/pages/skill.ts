import {ImageComponent} from '../components/image.component';
let skillIcon1 = '../../img/icons/18_Iconss3(1).svg';
let skillIcon2 = '../../img/icons/18_Iconss3(2).svg';
let skillIcon3 = '../../img/icons/18_Iconss3(3).svg';
let skillIcon4 = '../../img/icons/18_Iconss3(4).svg';
let skillIcon5 = '../../img/icons/18_Iconss3(5).svg';
let skillIcon6 = '../../img/icons/18_Iconss3(6).svg';
let skillIcon7 = '../../img/icons/18._conss3.svg';
let skillIcon8 = '../../img/icons/18_Iconss3(8).svg';
let skillIcon9 = '../../img/icons/18_Iconss3(9).svg';
let skillIcon10 = '../../img/icons/18_Iconss3(10).svg';
let skillIcon11 = '../../img/icons/vite_logo_icon.png';
let skillIcon12 = '../../img/icons/react_icon.png';

export function Skill(){
    return `<section id="skill" class="skill-section">
    <div class="limitet">
      <h2>Meine Skills </h2>

      <article class="skill-content">
        <figure class="skill-figure-grid">
       
           <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon3, "Skill Icon")}
          <span>HTML</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon4, "Skill Icon")}
          <span>CSS</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon2, "Skill Icon")}
          <span>Java Script</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon1, "Skill Icon")}
          <span>Type Script</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon5, "Skill Icon")}
          <span>API</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon6, "Skill Icon")}
          <span>Scrum</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon8, "Skill Icon")}
          <span>Supabase</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon7, "Skill Icon")}
          <span>Angular</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon9, "Skill Icon")}
          <span>Git / GitHub</span>
          </span>
        <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon10, "Skill Icon")}
          <span>Material Design</span>
          </span>
          <span class="skill-icon">
          ${ImageComponent("location-icon", skillIcon11, "Skill Icon")}
           <span>Vite</span>
            </span>
                  <span class="skill-icon">
                  ${ImageComponent("location-icon", skillIcon12, "Skill Icon")}
                  <span>React</span>
                  </span>
          </figure>
          <div class="skill-bottom-content">
             ${ImageComponent("location-icon", skillIcon10, "Skill Icon")}
             <span>Sie sehen die benötigte Fähigkeit nicht? <span><a class="skill-contact-link" href="#contact">Kontaktieren Sie mich.</a></span> Ich bin immer bereit zu lernen!</span>
             </div>
      </article>
       <div class="about-arrow-bottom-right">
            ${ImageComponent("arrow-bottom-right", "../../img/arrow-bottom-right.svg", "Arrow Bottom Right")}
            </div>
    </div>
    </section>`;
}