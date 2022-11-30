import { id } from "./components/queryString.mjs";
import { userName } from "./components/localstorage.mjs";
const baseApi = "https://api.noroff.dev";
export const registerUrl = `${baseApi}/api/v1/auction/auth/register`;
export const loginUrl = `${baseApi}/api/v1/auction/auth/login`;
export const getAllListingUrl = `${baseApi}/api/v1/auction/listings?_bids=true&sort=created&sortOrder=desc`;

export const profilUrl = `${baseApi}/api/v1/auction/profiles/${userName}?_listings=true`;
export const updateAvatarUrl = `${baseApi}/api/v1/auction/profiles/${userName}/media`;

export const listingsEntryUrl = `${baseApi}/api/v1/auction/listings/${id}?_bids=true`;
export const bidUrl = `${baseApi}/api/v1/auction/listings/${id}/bids
`;
export const CreateListingUrl = `${baseApi}/api/v1/auction/listings`;
