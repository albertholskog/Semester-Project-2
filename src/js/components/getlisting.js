import { getAllListingUrl } from "../url.js";
import { timeformat } from "./timeformat.js";
import { apiCall } from "./apiCall.js";
import { cardInnerHTML } from "../innerhtml/innerhtmlcard.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";
import { sortArray } from "./sort.js";

/**
 * getAllListingsApiCall is getting object form the apicall and looping through it so that you can publish the page,
 * it check for the last bid.
 */

export async function getAllListingApiCall() {
   const cardContainer = document.querySelector(".container__card");
   const spinner = document.querySelector(".spinner-container");
   try {
      const jsonData = await apiCall(getAllListingUrl, "GET");
      for (let i = 0; i < 9; i++) {
         const element = jsonData[i];

         sortArray(element.bids);
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
      cardContainer.innerHTML = displayErrorMessage("Api faild to get listing");
   }
}
