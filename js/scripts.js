document.addEventListener("DOMContentLoaded", function(event) {
  // zadanie 1
  var menuBtn=document.querySelector('.page-nav li');
  var menuHidden = document.querySelector('.page-nav-sublist')
  menuBtn.addEventListener('mouseover', function(){
    menuHidden.style.visibility = 'visible';
    menuHidden.style.opacity = '1';
  })
  menuBtn.addEventListener('mouseout', function(){
    menuHidden.style.visibility = 'hidden';
  })

  //zadanie 2
  var hover = document.querySelector('.style-product');
  var toDisappear = document.querySelector('.features-content-box-title');
  var hoverTwo = document.querySelector('.style-product').nextElementSibling;
  console.log(hoverTwo);
  var toDissapearTwo = document.querySelector('.dpr');
  console.log(toDissapearTwo);
  hover.addEventListener('mouseover', function(){
    toDisappear.style.visibility = 'hidden';
  });
  hover.addEventListener('mouseout', function(){
    toDisappear.style.visibility = 'visible';
  });
  hoverTwo.addEventListener('mouseover', function(){
    toDissapearTwo.style.visibility = 'hidden';
  });
  hoverTwo.addEventListener('mouseout', function(){
    toDissapearTwo.style.visibility = 'visible';
  });
  //zadanie 3

  var chairArr = ['img/images/orange.png','img/images/red.png','img/images/black_chair.png'];
  var chairPos = 2;
  var leftBtn = document.querySelector('.main-slider-prev');
  var rightBtn = document.querySelector('.main-slider-next');
  var sliderDiv = document.querySelector('.main-slider-image');
  leftBtn.addEventListener('click', function() {
    chairPos-=1
    if (chairPos<0) {
      chairPos=2;
    }
    sliderDiv.style.backgroundImage = 'url('+chairArr[chairPos]+')';
  })
  rightBtn.addEventListener('click', function() {
    chairPos+=1
    if (chairPos>2) {
      chairPos=0;
    }
    sliderDiv.style.backgroundImage = 'url('+chairArr[chairPos]+')';
  })

});
