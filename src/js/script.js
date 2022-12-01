import { registerUser } from "./components/register.mjs";
import { loginApiCall } from "./components/login.mjs";
import { CreateListingApiCall } from "./components/Createlisting.mjs";
import { searchApiCall } from "./components/search.mjs";
import { logout } from "./components/logout.mjs";
import { updatenavbar } from "./components/navbar.mjs";
import { timeformat } from "./components/timeformat.mjs";

loginApiCall();
registerUser();
CreateListingApiCall();
searchApiCall();

updatenavbar();
logout();
timeformat();
