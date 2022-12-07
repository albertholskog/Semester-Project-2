import { creditsUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";

import { apiCall } from "./apiCall.mjs";

export async function creditCheckApiCall() {
   try {
      const jsonData = await apiCall(creditsUrl, "GET", token);

      const credit = jsonData.credits;

      localStorage.setItem("credit", credit);
      return jsonData;
   } catch (error) {
      console.log(error);
   }
}
