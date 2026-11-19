import {Link} from './link.component';
const regangelName = "regangel-icon";

interface ProjectProps {
    id: string;
    link_1: string,
    link_2:string,
    src: string,
    sub_headline: string,
    name: string;
    description: string;
}

let totalProjects: number = 3;

function Project(project: ProjectProps){
        return `<div id="${project.id}" class="project">
                    <h3>${project.id} / ${totalProjects}</h3>
                    <span class="content-left">
                        <img src="${project.src}" alt="Project Image ${project.id}">
                        <img class="regangel-icon" src="/img/regangel.png" alt="${regangelName}">
                    </span>

                    <div class="content-right">
                    
                    <h2>${project.name}</h2>
                    <h3>${project.sub_headline}</h3>
                    <p>${project.description}</p>

                    <div class="button-section">
                     ${Link(`${project.link_1} `, '--primary-btn --small','_blank', undefined,'Github', '../../img/icons/susses-icon.svg')}
                     ${Link(`${project.link_2} `, '--primary-btn --small','_blank' ,undefined, 'Live',  '../../img/icons/susses-icon.svg')}
                    
                    </div>
                    </div>                    
                    
                    <h3>${project.id} / ${totalProjects}</h3>
                </div>`;
    }
export default Project;