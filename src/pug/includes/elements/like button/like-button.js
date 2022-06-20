
document.addEventListener('DOMContentLoaded', function() {
  // let likeButton = document.getElementById('like-button');
  let likeNumber = document.getElementByClass('like-number');
  likeButton.addEventListener('click', function() {
    // window.lb = likeButton;
    likeButton.classList.add('selected');
    // likeNumber.value + 1;
    let like = parseInt(document.getElementByClass("like-button").text()) + 1;
    // alert('lll');
    // console.log('selected');
  });
}, false);
