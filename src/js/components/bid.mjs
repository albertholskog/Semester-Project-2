import { apiCall } from "./apiCall.mjs";
import { bidUrl } from "../url.mjs";
import { token, credit } from "./localstorage.mjs";
import { creditCheckApiCall } from "./creditcheck.mjs";
import { listingsEntryApiCall } from "./specificprod.mjs";

const bidInput = document.querySelector("#bid__input");
const formBid = document.querySelector(".form__bid");
const errorBid = document.querySelector(".error__bid");

export async function makeBid() {
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
            } else {
               console.log("ute");
               bidInput.classList.add("border-err");
               errorBid.innerHTML = `Your bid must be higher than the current bid`;
            }
         } catch (error) {
            console.log(error);
         }
      } else {
         try {
            if (amountNum <= creditNum && amountNum > 0) {
               apiCall(bidUrl, "POST", token, bidAmount);
               console.log("inni 2");
               creditCheckApiCall();
            } else {
               console.log("ute 2");
               bidInput.classList.add("border-err");
               errorBid.innerHTML = `Your bid must be higher than the current bid`;
            }
         } catch (error) {
            console.log(error);
         }
      }
   });
}
