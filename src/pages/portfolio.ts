import Project from '../components/project';
export const myProjects = [
        {id: "1", link_1:"https://github.com/Maik649/join", link_2:"https://join.maikpankow.de/", src: "/img/join photos .svg", sub_headline: "HTML, Scss, JavaScript", name: "Join", description: "Join ist ein Kanban-Tool zur strukturierten Aufgabenplanung im Team. Erstelle Tickets, weise Verantwortlichkeiten zu und behalte Deadlines im Blick."},
        {id: "2", link_1:"https://github.com/Maik649/El-Polo-Loco", link_2:"https://elpolooco.maikpankow.de/", src: "img/El-polo-loco.png", sub_headline: "HTML, Scss, TypeSript", name: "El Pollo Loco", description: "El Pollo Loco ist ein kleines Jump-and-Run-Spiel. Sammle Münzen und Flaschen und besiege das Endboss-Chicken."},
        {id: "3", link_1:"https://github.com/Maik649/Trocken-Anker", link_2:"https://trockenanker.maikpankow.de/", src: "/img/trockenanker.png", sub_headline: "HTML, css, Javascript", name: "Trocken Anker", description: "Trocken Anker ist eine Website für Suchthilfe. Sie bietet Informationen, Ressourcen und Unterstützung für Menschen, die mit Suchtproblemen kämpfen."},
    ];
export function Portfolio(){
    return `<section id="portfolio" class="references-section">
                <div class="limitet portfolio-content">
                    <h2>Portfolio</h2>
                    <p>Entdecken Sie hier eine Auswahl meiner Arbeiten - Interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.</p>
                        <div class="project-list">
                            ${myProjects.map((myProject) => Project(myProject)).join('')} 
                        </div>
                </div>  
            </section>`;
  }