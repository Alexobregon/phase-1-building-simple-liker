// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let heartsNodeArray = [...document.getElementsByClassName("like-glyph")]
let modal = document.getElementById("modal")
let modalParagraph = document.getElementById("modal-message");

let callServerAndCatch = () => {
    mimicServerCall()
 .catch(error => handleError(error))
}

let handleError = (errorMessage) => {
"modal without classes", modal.classList.remove('hidden')
modalParagraph.innerText = errorMessage
setTimeout(() => {
   modal.classList.add('hidden')
  modalParagraph.innerText = ""
 }, 3000);

}




//for (let i = 0; index < heartsNodeArray.length; index++) {
//  heartsNodeArray[index].addEventListener('click', mimicServerCall);
///}

heartsNodeArray.map(heartNode => {
  heartNode.addEventListener('click', callServerAndCatch)
})




// Use `setTimeout` to hide the modal after 3 seconds (add the `.hidden` class)

// When the "server" returns a success status:
// Change the heart to a full heart
// Add the `.activated-heart` class to make the heart appear red

// When a user clicks on a full heart:
// Change the heart back to an empty heart
// Remove the `.activated-heart` class

// Keep all your styling rules entirely in `style.css`.
// Do not manipulate any `.style` properties.
//Only manipulate the DOM once the server request responds.
// Do not make the heart full until you're inside a successful `.then` block.

// Note: The tests will only check for the first part of the specification
// (adding the `hidden` class). You should verify the rest of the behavior
// yourself, by checking the page in the browser.


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
console.log("clicked")  
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
