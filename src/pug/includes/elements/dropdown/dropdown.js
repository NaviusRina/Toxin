

// let guestNumberAdd = document.querySelectorAll('.guest-number__add');
// let guestNumberAmount = document.querySelector('.guest-number__amount');
// guestNumberAdd.forEach(function (entry) {
//   entry.addEventListener('click', function(event) {
//     event.preventDefault();
//     guestNumberAmount.textContent = parseInt(guestNumberAmount.textContent) + 1;
//   });
// });


let dropdownGuestField = document.querySelector(".dropdown-guest__field");
// let dropdownInputGuest = document.querySelector(".dropdown__input__guest");
let dropdownGuestContainer = document.querySelector(".dropdown-guest__container");

let guestNumberAmount = document.querySelectorAll('.guest-number__amount');

let dropdownGuestClear = document.querySelector('.dropdown-guest__clear');


let guestNumberAdd1 = document.querySelector('.qna1');
let guestNumberAmount1 = document.querySelector('.qnam1');
let guestNumberDelete1 = document.querySelector('.qnd1');

let guestNumberAdd2 = document.querySelector('.qna2');
let guestNumberAmount2 = document.querySelector('.qnam2');
let guestNumberDelete2 = document.querySelector('.qnd2');

let guestNumberAdd3 = document.querySelector('.qna3');
let guestNumberAmount3 = document.querySelector('.qnam3');
let guestNumberDelete3 = document.querySelector('.qnd3');

let dropdownInputGuest = document.querySelector('.dropdown__input__guest');
let dropdownGuestApply = document.querySelector('.dropdown-guest__apply');


function ButtonClear() {
  if(guestNumberAmount1.textContent == 0 & guestNumberAmount2.textContent == 0 & guestNumberAmount3.textContent == 0) {
    dropdownGuestClear.style.opacity = 0;
  }
}

dropdownGuestField.addEventListener('click', function() {
  dropdownGuestContainer.classList.toggle("dropdown-guest__show");
  // dropdownInput.style.cssText = `border-bottom-left-radius:0;border-bottom-right-radius:0`;
  dropdownGuestContainer.classList.remove("dropdown-guest__shift");
});

//взрослые
guestNumberAdd1.addEventListener('click', function() {
    guestNumberAmount1.textContent = parseInt(guestNumberAmount1.textContent) + 1;
    dropdownGuestClear.style.opacity = 1;
    guestNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });


guestNumberDelete1.addEventListener('click', function() {
  if(guestNumberAmount1.textContent == 1) {
    guestNumberAmount1.textContent = 0;
    guestNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    // dropdownBoxClear.style.opacity = 0;
    ButtonClear();
  } else if(guestNumberAmount1.textContent == 0) {
    guestNumberAmount1.textContent = 0;
  } else {
    guestNumberAmount1.textContent = parseInt(guestNumberAmount1.textContent) - 1;
  }
  });

//дети
guestNumberAdd2.addEventListener('click', function() {
    guestNumberAmount2.textContent = parseInt(guestNumberAmount2.textContent) + 1;
    dropdownGuestClear.style.opacity = 1;
    guestNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });

guestNumberDelete2.addEventListener('click', function() {
    if(guestNumberAmount2.textContent == 1) {
      guestNumberAmount2.textContent = 0;
      guestNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
      // dropdownBoxClear.style.opacity = 0;
      ButtonClear();
    } else if(guestNumberAmount2.textContent == 0) {
      guestNumberAmount2.textContent = 0;
    } else {
      guestNumberAmount2.textContent = guestNumberAmount2.textContent - 1;
    }
});

//младенцы
guestNumberAdd3.addEventListener('click', function() {
    guestNumberAmount3.textContent = parseInt(guestNumberAmount3.textContent) + 1;
    dropdownGuestClear.style.opacity = 1;
    guestNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
});


guestNumberDelete3.addEventListener('click', function() {
  if(guestNumberAmount3.textContent == 1) {
    guestNumberAmount3.textContent = 0;
    guestNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    // dropdownBoxClear.style.opacity = 0;
    ButtonClear();
  } else if(guestNumberAmount3.textContent == 0) {
    guestNumberAmount3.textContent = 0;
  } else {
    guestNumberAmount3.textContent = guestNumberAmount3.textContent - 1;
  }
});



// guestNumberAmount.forEach(function(item) {
//   if(item.textContent == 0) {
//     dropdownBoxClear.style.opacity = 0;
//   }
// });


//очистить
// dropdownBoxButtonClear.forEach(function (entry) {
  dropdownGuestClear.addEventListener('click', function() {
    // event.preventDefault();
    guestNumberAmount1.textContent = 0;
    guestNumberAmount2.textContent = 0;
    guestNumberAmount3.textContent = 0;
    dropdownGuestClear.style.opacity = 0;
    guestNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    guestNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    guestNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    dropdownInputGuest.value = "";
    // guestNumberAmount.textContent = 0;

  });
// });


//применить
dropdownGuestApply.addEventListener('click', function() {
  // dropdownInputGuest.value = guestNumberAmount.textContent;
    let amount = parseInt(guestNumberAmount1.textContent) + parseInt(guestNumberAmount2.textContent) + parseInt(guestNumberAmount3.textContent);
    if(amount == 0) {
      dropdownInputGuest.value = "";
    } else if(amount == 1) {
      dropdownInputGuest.value = amount + " гость";
    } else if(amount == 2 || amount == 3 || amount == 4) {
      dropdownInputGuest.value = amount + " гостя";
    } else {
      dropdownInputGuest.value = amount + " гостей";
    }
    dropdownGuestContainer.classList.add("dropdown-guest__shift");
});

// dropdownGuestApply.forEach(item => {
//   item.addEventListener('click', event => {
//     dropdownInputGuest.value = guestNumberAmount.textContent;
//   })
// })
