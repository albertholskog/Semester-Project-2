import { apiCall } from "./apiCall.mjs";
import { bidUrl } from "../url.mjs";
import { token, credit } from "./localstorage.mjs";
import { creditCheckApiCall } from "./creditcheck.mjs";
import { listingsEntryApiCall } from "./specificprod.mjs";

const bidInput = document.querySelector("#bid__input");
const formBid = document.querySelector(".form__bid");

export async function makeBid() {
   formBid.addEventListener("submit", async (e) => {
      e.preventDefault();
      const amountValue = bidInput.value;
      const amountNum = Number(amountValue);
      const bidAmount = { amount: amountNum };
      const creditNum = parseFloat(credit);

      if (amountNum <= creditNum) {
         try {
            const jsonData = apiCall(bidUrl, "POST", token, bidAmount);

            creditCheckApiCall();
            return jsonData;
         } catch (error) {
            console.log(error);
         } finally {
            setTimeout(() => {
               listingsEntryApiCall();
            }, "800");
         }
      } else {
         console.log("ikke");
      }
   });
}
