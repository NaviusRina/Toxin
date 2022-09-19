// let guestNumberAmount = document.querySelectorAll('.guest-number__amount');

// let dropdownRoomClear = document.querySelector('.dropdown-room__clear');

let dropdownRoomField = document.querySelector(".dropdown-room__field");
let dropdownRoomContainer = document.querySelector(".dropdown-room__container");

let roomNumberAdd1 = document.querySelector('.rna1');
let roomNumberAmount1 = document.querySelector('.rnam1');
let roomNumberDelete1 = document.querySelector('.rnd1');

let roomNumberAdd2 = document.querySelector('.rna2');
let roomNumberAmount2 = document.querySelector('.rnam2');
let roomNumberDelete2 = document.querySelector('.rnd2');

let roomNumberAdd3 = document.querySelector('.rna3');
let roomNumberAmount3 = document.querySelector('.rnam3');
let roomNumberDelete3 = document.querySelector('.rnd3');



let drp1 = roomNumberAmount1.textContent;
let drp2 = roomNumberAmount2.textContent;
let drp3 = roomNumberAmount3.textContent;

let dropdownInputRoom = document.querySelector(".dropdown__input__room");

dropdownRoomField.addEventListener('click', function() {
  dropdownRoomContainer.classList.toggle("dropdown-room__show");
});


dropdownInputRoom.placeholder = drp1 + " спальни, " + drp2 + " кровати, " + drp3 + " ванные комнаты";

//спальни
roomNumberAdd1.addEventListener('click', function() {
    roomNumberAmount1.textContent = parseInt(roomNumberAmount1.textContent) + 1;
    drp1 = roomNumberAmount1.textContent;
    dropdownInputRoom.placeholder = drp1 + " спальни, " + drp2 + " кровати, " + drp3 + " ванные комнаты";
    // dropdownRoomClear.style.opacity = 1;
    roomNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });


roomNumberDelete1.addEventListener('click', function() {
  if(roomNumberAmount1.textContent == 1) {
    roomNumberAmount1.textContent = 0;
    roomNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
  } else  if(roomNumberAmount1.textContent == 0) {
    roomNumberAmount1.textContent = 0;
  } else {
    roomNumberAmount1.textContent = parseInt(roomNumberAmount1.textContent) - 1;
    drp1 = roomNumberAmount1.textContent;
    dropdownInputRoom.placeholder = drp1 + " спальни, " + drp2 + " кровати, " + drp3 + " ванные комнаты";
  }
  });

//кровати
roomNumberAdd2.addEventListener('click', function() {
    roomNumberAmount2.textContent = parseInt(roomNumberAmount2.textContent) + 1;
    // dropdownRoomClear.style.opacity = 1;
    drp2 = roomNumberAmount2.textContent;
    dropdownInputRoom.placeholder = drp1 + " спальни, " + drp2 + " кровати, " + drp3 + " ванные комнаты";
    roomNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });

roomNumberDelete2.addEventListener('click', function() {
    if(roomNumberAmount2.textContent == 1) {
      roomNumberAmount2.textContent = 0;
      roomNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    } else  if(roomNumberAmount2.textContent == 0) {
      roomNumberAmount2.textContent = 0;
    } else {
      roomNumberAmount2.textContent = roomNumberAmount2.textContent - 1;
      drp2 = roomNumberAmount2.textContent;
      dropdownInputRoom.placeholder = drp1 + " спальни, " + drp2 + " кровати, " + drp3 + " ванные комнаты";
    }
});

//ванные комнаты
roomNumberAdd3.addEventListener('click', function() {
    roomNumberAmount3.textContent = parseInt(roomNumberAmount3.textContent) + 1;
    drp3 = roomNumberAmount3.textContent;
    dropdownInputRoom.placeholder = drp1 + " спальни, " + drp2 + " кровати, " + drp3 + " ванные комнаты";
    // dropdownRoomClear.style.opacity = 1;
    roomNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
});


roomNumberDelete3.addEventListener('click', function() {
  if(roomNumberAmount3.textContent == 1) {
    roomNumberAmount3.textContent = 0;
    roomNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
  } else  if(roomNumberAmount3.textContent == 0) {
    roomNumberAmount3.textContent = 0;
  } else {
    roomNumberAmount3.textContent = roomNumberAmount3.textContent - 1;
    drp3 = roomNumberAmount3.textContent;
    dropdownInputRoom.placeholder = drp1 + " спальни, " + drp2 + " кровати, " + drp3 + " ванные комнаты";
  }
});

// guestNumberAmount.forEach(function(item) {
//   if(item.textContent == 0) {
//     dropdownBoxClear.style.opacity = 0;
//   }
// });
