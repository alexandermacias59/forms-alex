function handleFormSubmit(event) {
    event.preventDefault();
    
    const myForm = document.getElementById("user-form");
    const data = new FormData(myForm);
    
    // Estrae i dati dal form
    const userData = {
        nome: data.get("nome"),
        cognome: data.get("cognome"),
        email: data.get("email"),
        eta: data.get("eta"),
        citta: data.get("citta"),
        hobby: data.get("hobby")
    };
    
    // Visualizza i dati nel div
    displayUserData(userData);
    
    // Resetta il form
    myForm.reset();
}

function displayUserData(user) {
    const resultDiv = document.getElementById("result-container");
    
    let etatext = user.eta ? `<p><strong>Età:</strong> ${user.eta} anni</p>` : "";
    let cittatext = user.citta ? `<p><strong>Città:</strong> ${user.citta}</p>` : "";
    let hobbytext = user.hobby ? `<p><strong>Hobby:</strong> ${user.hobby}</p>` : "";
    
    const userCard = `
        <div class="user-card">
            <h2>Dati Inseriti</h2>
            <p><strong>Nome:</strong> ${user.nome}</p>
            <p><strong>Cognome:</strong> ${user.cognome}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            ${etatext}
            ${cittatext}
            ${hobbytext}
        </div>
    `;
    
    resultDiv.innerHTML = userCard;
}
