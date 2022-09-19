let expandableCheckboxIcon = document.querySelector(".expandable-checkbox__icon");
let expandableCheckboxList = document.querySelector(".expandable-checkbox-list");

expandableCheckboxIcon.addEventListener('click', function() {
  expandableCheckboxList.classList.toggle("expandable-checkbox__show");
  expandableCheckboxIcon.classList.toggle("material-icons__active");
  // if (expandableCheckboxList.classList.contains('expandable-checkbox__show')) {
  //   expandableCheckboxList.classList.remove('expandable-checkbox__show');
  //   expandableCheckboxIcon.classList.remove("material-icons__active");
  // } else {
  //   expandableCheckboxList.classList.add("expandable-checkbox__show");
  //   expandableCheckboxIcon.classList.add("material-icons__active");
  // }

});
