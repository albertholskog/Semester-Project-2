function sortlistArr(a, b) {
   return a.amount - b.amount;
}
export function sortArray(list) {
   list.sort(sortlistArr);
}
