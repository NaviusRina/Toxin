let filterbutton = {
    content: 'Применить',
    className: 'addDate',
    onClick: (dp) => {
      dp.show();
    }
}
new AirDatepicker('#filter-date-dropdown', {
  range: true,
  multipleDatesSeparator: ' - ',
  buttons: ['clear', filterbutton],
  inline: true
});
