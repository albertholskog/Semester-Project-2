export function timeformat() {
   console.log("format");
   const listingEndTime = new Date("2022-12-01T23:59:00.000Z").getTime();
   const currentTime = new Date().getTime();
   const timeGap = listingEndTime - currentTime;
   console.log(timeGap);
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;

   const daysRemaining = Math.floor(timeGap / day);
   const hoursRemaining = Math.floor((timeGap % day) / hour);
   const minuteRemaining = Math.floor((timeGap % hour) / minute);
   const secondRemaining = Math.floor((timeGap % minute) / second);
   console.log(daysRemaining);
   console.log(hoursRemaining);
   console.log(minuteRemaining);
   console.log(secondRemaining);
   const test = new Intl.DateTimeFormat("default");
   console.log(test);
}
