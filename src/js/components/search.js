import { getAllListingUrl } from "../url.js";
import { timeformat } from "./timeformat.js";
import { apiCall } from "./apiCall.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";
import { sortArray } from "./sort.js";
import { cardInnerHTML } from "../innerhtml/innerhtmlcard.js";
const searchBar = document.querySelector(".search__bar");
const containerSearch = document.querySelector(".container__card");

let searchArray = [];

searchBar.addEventListener("keyup", (e) => {
   const inputString = e.target.value.toLowerCase();
   const filterSearchArray = searchArray.filter((element) => {
      return element.title.toLowerCase().includes(inputString);
   });
   showSearchResult(filterSearchArray);
});

export async function searchApiCall() {
   try {
      searchArray = await apiCall(getAllListingUrl, "GET");
   } catch (error) {
      console.log("error search api call");
      containerSearch.innerHTML = displayErrorMessage(
         "Search result error occurred"
      );
   }
}

function showSearchResult(result) {
   containerSearch.innerHTML = "";
   result
      .map((element) => {
         const [
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining,
         ] = timeformat(`${element.endsAt}`);

         sortArray(element.bids);
         if (element.bids.length === 0) {
            cardInnerHTML(
               containerSearch,
               element,
               daysRemaining,
               hoursRemaining,
               minuteRemaining,
               secondRemaining
            );
         } else {
            const lastbid = element.bids[element.bids.length - 1];
            const lastBidAmount = lastbid.amount;
            cardInnerHTML(
               containerSearch,
               element,
               daysRemaining,
               hoursRemaining,
               minuteRemaining,
               secondRemaining,
               lastBidAmount
            );
         }
      })
      .join("");
}
