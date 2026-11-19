import { ImageComponent } from '../components/image.component';
import { Link } from '../components/link.component';

let locationIconPath = "/img/house.svg";
let localeIconPath = "/img/laptop_chromebook.svg";
let portraitImagePath = "/img/portfolio_new.png";

export function About() {
  return `<section id="about" class="about-section ">
  <div class="limitet">
   <article>
     <h2 class="headline-extra">About Me</h2>
        <section class="about-content-wrapper">
            <div class="about-content-left">
            <p class="about-text">
               Ich entwickle nicht nur Code - ich entwickle Lösungen. Ich bin Maik Pankow, Frontend-Entwickler, und meine Leidenschaft für die Webentwicklung begleitet mich seit 2020. Was als Interesse am Programmieren begann, hat sich zu meinem beruflichen Weg entwickelt. Meine Weiterbildung zum Frontend-Entwickler bei der Developer Akademie habe ich von 08/2025 bis 06/2026 absolviert. Meine ${Link('#skill', 'Skills')} findest du hier, wie aus einer Idee eine strukturierte und funktionierende Webanwendung entsteht. Besonders wichtig ist mir dabei nicht nur, dass etwas funktioniert, sondern auch, wie es umgesetzt ist. Eine saubere Architektur, verständlicher Code und eine gute Benutzererfahrung gehören für mich genauso zu einem guten Projekt wie die eigentliche Funktionalität.Ich arbeite gerne agil im Team, bringe mich aktiv ein und unterstütze andere, wenn Hilfe gebraucht wird. Gleichzeitig arbeite ich mich gerne selbstständig in neue Technologien und Herausforderungen ein. Was mich auszeichnet sind Neugier, Teamgeist und lösungsorientiertes Denken. Ich möchte mich kontinuierlich weiterentwickeln, neue Technologien kennenlernen und meine Fähigkeiten in echten Projekten einsetzen. Du hast eine Idee oder ein Projekt? Lass uns gemeinsam etwas daraus entwickeln.
            </p>

             <div class="about-content-bottom">
            <div class="about-content-bottom-text">
            ${ImageComponent("location-icon", locationIconPath, "Location Icon")}
           
            <p class="location">Standort: Bernau bei Berlin</p>
            </div>
            <div class="about-content-bottom-text">
            ${ImageComponent("locale-icon", localeIconPath, "Locale Icon")}
            <p class="location">Locale: Brandenburg, Berlin, Offen für Remote-Arbeit</p>
            </div>

            <div class="about-content-bottom-text about-link-wrapper">
            ${Link('#contact', '--primary-btn','', undefined, 'Lass uns Sprechen', '/img/arrow-bottom.svg')}
            </div>
         </div>
            </div>
            <div class="about-content-right">
            <figure>
                <img src="${portraitImagePath}" alt="About Me">
            </figure>
            <div class="about-arrow-bottom-left">
            ${ImageComponent("arrow-bottom-left", "/img/arrow-bottom-left.svg", "Arrow Bottom Left")}
            </div>
            </div>
           
        </section>
        
     </article>
  </div>
  </section>`;
}