(() => {
  window.onload = function() {
    // write code inside of here. this is a self contained wrapper that runs on page load.

    const circleButton = document.getElementById("circle-button");
    const squareButton = document.getElementById("square-button");
    const circleIcons = document.getElementById("circle-icons");
    const squareIcons = document.getElementById("square-icons");
    const productDetails = document.getElementsByClassName("product-details");
    const product = document.getElementsByClassName("shadow");

    circleButton.addEventListener("click", changeToCircle);
      function changeToCircle() {
        circleButton.classList.add('black-link');
        circleButton.classList.remove('inactive-grey');
        squareButton.classList.add('inactive-grey');
        squareButton.classList.remove('black-link');
        
        if (circleIcons.style.display === "none") {
          circleIcons.style.display = "flex";
          squareIcons.style.display = "none";
        } 
    }

    squareButton.addEventListener("click", changeToSquare);
      function changeToSquare() {
        squareButton.classList.add('black-link');
        squareButton.classList.remove('inactive-grey');
        circleButton.classList.add('inactive-grey');
        circleButton.classList.remove('black-link');

        if (squareIcons.style.display === "none") {
          squareIcons.style.display = "flex";
          circleIcons.style.display = "none";
        } 
    }

    // TODO work on mouse over of details, to show shadow box on the image as well.
    productDetails.addEventListener("mouseover", shadowbox);
      function shadowbox() {
        product.classList.add('shadowbox');
    }
  }
})();