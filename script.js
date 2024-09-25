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

function findMinAndMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
    if (arr[index] < min) {
      min = arr[index];
    }
  }

  return `Max number = ${max} and Min Number =${min}`;
}

const numberCheck = [-2, 3, -13, 33, 44, 312, 334, -331, 6000];

console.log(findMinAndMax(numberCheck));
