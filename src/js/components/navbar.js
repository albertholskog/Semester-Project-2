import { token } from "./localstorage.js";

/**
 * updatenavbar checks if the user has a token, if he does then navbar will update itself
 */

export function updatenavbar() {
   const navbarlinks = document.querySelector(".container__navbar--link");
   if (token !== null) {
      navbarlinks.innerHTML = ` <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link text-center text-success mx-lg-2 fs-5 "
                                            href="/index.html"
                                            >Home</a
                                        >
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a 
                                            class="nav-link dropdown-toggle text-center text-success mx-lg-2 fs-5 "
                                            href="#"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            data-cy="profil-container"
                                        >
                                            Profile
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li>
                                            <a data-cy="my-profil"
                                                class="dropdown-item text-center"
                                                href="/profil.html"
                                                >My Profile</a
                                            >
                                            </li>
                                            <li><hr class="dropdown-divider"/></li>
                                            <li class="d-flex justify-content-center">
                                            <a class="dropdown-item text-center logout__btn" data-cy="logout-btn" href="#"
                                                >Logout</a
                                            >
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link text-center  mb-4 mb-lg-0 text-success fs-5 "
                                            data-bs-toggle="modal"
                                            data-bs-target="#createlistingModal"
                                            type="button"
                                            href="/createlisting.html"
                                            data-cy="create-listing"
                                            >Create listing</a
                                        >
                                    </li>
                                </ul>`;
   } else {
      navbarlinks.innerHTML += `
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a
                                            class="nav-link text-center text-success mx-lg-2 fs-5"
                                            href="/index.html"
                                            >Home</a
                                        >
                                    </li>
                                    <li class="nav-item ">
                                        <a
                                            class="nav-link  text-center text-success mx-lg-2 fs-5 "
                                            href="#loginRegisterModalToggle"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="modal"
                                            data-cy="login-modal"
                                            
                                        >
                                            Login
                                        </a>
                                    </li>
                                </ul>`;
   }
}
