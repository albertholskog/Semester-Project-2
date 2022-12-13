import { registerUser } from "./components/register.mjs";
import { loginApiCall } from "./components/login.mjs";
import { createListingApiCall } from "./components/Createlisting.mjs";
import { seeMoreApiCall } from "./components/seemorelisting.mjs";
import { logout } from "./components/logout.mjs";
import { updatenavbar } from "./components/navbar.mjs";

loginApiCall();
registerUser();
createListingApiCall();
updatenavbar();
logout();
seeMoreApiCall();
