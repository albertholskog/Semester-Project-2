import { creditsUrl } from "../url.js";
import { token } from "./localstorage.js";

import { apiCall } from "./apiCall.js";

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
