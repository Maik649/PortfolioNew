interface ReferencesProps {
    name: string;
    description: string;
}

function myRef(Reference:ReferencesProps){
    return`
        <div class="ref-card">
            <h4>,,</h4>
            <h5>${Reference.name}</h5>
            <h7>Team Kollege</h7>
            <span class="ref-description">${Reference.description}</span>
        </div>
    `
}

export default myRef;