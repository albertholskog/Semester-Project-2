import { apiCall } from "./apiCall.js";
import { bidUrl } from "../url.js";
import { token, credit } from "./localstorage.js";
import { creditCheckApiCall } from "./creditcheck.js";
import { listingsEntryApiCall } from "./specificprod.js";
import { displayErrorMessage } from "../innerhtml/displayError.js";

/**
 * makeBid is a function that take noe argument, but it has a addventlistiner that lisen on submit.
 * It checks that you bid is less than what you have in credit and the bid is greater than what is the current bid
 */

export async function makeBid() {
   const errorContainer = document.querySelector(".container__delete");
   const bidInput = document.querySelector("#bid__input");
   const formBid = document.querySelector(".form__bid");
   const errorBid = document.querySelector(".error__bid");
   formBid.addEventListener("submit", async (e) => {
      e.preventDefault();
      const currentArr = await listingsEntryApiCall();
      console.log(currentArr);
      const amountValue = bidInput.value;
      const amountNum = Number(amountValue);
      const bidAmount = { amount: amountNum };
      console.log(amountNum);
      const creditNum = parseFloat(credit);

      if (currentArr.length >= 1) {
         const currentBid = currentArr.pop().amount;
         console.log(currentBid);
         try {
            if (amountNum <= creditNum && amountNum > currentBid) {
               apiCall(bidUrl, "POST", token, bidAmount);
               console.log("inni første");
               creditCheckApiCall();
               setTimeout(() => {
                  window.location.reload();
               }, 500);
            } else {
               console.log("ute");
               bidInput.classList.add("border-err");
               errorBid.innerHTML = `Bid must be higher than the current bid`;
            }
         } catch (error) {
            errorContainer.innerHTML = displayErrorMessage();
         }
      } else {
         try {
            if (amountNum <= creditNum && amountNum > 0) {
               apiCall(bidUrl, "POST", token, bidAmount);
               console.log("inni 2");
               creditCheckApiCall();
               setTimeout(() => {
                  window.location.reload();
               }, 500);
            } else {
               console.log("ute 2");
               bidInput.classList.add("border-err");
               errorBid.innerHTML = `Bid must be higher than the current bid`;
            }
         } catch (error) {
            errorContainer.innerHTML = displayErrorMessage();
         }
      }
   });
}
