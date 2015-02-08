//a harry potter 
//trivia game

var user = prompt ("Which Hogwarts House do you choose to be put in? Gryffindor, Hufflepuff, Ravenclaw or Slytherin?").toUpperCase(); 
var choice; 

switch (user){
    case 'GRYFFINDOR':
        choice = prompt("You might belong in Gryffindor,Where dwell the brave at heart, Their daring, nerve and chivalry Set Gryffindors apart...Congrats! You have now become a darling of the wizarding world. Even though you can pretty much get away with everything, Gryffindorians are a brave, daring and chivalrous lot. Your emblem is a lion & your house colours are scarlet and gold..Fun Fact: Godric Gryffindor's first name has Anglo-Saxon roots, which means: 'he who rules with God'... Trivia: Did you know that Gryffindor corresponds to the element of fire?! Notable alumni: Harry Potter (duh), Albus Percivel Wolfric Brian Dumbledore...and pretty much every good person in the story. Are you happy with your choice? Do you feel like Gryffindor fits you?").toUpperCase();
        
        if (choice === "YES" ){
            console.log("Great! Enjoy your semester!");
        }
        else{
            console.log("Well that's too bad...I don't\
            think I am programmed to care..."); 
        }
        break; 
        
    case 'HUFFLEPUFF':
        choice = prompt("You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are true, And unafraid of toil...Congrats! Hufflepuffers are a loyal, patient and hard working group! Your emblem is a badger & your house colours are yellow & black. Fun Fact: Hufflepuffers have the coziest quarters being described as:'round, earthy and low-ceilinged. It always feels sunny and its circular windows have a view of rippling grass and dandelions. Copper lamps cast a warm light over our four -posters, all of which are covered in patchwork quilts, and copper bed warmers hang on the walls,should you have cold feet.' Trivia: Did you know that Hufflepuff corresponds to the element of earth? Notable alumni: Cedric Diggory...and no one else.Let me know if you're happy with your choice. Do you feel like Hufflepuff fits you?").toUpperCase();
        
        if (choice === "YES"){
            console.log("Great! Enjoy your semester!");
        }
        else{
            console.log("Well that's too bad...I don't                 think I am programmed to care..."); 
        }
        break;
        
    case 'RAVENCLAW':
        choice = prompt("'Or yet in wise old Ravenclaw, If you've a ready mind, Where those of wit and learning, Will always find their kind' Congrats! Ravenclaws are a witty intelligent and curious bunch. Your emblem is an          eagle and your colours are blue & bronze. Fun Riddle: 'Which came first, the phoenix or the flame?").toUpperCase(); 
        switch (choice){
            case 'PHOENIX':
                console.log("wrong");
                break;
            case 'FLAME': 
                console.log("wrong");
                break;
            default:
                console.log ("Interesting answer. Good                    work! :)"); 
        }
        
        var poop = prompt ("Trivia: Did you know that Ravenclaw corresponds to the element of air? So are you happy with your choice? Do you feel like Ravenclaw fits you?").toUpperCase();
        
        if (poop === "YES" || poop === "MAYBE"){
            console.log("Great! Enjoy your semester!");
        }
        else{
            console.log("Well that's too bad...I don't                 think I am programmed to care..."); 
        }
        if (poop === "YES" && poop === "NO"){
            console.log("Hallelujah"); 
        }
        break; 
        
    case 'SLYTHERIN':
        choice = prompt("'Or perhaps in Slytherin, Youll make your real friends, Those cunning folk use any means, To achieve their ends'...Congrats! The whole world hates you and you're basically set up to become a criminal but cheer up! Slytherins are an ambitious, cunning and resourceful lot. Your emblem is a serpent and your         colours are silver & emerald green. Trivia: The common room (called the 'dungeons') is located beneath the black lake. And just like Gryffindor, Slytherins must utter a secret password. Notable Alumni: You Know Who (literally), the Malfoys and every other evil kid.Are you happy with your choice? Do you feel like Slytherin fits you?").toUpperCase();
        
        if (choice === "YES"){
            console.log("Great! Enjoy your semester!");
        }
        else{
            console.log("Well that's too bad...I don't                 think I am programmed to care..."); 
        }
        break;
        
    default:
        console.log("Make sure you did not mispell the             house name! If you don't know the houses then              you're a fool! :D"); 
        
        
        
        
        
}