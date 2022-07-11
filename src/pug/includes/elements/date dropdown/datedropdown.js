
let button = {
    content: 'Применить',
    className: 'addDate',
    onClick: (dp) => {
      dp.show();
        // let date = new Date('2021-07-26');
        // dp.selectDate(date);
        // dp.setViewDate(date);
    }
}

new AirDatepicker('#date-dropdown', {
  buttons: ['clear', button],
  inline: true
});
