const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  sentence = "";

  for (let key in details){
   sentence = sentence + " "+ key+ " " + details[key];
   
  }

  console.log(sentence);