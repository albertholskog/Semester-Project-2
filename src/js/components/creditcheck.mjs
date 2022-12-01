import { creditsUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";

export async function creditCheckApiCall() {
   try {
      const data = await fetch(creditsUrl, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      });
      const jsonData = await data.json();
      console.log(jsonData);
      const credit = jsonData.credits;

      localStorage.setItem("credit", credit);
   } catch (error) {
      console.log(error);
   }
}
