import { getAllListingUrl } from "../url.mjs";
import { timeformat } from "./timeformat.mjs";
import { apiCall } from "./apiCall.mjs";
import { cardInnerHTML } from "../innerhtml/innerhtmlcard.mjs";
import { displayErrorMessage } from "../innerhtml/displayError.mjs";
const cardContainer = document.querySelector(".container__card");
const spinner = document.querySelector(".spinner-container");
export async function getAllListingApiCall() {
   try {
      const jsonData = await apiCall(getAllListingUrl, "GET");

      for (let i = 0; i < 9; i++) {
         const element = jsonData[i];

         const [
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining,
         ] = timeformat(`${element.endsAt}`);

         const lastbidobj = element.bids;

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
      cardContainer.innerHTML = displayErrorMessage("Api faild to get listing");
   }
}
