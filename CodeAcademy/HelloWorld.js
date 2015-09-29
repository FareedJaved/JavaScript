// Don't use console.log
// Use debug() 


// This function searches for value 
// inside the array parameter 
var method = function (array, value) {

  // variable to keep track of 
  // position 
  var pos = 0; 
  
  // boolean to keep track of something  
  // being found 
  var found = false; 

  // Going through the array 
  while (pos < array.length ) {
    // if an element matches value
   if (array[pos] == value) {
       found = true; 
    }
    
    // else, keep moving through 
    // the array 
       pos++; 
  }
  return found; 
}

// testing my method 
var arrayTwo = [1,2,3,4,5,6,7,8]; 

var value = 7; 

// printing out the result of the method 
debug(method(arrayTwo, value)); 
prompt("we found it");
