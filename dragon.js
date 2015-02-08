//a simulated game where you battle a 
//dragon 

var slaying = true; 
var youHit = Math.floor(Math.random()*2); 
var damageThisRound = Math.floor(Math.random()*5+1); 
var totalDamage =0; 

while (slaying === true){
    
    if (youHit === 1){
        console.log("You hit the dragon!!!"); 
        totalDamage += damageThisRound; 
        if (totalDamage >= 4){
            console.log("you have slewn the dragon! :D"); 
            slaying = false; 
        }
        else{
            youHit = Math.floor(Math.random()*5+1); 
        }
    }
    else{
        console.log("The dragon has won. I am sorry for \ your loss :("); 
    }
    slaying = false; 
}