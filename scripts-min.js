window.onload=function(){const e=document.getElementById("circle-button"),s=document.getElementById("square-button"),t=document.getElementById("circle-icons"),n=document.getElementById("square-icons"),l=document.getElementsByClassName("product-details"),i=document.getElementsByClassName("shadow");e.addEventListener("click",(function(){e.classList.add("black-link"),e.classList.remove("inactive-grey"),s.classList.add("inactive-grey"),s.classList.remove("black-link"),"none"===t.style.display&&(t.style.display="flex",n.style.display="none")})),s.addEventListener("click",(function(){s.classList.add("black-link"),s.classList.remove("inactive-grey"),e.classList.add("inactive-grey"),e.classList.remove("black-link"),"none"===n.style.display&&(n.style.display="flex",t.style.display="none")})),l.addEventListener("mouseover",(function(){i.classList.add("shadowbox")}))};