/**
 * Calculates the time remaining until the given end time.
 *
 * @param {string} endTime - The end time, as a date and time string.
 * @returns {number[]} An array of the form [days, hours, minutes, seconds]
 *   representing the time remaining until the end time.
 */

export function timeformat(endTime) {
   const listingEndTime = new Date(`${endTime}`);

   const currentTime = new Date().getTime();

   const timeGap = listingEndTime - currentTime;

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const daysRemaining = Math.floor(timeGap / day);
   const hoursRemaining = Math.floor((timeGap % day) / hour);
   const minuteRemaining = Math.floor((timeGap % hour) / minute);
   const secondRemaining = Math.floor((timeGap % minute) / second);

   return [daysRemaining, hoursRemaining, minuteRemaining, secondRemaining];
}
