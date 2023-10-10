// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heart = document.querySelector('.like-glyph')
const errorModal = document.getElementById('modal');
const errorMessageElement = document.getElementById('modal-message');
function likeClick() {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then( () => {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch((error) => {
        errorMessageElement.textContent = error;
        errorModal.classList.remove('hidden'); // Display error modal
        setTimeout(() => {
          errorModal.classList.add('hidden'); // Hide error modal after 3 seconds
        }, 3000);
      });   
    });
  };


        
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
