import { id } from "./components/queryString.js";
import { userName } from "./components/localstorage.js";
const baseApi = "https://api.noroff.dev";
export const registerUrl = `${baseApi}/api/v1/auction/auth/register`;
export const loginUrl = `${baseApi}/api/v1/auction/auth/login`;
export const getAllListingUrl = `${baseApi}/api/v1/auction/listings?sort=created&sortOrder=desc&_active=true&_seller=true&_bids=true`;

export const profillistingsUrl = `${baseApi}/api/v1/auction/profiles/${userName}/listings?sortOrder=desc&_active=true&_bids=true`;
export const profilUrl = `${baseApi}/api/v1/auction/profiles/${userName}?_listings=true&sortOrder=desc&_active=true`;
export const updateAvatarUrl = `${baseApi}/api/v1/auction/profiles/${userName}/media`;

export const listingsEntryUrl = `${baseApi}/api/v1/auction/listings/${id}?_bids=true&_seller=true`;
export const bidUrl = `${baseApi}/api/v1/auction/listings/${id}/bids`;

export const createListingUrl = `${baseApi}/api/v1/auction/listings`;
export const creditsUrl = `${baseApi}/api/v1/auction/profiles/${userName}/credits`;

export const deleteEntryUrl = `${baseApi}/api/v1/auction/listings/${id}`;
