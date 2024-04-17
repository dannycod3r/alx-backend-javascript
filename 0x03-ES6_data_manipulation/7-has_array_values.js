export default function hasValuesFromArray(anySet, anyArr) {
  return anyArr.every((value) => anySet.has(value));
}
