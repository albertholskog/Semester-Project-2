import { apiCall } from "./apiCall.mjs";
import { deleteEntryUrl } from "../url.mjs";
import { token } from "./localstorage.mjs";

export async function deleteApiCall() {
   apiCall(deleteEntryUrl, "DELETE", token);

   history.back();
}
