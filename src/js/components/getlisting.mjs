import { getAllListingUrl } from "../url.mjs";

const cardContainer = document.querySelector(".container__card");
export async function getAllListingApiCall() {
   try {
      const data = await fetch(getAllListingUrl);
      const jsonData = await data.json();

      for (let i = 0; i < 9; i++) {
         const element = jsonData[i];
         cardContainer.innerHTML += `  
                        <div class="col-12 col-md-6 col-lg-4 mb-5">
                        <div class="card position-relative shadow ">
                         <a href="/specificprod.html?id=${element.id}">
                            <img class="card-img-top"
                            src="${element.media}"
                            onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                            alt="image of the product"/>
                        </a>
                        <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light">                     
                         ${element.endsAt}
                        </h4>
                        <div class="card-body position-relative">
                        <a href="#"
                        class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
                        ><span class="position-absolute top-50 start-50 translate-middle fw-bold fs-4"> BID</span>
                        </a>
                        <h3 class="card-title text-center mt-4">${element.title}</h3>
                        <p class="card-text text-center">269</p>
                        </div>
                        </div>
                        </div>`;
      }
   } catch (error) {
      console.log(error);
   }
}
