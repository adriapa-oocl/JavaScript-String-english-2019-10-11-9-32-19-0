// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log('\''+name.toUpperCase()+'\'');

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
//short version
// console.log(sentence.replace(/(^\w|\s\w)/g, sentence => sentence.toUpperCase()));
//long version
var wholeword = "";
var word = sentence.split(" ");
for (let letter = 0; letter < word.length; letter++) {
    word[letter] = word[letter][0].toUpperCase() + word[letter].substr(1);
    wholeword+=word[letter]+=' ';
}
console.log(wholeword);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1));
