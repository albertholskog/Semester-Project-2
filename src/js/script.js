import { registerUser } from "./components/register.js";
import { loginApiCall } from "./components/login.js";
import { createListingApiCall } from "./components/createlisting.js";
import { logout } from "./components/logout.js";
import { updatenavbar } from "./components/navbar.js";

loginApiCall();
registerUser();
createListingApiCall();
updatenavbar();
logout();
