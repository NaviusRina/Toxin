
let likeButtonOne = document.querySelector('.like-button__one');
let likeButtonTwo = document.querySelector('.like-button__two');

let likeNumberOne = document.querySelector('.like-button-number__one');
let likeNumberTwo = document.querySelector('.like-button-number__two');

likeButtonOne.addEventListener('click', function() {
  likeButtonPress(likeButtonOne, likeNumberOne);
});
likeButtonTwo.addEventListener('click', function() {
  likeButtonPress(likeButtonTwo, likeNumberTwo);
});
