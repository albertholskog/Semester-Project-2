import { profillistingsUrl } from "../url.js";
import { apiCall } from "./apiCall.js";
import { token } from "./localstorage.js";
import { timeformat } from "./timeformat.js";
import { cardInnerHTML } from "../innerhtml/innerhtmlcard.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";

export async function myListingsApiCall() {
   const spinner = document.querySelector(".spinner-container--mylisting");

   const containerMyListing = document.querySelector(
      ".container__yours--listings"
   );

   try {
      const jsonData = await apiCall(profillistingsUrl, "GET", token);
      console.log(jsonData.length);
      if (jsonData.length >= 1) {
         containerMyListing.innerHTML = "";
      }
      for (let i = 0; i < jsonData.length; i++) {
         const element = jsonData[i];
         const [
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining,
         ] = timeformat(`${element.endsAt}`);

         cardInnerHTML(
            containerMyListing,
            element,
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining
         );
      }
      spinner.innerHTML = "";
   } catch (error) {
      console.log(error);
      containerMyListing.innerHTML = displayErrorMessage(
         "Failed to load your listings"
      );
   }
}
