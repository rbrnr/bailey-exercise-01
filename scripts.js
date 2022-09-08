(() => {
  window.onload = function() {
    // write code inside of here. this is a self contained wrapper that runs on page load.

    const circleButton = document.getElementById("circle-button");
    const squareButton = document.getElementById("square-button");
    const circleIcons = document.getElementById("circle-icons");
    const squareIcons = document.getElementById("square-icons");
    const scrollToDownloadBtn = document.getElementById("scroll-to-download");
    const downloadSection = document.getElementById("download-section");

    const productInfo0 = document.getElementById("product-info0");
    const productInfo1 = document.getElementById("product-info1");
    const productInfo2 = document.getElementById("product-info2");
    const productInfo3 = document.getElementById("product-info3");
    const productInfo4 = document.getElementById("product-info4");
    const productInfo5 = document.getElementById("product-info5");
    const productInfo6 = document.getElementById("product-info6");
    const productInfo7 = document.getElementById("product-info7");
    const productInfo8 = document.getElementById("product-info8");


    const shadow0 = document.getElementById("shadow0");
    const shadow1 = document.getElementById("shadow1");
    const shadow2 = document.getElementById("shadow2");
    const shadow3 = document.getElementById("shadow3");
    const shadow4 = document.getElementById("shadow4");
    const shadow5 = document.getElementById("shadow5");
    const shadow6 = document.getElementById("shadow6");
    const shadow7 = document.getElementById("shadow7");
    const shadow8 = document.getElementById("shadow8");



    scrollToDownloadBtn.addEventListener("click", scrollToDownload);
      function scrollToDownload() {
        downloadSection.scrollIntoView({behavior: "smooth"});
      }

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

        // if(squareIcons.classList.contains('hidden-transition')) {
        //   squareIcons.classList.remove('hidden-transition');
        //   squareIcons.classList.add('visible-transition');
        //   circleIcons.classList.remove('visible-transition');
        //   circleIcons.classList.add('hidden-transition');
          // circleIcons.style.display = "none";
        }
    }

    // TODO work on mouse over of details, to show shadow box on the image as well.
    // OLD SOLUTION THAT I COULDN'T FIGURE OUT

    // for(var i=0; i<productInfo.length; i++) { 
    //   var k = 'shadow';
    //   var elm = eval('var ' + k + i + '= ' + i + ';');
    //   var shadow = document.getElementsById(elm);
    // shadow.addEventListener("mouseover", shadowbox);
    //   function shadowbox() {
    //     product[i].classList.add('shadowbox');
    //   }
    // }

    productInfo0.addEventListener("mouseover", shadowbox0);
    function shadowbox0() {
      shadow0.classList.add('shadowbox');
    }

    productInfo0.addEventListener("mouseout", removeshadowbox0);
    function removeshadowbox0() {
      shadow0.classList.remove('shadowbox');
    }

    productInfo1.addEventListener("mouseover", shadowbox1);
      function shadowbox1() {
        shadow1.classList.add('shadowbox');
      }

      productInfo1.addEventListener("mouseout", removeshadowbox1);
      function removeshadowbox1() {
        shadow1.classList.remove('shadowbox');
      }

      productInfo2.addEventListener("mouseover", shadowbox2);
      function shadowbox2() {
        shadow2.classList.add('shadowbox');
      }

      productInfo2.addEventListener("mouseout", removeshadowbox2);
      function removeshadowbox2() {
        shadow2.classList.remove('shadowbox');
      }

      productInfo3.addEventListener("mouseover", shadowbox3);
      function shadowbox3() {
        shadow3.classList.add('shadowbox');
      }

      productInfo3.addEventListener("mouseout", removeshadowbox3);
      function removeshadowbox3() {
        shadow3.classList.remove('shadowbox');
      }

      productInfo4.addEventListener("mouseover", shadowbox4);
      function shadowbox4() {
        shadow4.classList.add('shadowbox');
      }

      productInfo4.addEventListener("mouseout", removeshadowbox4);
      function removeshadowbox4() {
        shadow4.classList.remove('shadowbox');
      }

      productInfo5.addEventListener("mouseover", shadowbox5);
      function shadowbox5() {
        shadow5.classList.add('shadowbox');
      }

      productInfo5.addEventListener("mouseout", removeshadowbox5);
      function removeshadowbox5() {
        shadow5.classList.remove('shadowbox');
      }

      productInfo6.addEventListener("mouseover", shadowbox6);
      function shadowbox6() {
        shadow6.classList.add('shadowbox');
      }

      productInfo6.addEventListener("mouseout", removeshadowbox6);
      function removeshadowbox6() {
        shadow6.classList.remove('shadowbox');
      }

      productInfo7.addEventListener("mouseover", shadowbox7);
      function shadowbox7() {
        shadow7.classList.add('shadowbox');
      }

      productInfo7.addEventListener("mouseout", removeshadowbox7);
      function removeshadowbox7() {
        shadow7.classList.remove('shadowbox');
      }

      productInfo8.addEventListener("mouseover", shadowbox8);
      function shadowbox8() {
        shadow8.classList.add('shadowbox');
      }

      productInfo8.addEventListener("mouseout", removeshadowbox8);
      function removeshadowbox8() {
        shadow8.classList.remove('shadowbox');
      }

    
  }
    

})();