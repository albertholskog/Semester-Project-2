import { getAllListingUrl } from "../url.mjs";
import { timeformat } from "./timeformat.mjs";
import { apiCall, optionGet } from "./apiCall.mjs";
import { cardInnerHTML } from "../innerhtml/innerhtmlcard.mjs";
const cardContainer = document.querySelector(".container__card");
const spinner = document.querySelector(".spinner-container");
export async function getAllListingApiCall() {
   try {
      const jsonData = await apiCall(getAllListingUrl, optionGet);

      for (let i = 0; i < 9; i++) {
         const element = jsonData[i];

         const [
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining,
         ] = timeformat(`${element.endsAt}`);

         const lastbidobj = element.bids;
         console.log(lastbidobj.length);
         if (lastbidobj.length >= 1) {
            const lastbid = lastbidobj.pop().amount;

            cardInnerHTML(
               cardContainer,
               element,
               daysRemaining,
               hoursRemaining,
               minuteRemaining,
               secondRemaining,
               lastbid
            );
         } else {
            cardInnerHTML(
               cardContainer,
               element,
               daysRemaining,
               hoursRemaining,
               minuteRemaining,
               secondRemaining,
               0
            );
         }
      }

      spinner.innerHTML = "";
   } catch (error) {
      console.log(error);
   }
}
