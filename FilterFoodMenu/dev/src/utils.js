const arrayOne = [1, 2, 3, 4, 1, 2, 1, 2, 3, 3, 4, 5, 1, 2, 3, 5];
const arrayTwo = [];

const checkIfAlreadyExists = (arr, ele) => {
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == ele) return true;
  }
  return false;
};
arrayTwo.push(arrayOne[0]);
let i = 0;
for (i = 1; i < arrayOne.length; i++) {
  //if (!arrayTwo.includes(arrayOne[i])) arrayTwo.push(arrayOne[i]);
  if (!checkIfAlreadyExists(arrayTwo, arrayOne[i])) arrayTwo.push(arrayOne[i]);
}

console.log(arrayTwo);

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

const arrayThree = arrayOne.filter(onlyUnique);
console.log(arrayThree);
