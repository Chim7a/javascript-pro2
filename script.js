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

function findMinAndMax(numberCheckArr) {
  let max = numberCheckArr[0];
  let min = numberCheckArr[0];

  for (let index = 0; index < numberCheckArr.length; index++) {
    if (numberCheckArr[index] > max) {
      max = numberCheckArr[index];
    }
    if (numberCheckArr[index] < min) {
      min = numberCheckArr[index];
    }
  }

  return `Max age = ${max} and Min Age =${min}`;
}

const studentAges = [4, 45, 56, 67, 3, 6, 5, 6];

console.log(findMinAndMax(studentAges));
