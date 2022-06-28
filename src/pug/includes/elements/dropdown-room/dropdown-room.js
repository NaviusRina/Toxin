// let guestNumberAmount = document.querySelectorAll('.guest-number__amount');

// let dropdownRoomClear = document.querySelector('.dropdown-room__clear');


let roomNumberAdd1 = document.querySelector('.rna1');
let roomNumberAmount1 = document.querySelector('.rnam1');
let roomNumberDelete1 = document.querySelector('.rnd1');

roomNumberAdd1.addEventListener('click', function() {
    roomNumberAmount1.textContent = parseInt(roomNumberAmount1.textContent) + 1;
    // dropdownRoomClear.style.opacity = 1;
    roomNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });


roomNumberDelete1.addEventListener('click', function() {
  if(roomNumberAmount1.textContent == 1) {
    roomNumberAmount1.textContent = 0;
    roomNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
  }
  else {
    roomNumberAmount1.textContent = parseInt(roomNumberAmount1.textContent) - 1;
  }
  });


let roomNumberAdd2 = document.querySelector('.rna2');
let roomNumberAmount2 = document.querySelector('.rnam2');
let roomNumberDelete2 = document.querySelector('.rnd2');

roomNumberAdd2.addEventListener('click', function() {
    roomNumberAmount2.textContent = parseInt(roomNumberAmount2.textContent) + 1;
    // dropdownRoomClear.style.opacity = 1;
    roomNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });

roomNumberDelete2.addEventListener('click', function() {
    if(roomNumberAmount2.textContent == 1) {
      roomNumberAmount2.textContent = 0;
      roomNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    }
    else {
      roomNumberAmount2.textContent = roomNumberAmount2.textContent - 1;
    }
});


let roomNumberAdd3 = document.querySelector('.rna3');
let roomNumberAmount3 = document.querySelector('.rnam3');
let roomNumberDelete3 = document.querySelector('.rnd3');

roomNumberAdd3.addEventListener('click', function() {
    roomNumberAmount3.textContent = parseInt(roomNumberAmount3.textContent) + 1;
    // dropdownRoomClear.style.opacity = 1;
    roomNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
});


roomNumberDelete3.addEventListener('click', function() {
  if(roomNumberAmount3.textContent == 1) {
    roomNumberAmount3.textContent = 0;
    roomNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
  }
  else {
    roomNumberAmount3.textContent = roomNumberAmount3.textContent - 1;
  }
});

// guestNumberAmount.forEach(function(item) {
//   if(item.textContent == 0) {
//     dropdownBoxClear.style.opacity = 0;
//   }
// });



// dropdownBoxButtonClear.forEach(function (entry) {
  // dropdownRoomClear.addEventListener('click', function() {
  //   // event.preventDefault();
  //   roomNumberAmount1.textContent = 0;
  //   roomNumberAmount2.textContent = 0;
  //   roomNumberAmount3.textContent = 0;
  //   dropdownRoomClear.style.opacity = 0;
  //   roomNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
  //   roomNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
  //   roomNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
  //   // guestNumberAmount.textContent = 0;
  //
  // });
// });
