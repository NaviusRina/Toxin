

// сделать как-то так, когда соображу как
// let guestNumberAdd = document.querySelectorAll('.guest-number__add');
// let guestNumberAmount = document.querySelector('.guest-number__amount');
// guestNumberAdd.forEach(function (entry) {
//   entry.addEventListener('click', function(event) {
//     event.preventDefault();
//     guestNumberAmount.textContent = parseInt(guestNumberAmount.textContent) + 1;
//   });
// });

//как стыдно-то... я исправлюсь

let guestNumberAmount = document.querySelectorAll('.guest-number__amount');

let dropdownBoxClear = document.querySelector('.dropdown-box__clear');


let guestNumberAdd1 = document.querySelector('.qna1');
let guestNumberAmount1 = document.querySelector('.qnam1');
let guestNumberDelete1 = document.querySelector('.qnd1');

guestNumberAdd1.addEventListener('click', function() {
    guestNumberAmount1.textContent = parseInt(guestNumberAmount1.textContent) + 1;
    dropdownBoxClear.style.opacity = 1;
    guestNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });


guestNumberDelete1.addEventListener('click', function() {
  if(guestNumberAmount1.textContent == 1) {
    guestNumberAmount1.textContent = 0;
    guestNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    dropdownBoxClear.style.opacity = 0;
  }
  else {
    guestNumberAmount1.textContent = parseInt(guestNumberAmount1.textContent) - 1;
  }
  });


let guestNumberAdd2 = document.querySelector('.qna2');
let guestNumberAmount2 = document.querySelector('.qnam2');
let guestNumberDelete2 = document.querySelector('.qnd2');

guestNumberAdd2.addEventListener('click', function() {
    guestNumberAmount2.textContent = parseInt(guestNumberAmount2.textContent) + 1;
    dropdownBoxClear.style.opacity = 1;
    guestNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
  });

guestNumberDelete2.addEventListener('click', function() {
    if(guestNumberAmount2.textContent == 1) {
      guestNumberAmount2.textContent = 0;
      guestNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
      dropdownBoxClear.style.opacity = 0;
    }
    else {
      guestNumberAmount2.textContent = guestNumberAmount2.textContent - 1;
    }
});


let guestNumberAdd3 = document.querySelector('.qna3');
let guestNumberAmount3 = document.querySelector('.qnam3');
let guestNumberDelete3 = document.querySelector('.qnd3');

guestNumberAdd3.addEventListener('click', function() {
    guestNumberAmount3.textContent = parseInt(guestNumberAmount3.textContent) + 1;
    dropdownBoxClear.style.opacity = 1;
    guestNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.5);border: 1px solid rgba(31, 32, 65, 0.5)`;
});


guestNumberDelete3.addEventListener('click', function() {
  if(guestNumberAmount3.textContent == 1) {
    guestNumberAmount3.textContent = 0;
    guestNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    dropdownBoxClear.style.opacity = 0;
  }
  else {
    guestNumberAmount3.textContent = guestNumberAmount3.textContent - 1;
  }
});

// guestNumberAmount.forEach(function(item) {
//   if(item.textContent == 0) {
//     dropdownBoxClear.style.opacity = 0;
//   }
// });



// dropdownBoxButtonClear.forEach(function (entry) {
  dropdownBoxClear.addEventListener('click', function() {
    // event.preventDefault();
    guestNumberAmount1.textContent = 0;
    guestNumberAmount2.textContent = 0;
    guestNumberAmount3.textContent = 0;
    dropdownBoxClear.style.opacity = 0;
    guestNumberDelete1.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    guestNumberDelete2.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    guestNumberDelete3.style.cssText = `color:rgba(31, 32, 65, 0.25);border: 1px solid rgba(31, 32, 65, 0.25)`;
    dropdownInputGuest.value = "Сколько гостей";
    // guestNumberAmount.textContent = 0;

  });
// });

let dropdownField = document.querySelector(".dropdown-field");
let dropdownContainer = document.querySelector(".dropdown-container");

dropdownField.addEventListener('click', function() {
  dropdownContainer.classList.toggle("dropdown__show");
});

let dropdownInputGuest = document.querySelector('.dropdown__input__guest');
let dropdownBoxApply = document.querySelector('.dropdown-box__apply');

dropdownBoxApply.addEventListener('click', function() {
  // dropdownInputGuest.value = guestNumberAmount.textContent;
  if() {

  } else {
    dropdownInputGuest.value = guestNumberAmount1.textContent;
    dropdownInputGuest.value += guestNumberAmount2.textContent;
    dropdownInputGuest.value += guestNumberAmount3.textContent;
  }

});

// dropdownBoxApply.forEach(item => {
//   item.addEventListener('click', event => {
//     dropdownInputGuest.value = guestNumberAmount.textContent;
//   })
// })
