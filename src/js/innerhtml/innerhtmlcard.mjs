export function cardInnerHTML(container, element, day, hour, min, sec, amount) {
   return (container.innerHTML += ` <div class="col-12 col-md-6 col-lg-4 mb-5 ">
                                        <div class="card position-relative shadow h-100">
                                            <a href="/specificprod.html?id=${element.id}">
                                                <img class="card-img-top card__size--img"
                                                src="${element.media[0]}"
                                                onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
                                                alt="image of the product"/>
                                                </a>
                                                <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light"> 
                                                <span class="me-1">${day}d </span>                    
                                                <span class="me-1">${hour}h </span>                    
                                                <span class="me-1">${min}m </span>                    
                                                <span>${sec}s </span>                    

                                                </h4>
                                            <div class="card-body position-relative">
                                                <a href="#"
                                                class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
                                                ><span class="position-absolute top-50 start-50 translate-middle fw-bold fs-4"> BID</span>
                                                </a>
                                                <h3 class="card-title text-center mt-4">${element.title}</h3>
                                                <p class="card-text text-center fs-5">${amount}$</p>
                                            </div>
                                        </div>
                                    </div>`);
}

// cardContainer.innerHTML += `
//                         <div class="col-12 col-md-6 col-lg-4 mb-5 ">
//                         <div class="card position-relative shadow h-100">
//                         <a href="/specificprod.html?id=${element.id}">
//                            <img class="card-img-top card__size--img"
//                            src="${element.media[0]}"
//                            onerror="this.src = '../image/paul-volkmer-qVotvbsuM_c-unsplash.jpg';"
//                            alt="image of the product"/>
//                         </a>
//                         <h4 class="card-text position-absolute top-0 start-0 p-1 bg-light">
//                         <span>D${daysRemaining} </span>
//                         <span>h${hoursRemaining} </span>
//                         <span>m${minuteRemaining} </span>
//                         <span>s${secondRemaining} </span>

//                         </h4>
//                         <div class="card-body position-relative">
//                         <a href="#"
//                         class="btn btn-secondary btn__card position-absolute top-0 start-50 translate-middle rounded-circle shadow"
//                         ><span class="position-absolute top-50 start-50 translate-middle fw-bold fs-4"> BID</span>
//                         </a>
//                         <h3 class="card-title text-center mt-4">${element.title}</h3>
//                         <p class="card-text text-center">${lastbid}</p>
//                         </div>
//                         </div>
//                         </div>`;
