
function likeButtonPress(like, num) {
  if(like.classList.contains('selected')) {
    like.classList.remove('selected');
    num.textContent = parseInt(num.textContent) - 1;
  } else {
    like.classList.add('selected');
    num.textContent = parseInt(num.textContent) + 1;
   }
}
