$(document).ready(function () {
  let currentFloor = 2; // переменная где храниться текущий этаж
  let floorPath = $('.home-image path');  // каждый отдельный этаж в svg
  let counterUp = $('.counter-up');  /* кнопка увеличения этажа */ 
  let counterDown = $('.counter-down'); /* кнопка уменьшения этажа */
  let modal = $('.modal'); /* */
  let modalClose = $('.modal-close-button'); /* */
  let viewFlatsButton = $('.view-flats')

  // функция при наведении мышью на этаж
  floorPath.on('mouseover', function () {
    floorPath.removeClass('current-floor');  // удаляем активный класс у этажей
    currentFloor = $(this).attr('data-floor');  // получаем значение текущего этажа 
    $('.counter').text(currentFloor);  //записываем значение этажа в счестчик справа
  });

  
  floorPath.on('click', toggleModal); // открытие модально окна по клику на этаж
  
  viewFlatsButton.on('click', toggleModal);  // открытие модально окна по кнопке

  modalClose.on('click', toggleModal);  // закрыть модальное окно

  

  // отслеживаем клик по кнопке вверх
  counterUp.on('click', function () {
    // проверка и ограничения этажа, не больше 18
    if (currentFloor < 18) { 
      currentFloor++; // прибавляем один этаж
    usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });  // форматируем из 1 в 01
    $('.counter').text(usCurrentFloor); // записываем значение в счетчик справа
    floorPath.removeClass('current-floor'); // удаляем активный класс у этажей 
    $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // подсвечиваем текущий этаж 
    }
  });

  // отслеживаем клик по кнопке вниз
  counterDown.on('click', function () {
    if(currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false });
      $('.counter').text(usCurrentFloor);
      floorPath.removeClass('current-floor');
      $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
    }
  });

  // функция открыть-закрыть окно
  function toggleModal() {
    modal.toggleClass('is-open');
  }
});