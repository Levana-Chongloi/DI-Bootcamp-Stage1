let wheel = document.querySelector('.wheel');
let spinButton = document.querySelector('.spinButton');
let value = Math.ceil(Math.random() * 3600);

 spinButton.onclick = function(){
    wheel.style.transform = "rotate("+ value +"deg)";
    value = Math.ceil(Math.random() * 3600);

}
