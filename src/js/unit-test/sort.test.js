import { sortArray } from "../components/sort";

test("sortArray sorts an array of objects in ascending order based on the amount property", () => {
   const arr = [
      { name: "Alice", amount: 10 },
      { name: "Bob", amount: 5 },
      { name: "Charlie", amount: 20 },
   ];

   sortArray(arr);

   expect(arr).toEqual([
      { name: "Bob", amount: 5 },
      { name: "Alice", amount: 10 },
      { name: "Charlie", amount: 20 },
   ]);
});
