
let button = {
    content: 'Применить',
    className: 'addDate',
    onClick: (dp) => {
      dp.show();
    }
}

new AirDatepicker('#date-dropdown', {
  buttons: ['clear', button]
  // inline: true
});
