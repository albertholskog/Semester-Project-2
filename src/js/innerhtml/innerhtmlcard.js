export function cardInnerHTML(
   container,
   element,
   day,
   hour,
   min,
   sec,
   amount = 0
) {
   return (container.innerHTML += ` <div class="col-12 col-md-6 col-lg-4 mb-4 rounded-bottom">
                                        <div class="card position-relative shadow h-100 bg-ligth border-0 rounded-bottom bg-light">
                                            <a href="./specificprod.html?id=${element.id}">
                                                <img class="card-img-top card__size--img"
                                                src="${element.media[0]}"
                                                onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                                alt="image of the product"/>
                                                </a>
                                                <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light rounded-1"> 
                                                <span class="me-1 text-success fw-light">${day}d </span>                    
                                                <span class="me-1 text-success fw-light">${hour}h </span>                    
                                                <span class="me-1 text-success fw-light">${min}m </span>                    
                                                <span class="text-success fw-light">${sec}s </span>                    

                                                </h4>
                                            <div class="card-body position-relative bg-light rounded-bottom ">
                                                <a href="/specificprod.html?id=${element.id}"
                                                class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
                                                ><span class="position-absolute top-50 start-50 translate-middle  fs-4"> BID</span>
                                                </a>
                                                <h3 class="card-title text-center mt-4 text-success fw-light">${element.title}</h3>
                                                <p class="card-text text-center fs-5 text-success fw-light mt-2 m-0 ">Current bid</p>
                                                <p class="card-text text-center fs-5 text-success fw-light">${amount} Credit</p>
                                            </div>
                                        </div>
                                    </div>`);
}

// export function myCardInnerHTML(container, element, day, hour, min, sec) {
//    return (container.innerHTML += ` <div class="col-12 col-md-6 col-lg-4 mb-5 rounded-bottom">
//                                         <div class="card position-relative shadow h-100 bg-ligth border-0 rounded-bottom bg-light">
//                                             <a href="/specificprod.html?id=${element.id}" >
//                                                 <img class="card-img-top card__size--img"
//                                                 data-cy="my-listing"
//                                                 src="${element.media[0]}"
//                                                 onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
//                                                 alt="image of the product"/>
//                                                 </a>
//                                                 <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light rounded-1">
//                                                 <span class="me-1 text-success fw-light">${day}d </span>
//                                                 <span class="me-1 text-success fw-light">${hour}h </span>
//                                                 <span class="me-1 text-success fw-light">${min}m </span>
//                                                 <span class="text-success fw-light">${sec}s </span>
//                                                 </h4>
//                                             <div class="card-body position-relative bg-light rounded-bottom test ">
//                                             <a href="/specificprod.html?id=${element.id}"
//                                             class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
//                                             ><span class="position-absolute top-50 start-50 translate-middle  fs-4"> Enter</span>
//                                             </a>
//                                                 <h3 class="card-title text-center mt-4 text-success fw-light">${element.title}</h3>
//                                             </div>
//                                         </div>
//                                     </div>`);
// }
