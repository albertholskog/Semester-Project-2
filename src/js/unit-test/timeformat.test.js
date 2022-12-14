import { timeformat } from "../components/timeformat";

test("timeformat function", () => {
   const endTime = new Date(
      Date.now() +
         1 * 24 * 60 * 60 * 1000 +
         2 * 60 * 60 * 1000 +
         3 * 60 * 1000 +
         5 * 1000
   );
   const result = timeformat(endTime);
   expect(result).toEqual([1, 2, 3, 4]);
});
