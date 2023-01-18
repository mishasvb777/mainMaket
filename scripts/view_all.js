let buttonViewAll = document.querySelector('.description__link-slider-brands');

let brandsList = document.querySelector('.slider-brands__swiper');

buttonViewAll.addEventListener('click', function(){
  brandsList.classList.toggle('slider-brands__wrapper-view-all');
  buttonViewAll.classList.toggle('slider-brands__wrapper-view-all-button');
  let buttonTitle = 'Показать все' 
  if(buttonViewAll.textContent == buttonTitle){
    buttonViewAll.textContent = 'Скрыть';
  } else {
    buttonViewAll.textContent = buttonTitle;
  }
  
  
});