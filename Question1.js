/*
Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

let sortByStrings = (s, t) => {
    const hashOfS = {};
    let finalString = '';

    // create a hash of letters and counts for string s
    for (let i = 0; i < s.length; i++) {
      let letter = s[i];

      if (hashOfS[letter]) {
          hashOfS[letter]++;
      } else {
          hashOfS[letter] = 1;
      }
    }

    // create finalString
    for (let i = 0; i < t.length; i++) {
      let letter = t[i];

      while (hashOfS[letter]) {
        finalString += letter;
        hashOfS[letter] -= 1;
      }
    }
    return finalString;
  }

  console.log(sortByStrings("weather", "therapyw"));
  // output: "theeraw"
  console.log(sortByStrings("good", "odg"));
  // output: "oodg"