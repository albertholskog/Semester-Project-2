import { apiCall } from "./apiCall.mjs";
import { bidUrl } from "../url.mjs";
import { token, credit } from "./localstorage.mjs";
import { creditCheckApiCall } from "./creditcheck.mjs";
import { listingsEntryApiCall } from "./specificprod.mjs";
import { displayErrorMessage } from "../innerhtml/displayError.mjs";

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
