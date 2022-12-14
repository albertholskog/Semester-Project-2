import { apiCall } from "./apiCall.js";
import { getAllListingUrl } from "../url.js";
import { timeformat } from "./timeformat.js";
import { cardInnerHTML } from "../innerhtml/innerhtmlcard.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";

export async function seeMoreApiCall() {
   const btnSeeMore = document.querySelector(".btn__seemore");
   btnSeeMore.addEventListener("click", async () => {
      const cardContainer = document.querySelector(".container__card");

      try {
         cardContainer.innerHTML = "";
         const jsonData = await apiCall(getAllListingUrl, "GET");
         for (let i = 0; i < jsonData.length; i++) {
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
         btnSeeMore.innerHTML = "";
      } catch (error) {
         cardContainer.innerHTML = displayErrorMessage();
      }
   });
}
