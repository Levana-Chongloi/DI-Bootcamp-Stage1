async function retrieveUserData(id){
    const url = "https://www.swapi.tech/api/people/" + id;
    document.getElementById("error").classList.remove("show");
    document.getElementById("error").classList.add("hidden");

    try{
    const res = await fetch (url);
    const resJson = await res.json();
    const {name, height, gender, birth_year, homeworld} = resJson.result.properties;
    const homeworldName = await fetchHomeWorld(homeworld);
    displayProperties(name, height, gender, birth_year, homeworldName); 

   }catch(error){
        console.error(error);
        document.getElementById("error").classList.add("show");
        document.getElementById("error").classList.remove("hidden");

    }
}

function displayProperties(name, height, gender, birth_year, homeworld){
    const nameElement = document.getElementById("name");
    const heightElement = document.getElementById("height");
    const genderElement = document.getElementById("gender");
    const birthyearElement = document.getElementById("birth-year");
    const homeworldElement = document.getElementById("home-world");

    nameElement.innerText = "Name: " + name;
    heightElement.innerText = "Height: " + height;
    genderElement.innerText = "Gender: " + gender;
    birthyearElement.innerText = "Birth year: " + birth_year;
    homeworldElement.innerText = "Homeworld: " + homeworld;

}

async function fetchHomeWorld(homeworld){
   try{
    const res = await fetch(homeworld);
    const resJson = await res.json();
    const homeworldName = resJson.result.properties.name;
    return homeworldName;
   }catch (error){
    console.error(error);
   }
}


function handleClick(e){
    const randomId = getRandomId();
    retrieveUserData(randomId);
}


function getRandomId(){
    const MAX_NUMBER = 83;
    return Math.floor(Math.random() * MAX_NUMBER + 1);
}


document.getElementById("button")?.addEventListener("click",
handleClick);

// retrieveUserData(55);

