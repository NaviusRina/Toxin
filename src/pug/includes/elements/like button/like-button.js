
// document.addEventListener('DOMContentLoaded', function() {
  let likeButton = document.getElementById('like-button');
  likeButton.addEventListener('click', function() {
    let likeNumber = document.querySelector('.like-number');

    if(likeButton.classList.contains('selected')) {
      likeButton.classList.remove('selected');
      likeNumber.textContent = parseInt(likeNumber.textContent) - 1;

    } else {
      likeButton.classList.add('selected');
      likeNumber.textContent = parseInt(likeNumber.textContent) + 1;

    }
    // let like = parseInt(document.getElementByClass("like-button").text()) + 1;
	  // likeNumber=likeNumber.getElementByClass('like-number')[0];
    // likeNumber.innerHTML=-(-likeNumber.innerHTML)+1;
  });
// });
