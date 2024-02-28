function findLongestWord(str) {
 var words = str.split(' ');
 var maxLength = 0;
 var longestWord = '';
 for (var i = 0; i < words.length; i++) 
    {
            if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
            }
    }
 return longestWord;
}
var longest = findLongestWord("The quick brown fox");
console.log("The longest word is:", longest);



