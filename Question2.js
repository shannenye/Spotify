/* Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

let decodeString = (s) => {
    let numToRepeat = [];
    let strings = [];
    let finalWord = "";

    for (let i = 0; i < s.length; i++) {
        let num = "";

        // if the letter is a number
        if (!isNaN(s[i])) {
            // loop through the string to gather all numbers just in case there are multiple digits
            while (!isNaN(s[i])) {
                num += s[i];
                i++;
            }
            i--; // make sure you go back to where you left off in the for loop!
            numToRepeat.push(parseInt(num)); // add to your arr to know how many times to repeat a string
        } else if (s[i] === "[") {
            let strToRepeat = "";
            i++;
            // loop through the string to gather all letters inside the current bracket
            while (isNaN(s[i]) && s[i] !== "]") {
                strToRepeat += s[i];
                i++;
            }
            strings.push(strToRepeat);
            i-=2; // make sure you go back to where you left off in the for loop!
        } else if (s[i] === "]") {
            let word = "";
            let count = numToRepeat.pop();
            let strToRepeat = strings[strings.length-1];

            // loop through the last element in your "strings" arr as many times as given by the last element in your numToRepeat arr
            for (let i = 0; i < count; i++) {
                word += strToRepeat;
            }
            strings.pop();
            // if you still have other strings in your arr then add them to the beginning of your current word
            while (strings.length) {
                word = strings[0] + word;
                strings.shift();
            }
            strings.push(word);
            finalWord = strings[0];
        } else if (!numToRepeat.length) {
            finalWord += s[i];
        }
    }
    return finalWord;
}

console.log(decodeString("4[ab]"));
// correct output: "abababab"
console.log(decodeString("2[b3[a]]"));
// correct output: "baaabaaa"
console.log(decodeString("2[abcd]3[ef]gh"));
// correct output: "abcdabcdefefefgh"