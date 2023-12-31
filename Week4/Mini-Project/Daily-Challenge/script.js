let numberOfBeers = getUserInput();
let numberOfBeersToTakeAway = 1;

function getUserInput(){
    let answer = prompt ("How many beers?");
    if (answer == "") return alert ("Please enter a number");
    const number = Number (answer);
    if (Number.isNaN (number)) return alert ("Please enter a number");
    return number;
}


while (numberOfBeers >0){
    const para = makePara(numberOfBeers, numberOfBeersToTakeAway);
    console.log(para);
    numberOfBeers -= numberOfBeersToTakeAway;
    numberOfBeersToTakeAway++;
}

function makePara(num, counter){
    const bottleOrBottles = getBottleOrBottles(num);
    const bottlesToTakeAway = getSmallerNumber(counter,num);
    const remainingBottles = getBiggerNumber(num - counter, 0);
    const remainingBottleOrBottles = getBottleOrBottles(remainingBottles);

    const para = '${num} ${bottleOrBottles} of beer on the wall 
    ${num} ${bottleOrBottles} of beer
    Take ${bottlesToTakeAway} down, pass it around 
    ${remainingBottles} ${remainingBottleOrBottles} of beer on the wall';

    return para;
}

function makePara(num, counter){
    
}


function getBiggerNumber(a,b){
    return a>b? a:b;

}

function getSmallerNumber(a,b){
   return a<b? a:b;
    }

    

function isPlural(num){
    return num>1;
}

function getBottleOrBottles(num){
    return isPlural(num)? "bottles" : "bottle";

}


