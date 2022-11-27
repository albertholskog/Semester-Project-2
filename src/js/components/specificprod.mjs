import { listingsEntryUrl } from "../url.mjs";

const prodCarousel = document.querySelector(".prod__carousel");
const prodInfo = document.querySelector(".prod__info");

export async function listingsEntryApiCall() {
   const data = await fetch(listingsEntryUrl);
   const element = await data.json();
   console.log(element);

   prodCarousel.innerHTML += `<div id="carouselExampleControls" class="carousel slide h-100" data-bs-ride="carousel">
                                    <div class="carousel-inner h-100 rounded-1">
                                       <div class="carousel-item active h-100">
                                          <img
                                                 src="${element.media}"
                                                 onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                                   class="d-block w-100 h-100"
                                                   alt="product image for ${element.title}"/>
                                       </div>
                                    <div class="carousel-item h-100">
                                          <img
                                                src="${element.media}"
                                                onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                                class="d-block w-100 h-100"
                                                alt="product image for ${element.title}"/>
                                    </div>
                                    <div class="carousel-item h-100">
                                             <img
                                                src="${element.media}"
                                                onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                                class="d-block w-100 h-100"
                                                alt="product image for ${element.title}"/>
                                    </div>
                                 </div>
                                      <button
                                         class="carousel-control-prev"
                                         type="button"
                                         data-bs-target="#carouselExampleControls"
                                         data-bs-slide="prev"
                                      >
                                         <span
                                            class="carousel-control-prev-icon"
                                            aria-hidden="true"
                                         ></span>
                                         <span class="visually-hidden">Previous</span>
                                      </button>
                                      <button
                                          class="carousel-control-next"
                                         type="button"
                                         data-bs-target="#carouselExampleControls"
                                         data-bs-slide="next"
                                      >
                                         <span
                                            class="carousel-control-next-icon"
                                            aria-hidden="true"
                                         ></span>
                                         <span class="visually-hidden">Next</span>
                                      </button>
                                    </div>`;

   if (element.bids.length >= 1) {
      const lastBid = element.bids[element.bids.length - 1].amount;
      prodInfo.innerHTML += `      
                                       <div class="my-3">
                                       <h3 class="fs-4 fw-normal text-dark">
                                          Current Bid: <span>${lastBid}</span>
                                       </h3>
                                       <h3 class="fs-4 fw-normal text-dark">
                                          Time remaining: <span>${element.endsAt}</span>
                                       </h3>
                                       </div>
                                       <div class="my-5 mx-1">
                                       <ul class="nav nav-tabs" id="myTab" role="tablist">
                                          <li class="nav-item" role="presentation">
                                             <button
                                                class="nav-link active border-0 rounded-circle text-center"
                                                id="info-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#info-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="info-tab-pane"
                                                aria-selected="true"
                                             >
                                                <i class="bi bi-info-circle text-dark fs-3"></i>
                                             </button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                             <button
                                                class="nav-link border-0 rounded-circle text-center"
                                                id="biding-history-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#biding-history-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="biding-history-tab-pane"
                                                aria-selected="false"
                                             >
                                                <i class="bi bi-clock-history text-dark fs-3"></i>
                                             </button>
                                          </li>
                                       </ul>
                                       <div class="tab-content mt-3" id="myTabContent">
                                          <div
                                             class="tab-pane fade show active"
                                             id="info-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="info-tab"
                                             tabindex="0"
                                          >
                                             <p>
                                             
                                            ${element.title}<br>
                                            ${element.description}
                                             </p>
                                          </div>
                                          <div
                                             class="tab-pane fade"
                                             id="biding-history-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="biding-history-tab"
                                             tabindex="0"
                                          >
                                             <p>navn <span>$</span></p>
                                          </div>
                                       </div>
                                       </div>`;
   } else {
      prodInfo.innerHTML += `      
                                       <div class="my-3">
                                       <h3 class="fs-4 fw-normal text-dark">
                                          Current Bid: <span>0</span>
                                       </h3>
                                       <h3 class="fs-4 fw-normal text-dark">
                                          Time remaining: <span>${element.endsAt}</span>
                                       </h3>
                                       </div>
                                       <div class="my-5 mx-1">
                                       <ul class="nav nav-tabs" id="myTab" role="tablist">
                                          <li class="nav-item" role="presentation">
                                             <button
                                                class="nav-link active border-0 rounded-circle text-center"
                                                id="info-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#info-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="info-tab-pane"
                                                aria-selected="true"
                                             >
                                                <i class="bi bi-info-circle text-dark fs-3"></i>
                                             </button>
                                          </li>
                                          <li class="nav-item" role="presentation">
                                             <button
                                                class="nav-link border-0 rounded-circle text-center"
                                                id="biding-history-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#biding-history-tab-pane"
                                                type="button"
                                                role="tab"
                                                aria-controls="biding-history-tab-pane"
                                                aria-selected="false"
                                             >
                                                <i class="bi bi-clock-history text-dark fs-3"></i>
                                             </button>
                                          </li>
                                       </ul>
                                       <div class="tab-content mt-3" id="myTabContent">
                                          <div
                                             class="tab-pane fade show active"
                                             id="info-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="info-tab"
                                             tabindex="0"
                                          >
                                             <p>
                                             
                                          ${element.title}<br>
                                          ${element.description}
                                             </p>
                                          </div>
                                          <div
                                             class="tab-pane fade"
                                             id="biding-history-tab-pane"
                                             role="tabpanel"
                                             aria-labelledby="biding-history-tab"
                                             tabindex="0"
                                          >
                                             <p>navn <span>$</span></p>
                                          </div>
                                       </div>
                                       </div>`;
   }
}
