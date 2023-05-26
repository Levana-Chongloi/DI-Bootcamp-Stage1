document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData (document.querySelector("form"));
    const entries = formData.entries();
    const data = object.formEntries(entries);
    
    const dataString = JSON.stringify(data);
    const p = document.createElement("p");
    p.innerText = dataString;
    document.body.appendChild(p);

}