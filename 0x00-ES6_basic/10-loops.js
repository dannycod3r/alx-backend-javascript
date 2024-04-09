export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let value of array) {
      arr.push(appendString + value);
  }

  return arr;
}
