import { registerUser } from "./components/register.mjs";
import { loginApiCall } from "./components/login.mjs";
import { CreateListingApiCall } from "./components/Createlisting.mjs";
import { searchApiCall } from "./components/search.mjs";

loginApiCall();
registerUser();
CreateListingApiCall();
searchApiCall();
