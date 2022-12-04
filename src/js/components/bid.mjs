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
      console.log(typeof amountNum);
      console.log(typeof creditNum);

      if (amountNum <= creditNum) {
         try {
            const data = await fetch(bidUrl, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
               },
               body: JSON.stringify(bidAmount),
            });
            const jsonData = await data.json();
            console.log(jsonData);
            creditCheckApiCall();
         } catch (error) {
            console.log(error);
         } finally {
            setTimeout(() => {
               listingsEntryApiCall();
            }, "500");
         }
      } else {
         console.log("ikke");
      }
   });
}
