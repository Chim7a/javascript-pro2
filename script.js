// Reverse a String

function reverseString(stringInput) {
  let stringReverse = stringInput.split("");
  console.log(stringReverse);
  let reversedText = stringReverse.reverse();
  console.log(reversedText);

  return reversedText.join("");

  // return stringInput.split("").reverse().join("");
}

console.log(reverseString("amihC"));

// Count Characters in a string

const countString = (stringInput) => {
  return stringInput.length;
};

console.log(countString("Chima Ikegbulam"));
