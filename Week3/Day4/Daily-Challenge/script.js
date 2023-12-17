let sentence = "This movie is not so bad.";

let wordNot = sentence.search("not");

let wordBad = sentence.search ("bad");

if (wordNot === -1){
    console.log(sentence)
}
else if (wordNot < wordBad){
    console.log ("wordBad:", wordBad)
    console.log ("wordNot", wordNot)

    let Part1 = sentence.slice (0, wordNot)
    let Part2 = sentence.slice (wordBad + 3)

    console.log(Part1 + "good" + Part2)
}

else{
    console.log(sentence)
}

