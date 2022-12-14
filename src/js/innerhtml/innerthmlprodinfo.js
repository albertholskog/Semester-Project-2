export function prodBidInnerHtml(container, bid = 0, day, hour, min, sec) {
   return (container.innerHTML = `
                                        <h3 class="fs-4 text-success fw-light text-center">
                                            Current Bid: 
                                        </h3>
                                        <h3 class="fs-4 text-success fw-light text-center">
                                                ${bid}
                                        </h3>
                                        <h3 class="fs-4 text-success fw-light text-center mt-3 ">
                                            Time remaining:
                                        </h3>
                                        <h3 class="fs-4 text-success fw-light text-center">
                                            <span class="me-1 text-success fw-light">${day}d </span>                    
                                            <span class="me-1 text-success fw-light">${hour}h </span>                    
                                            <span class="me-1 text-success fw-light">${min}m </span>                    
                                            <span class="text-success fw-light" >${sec}s </span>
                                        </h3>`);
}

export function prodInfoInnerHtml(container, element) {
   return (container.innerHTML = `   <div>
                                        <p class="text-success fw-light m-1 fs-3">
                                        ${element.title} 
                                        </p>
                                        <p class="text-success fw-light m-1">
                                        ${element.description}
                                        </p>
                                    </div>`);
}
