// String Functions

// Reverse a String

function reverseString(stringInput) {
  let stringReverse = stringInput.split("");
  let reversedText = stringReverse.reverse();

  return reversedText.join("");
}

console.log(reverseString("gnirts desrever A"));

// Count Characters in a string

const countString = (stringInput) => {
  let lengthOfString = stringInput.length;
  return `The length of string is ${lengthOfString}`;
};

console.log(countString("We live for the moment"));

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

console.log(capitalizeFistWord("first letters are capitalized"));

// Array Functions

const studentAges = [4, 45, 56, 67, 3, 6, 5, 6, 5, 25];

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

  return `Max age = ${max} and Min Age = ${min}`;
}

console.log(findMinAndMax(studentAges));

// Sum of Array

function findSumOfArr(ages) {
  let total = 0;
  for (let index = 0; index < ages.length; index++) {
    total += ages[index];
  }
  return `The sum of the student age is ${total}`;
}

console.log(findSumOfArr(studentAges));

// Filter Array

function studentsAbove20(userList) {
  let filteredTeens = userList.filter((user) => user >= 20);
  let studentsWhoCanDrink = [];
  filteredTeens.map((olderStudent) => {
    studentsWhoCanDrink += " " + olderStudent;
  });

  return studentsWhoCanDrink;
}

console.log(studentsAbove20(studentAges));

// Mathematical Functions:

// Factorial

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    return factorial(number - 1) * number;
  }
}

console.log(factorial(6));

//Prime Number Check

function checkPrimeNumber(number) {
  // program to check if a number is prime or not

  // take input from the user
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number/2
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  }

  // check if number is less than 1
  else {
    console.log("The number is not a prime number.");
  }
}

console.log(checkPrimeNumber(7));
