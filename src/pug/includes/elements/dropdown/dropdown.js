let guestNumberAdd = document.querySelectorAll('.guest-number__add');
let guestNumberAmount = document.querySelector('.guest-number__amount');

guestNumberAdd.forEach(function (entry) {
  entry.addEventListener('click', function(event) {
    event.preventDefault();
    guestNumberAmount.textContent = parseInt(guestNumberAmount.textContent) + 1;
  });
});
