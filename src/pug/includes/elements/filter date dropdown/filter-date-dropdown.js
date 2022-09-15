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
  // inline: true,
  dateFormat: 'd MMM',
  prevHtml: '<span class="material-symbols-outlined">arrow_back</span>',
  nextHtml: '<span class="material-symbols-outlined">arrow_forward</span>'
});
