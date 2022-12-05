import { creditsUrl } from "../url.mjs";

import { apiCall, optionGetToken } from "./apiCall.mjs";

export async function creditCheckApiCall() {
   try {
      const jsonData = await apiCall(creditsUrl, optionGetToken);

      const credit = jsonData.credits;

      localStorage.setItem("credit", credit);
      return jsonData;
   } catch (error) {
      console.log(error);
   }
}
