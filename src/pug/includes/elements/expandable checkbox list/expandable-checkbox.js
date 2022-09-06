let expandableCheckboxIcon = document.querySelector(".expandable-checkbox__icon");
let expandableCheckboxList = document.querySelector(".expandable-checkbox-list");

expandableCheckboxIcon.addEventListener('click', function() {
  expandableCheckboxList.classList.add("expandable-checkbox__show");
  expandableCheckboxIcon.classList.add("material-icons__active");
});


// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
