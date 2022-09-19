
let buttonCalendar = {
    content: 'Применить',
    className: 'addDate',
    onClick: (dp) => {
      dp.hide();
    }
}
new AirDatepicker('#calendar__input', {
  buttons: ['clear', buttonCalendar],
  prevHtml: '<span class="material-symbols-outlined">arrow_back</span>',
  nextHtml: '<span class="material-symbols-outlined">arrow_forward</span>',
  // inline: true,

});
