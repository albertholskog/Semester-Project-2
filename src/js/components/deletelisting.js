import { apiCall } from "./apiCall.js";
import { deleteEntryUrl } from "../url.js";
import { token } from "./localstorage.js";

export async function deleteApiCall() {
   apiCall(deleteEntryUrl, "DELETE", token);

   history.back();
}
