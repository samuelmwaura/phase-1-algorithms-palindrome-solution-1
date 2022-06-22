function isPalindrome(word) {
  // Write your algorithm here
    for(let i=0;i<word.length;i++){
    if(word.charAt(i) === word.charAt((word.length-1)-i)){
        return true
    }else{
        return false;
    }
    }
    
}
console.log(isPalindrome('mum'));

/* 
  Add your pseudocode here
  intitialize a function for the check palindrome property.
  The function takes a word to test whether it is a plaindrome or not.
  Inside the function there is a loop to compare characters in a string  with their corresponding positions characters when the string is read from reverse.
  If a letter corresponds with its corresponding letter from behind the string, te function returns true
  If a letter doesnt correspond with its corresponding from behind, the function returns false.
*/

/*
  Add written explanation of your solution here
  The function takes in a work to be checked for plaindrome property.It uses a loop to go through the characters of the string. It then checks if the character at a
  given position in the string is exacly similar to the element at a similar position from the reverse of the string.The loop uses a counter that is initialized at 
  0 and capped at the string length.
  It then returns true for each word that passes this test and false for any that doesn't.
*/


/*
//REFACTORING THE CODE FOR REDUNDANCY
for(let i=0;i<word.length;i++){
    return word.charAt(i) === word.charAt((word.length-1)-i)
    }
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log('')

  console.log('Expecting: true')
  console.log("=>", isPalindrome("b"));
  
  console.log('')

  console.log('Expecting: false')
  console.log("=>", isPalindrome("mama"))

  console.log('')

  console.log('Expecting: true')
  console.log("=>", isPalindrome("pop"))

  console.log('')

  console.log('Expecting: false')
  console.log("=>", isPalindrome("keep"))
}

module.exports = isPalindrome;
