interface ReferencesProps {
    name: string;
    description: string;
}

function myRef(Reference:ReferencesProps){
    return`
        <div class="ref-card">
            <p>,,</p>
            <p>${Reference.name}</p>
            <p>${Reference.description}</p>
        </div>
    `
}

export default myRef;