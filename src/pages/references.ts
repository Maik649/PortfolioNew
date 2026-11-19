import myRef from '../components/reference'
const myReferences = [
    {name: 'Oleg',
    description:'Die Zusammenarbeit mit Maik hat wirklich Spaß gemacht. Er war immer aktiv im Team dabei und man konnte sich jederzeit auf ihn verlassen. Wenn jemand Hilfe gebraucht hat, war er sofort zur Stelle und hat unterstützt. Was ich besonders geschätzt habe: Er hat immer gute Laune mitgebracht und dadurch auch andere motiviert. Selbst in stressigen Situationen ist er ruhig geblieben und hat geholfen, Lösungen zu finden. Insgesamt war die Arbeit mit ihm sehr angenehm, und ich würde jederzeit wieder mit ihm im Team arbeiten.'
    },
       {name: 'Jessica',
    description:'Maik hat sich sehr in unserem Projekt engagiert und zugeteilte Aufgaben eigenständig bearbeitet. Mit seinen Vorkenntnissen in Javascript hat er uns gut weiterhelfen können, wenn wir nicht weiter wussten. Ich bin dankbar für seine große Hilfsbereitschaft gewesen.'
    },
       {name: 'Rene',
    description:'Die Zusammenarbeit mit Maik war sehr angenehm, da er sich sehr für das Team und das Projekt interessiert hat. Seinen Aufgabenbereich hat er voll und ganz zu unserer Zufriedenheit bearbeitet. Durch seine Erfahrung konnten wir uns auch bei Fragen immer an ihn wenden.'
    }
]

export function References(){
    return `<section id="references" class="references-section">
                <div class="limitet references-content">
                    <h2>References</h2>
                    <p class="ref-headline">Ich arbeite sowohl eigenständig als auch im Team. Hier ist, was meine Kollegen über die Zusammenarbeit mit mir zu sagen haben.</p>

                    <div class="card-section">
                        ${myReferences.map((ReferencesProps) => myRef(ReferencesProps)).join(' ')}          
                    </div>
                   
                </div>  
            </section>`;
  }