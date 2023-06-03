fetchCurrencies();

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");


document.getElementById("input")?.addEventListener("keyup",
    handleClick);
fromSelect.addEventListener("change", handleClick);
toSelect.addEventListener("change", handleClick);

function fetchCurrencies(){
    const url = "https://v6.exchangerate-api.com/v6/8659091fb9285bcf8a3ac07e/codes";
    fetch(url)
      .then((res) => res.json())
      .then((res) => populateDropdown(res.supported_codes))
      .catch((error) => console.error(error));     

}

function populateDropdown(codes){
    // console.log("codes:", codes);
    const entries = Object.entries(codes);
    // console.log("entries:", entries);

    for (const entry of entries){
        const [index, [code, name]] = entry;
        // console.log("[code, name]:", [code, name]);
        const option = document.createElement("option");
        const option2 = document.createElement("option");

        option.innerText = code + ", " + name;
        option2.innerText = code + ", " + name;
        option.value = code;
        option2.value = code;
        // const option2 = { ...option };
        fromSelect.appendChild(option);
        toSelect.appendChild(option2);
    }
}

async function handleClick(){
// console.log(fromSelect.value);
// console.log(toSelect.value);
const curr1 = fromSelect.value;
const curr2 = toSelect.value;
const input = document.getElementById("input");
const summary = document.getElementById("summary");

const url = `https://v6.exchangerate-api.com/v6/8659091fb9285bcf8a3ac07e/pair/${curr1}/${curr2}`;

try{
const res= await fetch(url);
const resJson = await res.json();
const rate = resJson.conversion_rate;
const amount = Number(input.value);
const total = amount * rate;
summary.innerText = `${amount} ${curr1} = ${total} ${curr2}`;
} catch(error){
    console.error(error);
}
}