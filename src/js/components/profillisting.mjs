import { profillistingsUrl } from "../url.mjs";
import { apiCall } from "./apiCall.mjs";
import { token } from "./localstorage.mjs";
import { timeformat } from "./timeformat.mjs";
import { myCardInnerHTML } from "../innerhtml/innerhtmlcard.mjs";

export async function myListingsApiCall() {
   try {
      const containerMyListing = document.querySelector(
         ".container__yours--listings"
      );
      const jsonData = await apiCall(profillistingsUrl, "GET", token);

      for (let i = 0; i < jsonData.length; i++) {
         const element = jsonData[i];
         const [
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining,
         ] = timeformat(`${element.endsAt}`);

         myCardInnerHTML(
            containerMyListing,
            element,
            daysRemaining,
            hoursRemaining,
            minuteRemaining,
            secondRemaining
         );
      }
   } catch (error) {
      console.log(error);
   }
}
