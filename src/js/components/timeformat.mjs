export function timeformat(endTime) {
   const listingEndTime = new Date(`${endTime}`).getTime();
   const currentTime = new Date().getTime();

   const timeGap = listingEndTime - currentTime;

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const daysRemaining = Math.floor(timeGap / day);
   const hoursRemaining = Math.floor((timeGap % day) / hour - 1);
   const minuteRemaining = Math.floor((timeGap % hour) / minute);
   const secondRemaining = Math.floor((timeGap % minute) / second);

   return [daysRemaining, hoursRemaining, minuteRemaining, secondRemaining];
}
