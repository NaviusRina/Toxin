let minDP = document.querySelector('#date-dropdown-min');
let maxDP = document.querySelector('#date-dropdown-max');

let button = {
    content: 'Применить',
    className: 'addDate',
    onClick: (dp) => {
      dp.hide();
    }
}
new AirDatepicker('#date-dropdown-min', {
  range: true,
  multipleDatesSeparator: ' - ',
  buttons: ['clear', button],
  prevHtml: '<span class="material-symbols-outlined">arrow_back</span>',
  nextHtml: '<span class="material-symbols-outlined">arrow_forward</span>',
  // inline: true,
  onSelect({date}) {
    let arrayDP = minDP.value;
    if (arrayDP.split("-")[1] == undefined) {
      minDP.value = arrayDP.split("-")[0];
      maxDP.value = 'ДД.ММ.ГГГГ';
    } else {
      minDP.value = arrayDP.split("-")[0];
      maxDP.value = arrayDP.split("-")[1];
    }

  }
});
