//a short program that checks 
//a block of text for your name

var text = "owiiurpqoiubpoqFareedpbouqpobuFareed\
c.,znv,xcnvFareediiii";  
var myName= "Fareed";  
var hits = []; 

for (var i =0; i < text.length; i++){
    if (text[i] === myName[0]){
        for (var j=i; j< i+ myName.length; j++){
            hits.push(myName); 
        }
    }
}

if (hits.length === 0){
    console.log("Your name was not found!");
}
else {
    console.log(hits); 
}