// String Functions

// Reverse a String

function reverseString(stringInput) {
  let stringReverse = stringInput.split("");
  let reversedText = stringReverse.reverse();

  return reversedText.join("");
}

console.log(reverseString("amihC"));

// Count Characters in a string

const countString = (stringInput) => {
  return stringInput.length;
};

console.log(countString("Chima Ikegbulam"));

// Capitalize first letters of sentence

function capitalizeFistWord(textInput) {
  const mySentence = textInput;
  const words = mySentence.split(" ");

  const newSentence = words.map((word) => {
    let upperCaseSentence = word[0].toUpperCase() + word.substring(1);
    return upperCaseSentence;
  });

  return newSentence.join(" ");
}

console.log(capitalizeFistWord("chima paul is a big man"));

// Array Functions

// Find Maximum and Minimum
// const christmasEve = new Date("December 24, 1975 23:15:30");
// const date1 = christmasEve.getDate() + " " + christmasEve.getMonth();
// console.log(date1);

//

const ages = [2, 22, 23, 3, 2, 4, 6];
