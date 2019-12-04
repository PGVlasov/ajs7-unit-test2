// TODO: write your code here
export default function heroRange(arr) {
  arr.sort((a, b) => a.health - b.health);
  const array = arr.reverse();
  return array;
}
