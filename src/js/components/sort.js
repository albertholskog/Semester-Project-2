/**
 * sortlistArr fix the order of the list
 * from smallest to biggest amount
 * @param {Array} a the first element to compare
 * @param {Array} b the second element to compare
 * @returns {number} defference between the "amount"
 */

export function sortlistArr(a, b) {
   return a.amount - b.amount;
}

/**
 * sort the element that give you a sort array bast on "amount"
 * @param {object[]} list - array to sort, each element in the array should have a "amount"
 */

export function sortArray(list) {
   list.sort(sortlistArr);
}
