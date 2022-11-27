import { id } from "./components/queryString.mjs";

const baseApi = "https://api.noroff.dev";
export const registerUrl = `${baseApi}/api/v1/auction/auth/register`;
export const loginUrl = `${baseApi}/api/v1/auction/auth/login`;
export const getAllListingUrl = `${baseApi}/api/v1/auction/listings`;
export const listingsEntryUrl = `${baseApi}/api/v1/auction/listings/${id}?_bids=true`;
