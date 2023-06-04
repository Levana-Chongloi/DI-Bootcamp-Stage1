
const form = document.querySelector("form");
const input = document.getElementById("search")
const container = document.getElementById("container");
const deleteAllButton = document.getElementById("delete-all");
form.addEventListener("submit", handleSubmit);
deleteAllButton.addEventListener("click")

function handleSubmit(e){
e.preventDefault();
const searchTerm = input.value;
input.value = "";
getGifs(searchTerm);

}

function getGifs(word){
    console.log("we are looking for this word:", word);
    const url=`https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", logRequest);    
    xhr.open("GET", url);
    xhr.send;

    }

    function logRequest(e){
        const response = JSON.parse(e.target.response);
        const firstResult = response.data[0];
        console.log("firstResult:", firstResult);
        const imageUrl = firstResult.images.fixed_width.webp;
        const altText = firstResult.title;
        createImage(imageUrl, altText);

}

function createImage(url, alt){
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
     
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("Click", removeParentDiv);
    div.prepend(button);
    div.prepend(img);
    imageContainer.prepend(div);


}

function removeParentDiv(e){
    const parentDiv = e.target.parent;
    console.log("parentDiv:", parentDiv);
}
