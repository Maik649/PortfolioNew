import myRef from '../components/reference'
const myReferences = [
    {name: 'Oleg',
    description:'test test test'
    },
       {name: 'Habiba',
    description:'test test'
    },
       {name: 'Rene',
    description:'test'
    }
]

export function References(){
    return `<section id="references" class="references-section">
                <div class="limitet portfolio-content">
                    <h2>References</h2>

                    <div class="card-section">
                        ${myReferences.map((ReferencesProps) => myRef(ReferencesProps)).join(' ')}          
                    </div>
                   
                </div>  
            </section>`;
  }