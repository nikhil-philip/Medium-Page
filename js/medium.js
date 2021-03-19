'use strict';
function ExpandOrCollapse(){
  var panel = document.getElementById("panel");
  console.log("clicked")
 var menu = document.getElementById("menu");
 var status = menu.getAttribute("aria-expanded");
 if(status == "false")
 {
   menu.setAttribute("aria-expanded", "true");
   
 }
 else
 {
   menu.setAttribute("aria-expanded", "false");
 }

 menu.classList.toggle("active");
 if (panel.style.maxHeight) 
  {
    panel.style.maxHeight = null;
  } 
else 
  {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 
}


//for modal
const modalAccept=document.querySelector('.modalAccept');
const overlay=document.querySelector('.overlay');
const closeModal=document.querySelector('.close-modal');
const acceptButton=document.querySelector('.modal-btn');
const termsButton=document.querySelector('.accept-terms');
const privacyButton=document.querySelector('.accept-privacy');
const cookiesButton=document.querySelector('.accept-cookies');
const modalHead=document.querySelector('.modal-head');

const  focusableElements ='button';

const firstFocusableElement=modalAccept.querySelectorAll(focusableElements)[0]; 
const focusableContent = modalAccept.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; 

function openmodal(){
  modalAccept.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // document.body.style.overflowY='hidden';
}

function closemodal(){
  modalAccept.classList.add('hidden');
  overlay.classList.add('hidden');
  // document.body.style.overflowY='scroll';
}
termsButton.addEventListener('click',function(){
  closeModal.textContent="x"
  modalHead.textContent="Accept terms"
   openmodal();
    closeModal.setAttribute('tabindex',"-1");
    acceptButton.setAttribute('tabindex',"-1");
     closeModal.focus();
  
});
privacyButton.addEventListener('click',function(){
  closeModal.setAttribute('tabindex',"0");
    acceptButton.setAttribute('tabindex',"-1");
  closeModal.textContent="x"
  modalHead.textContent="Accept privacy"
   openmodal();
   closeModal.focus();
   
   
})

cookiesButton.addEventListener('click',function(){
  closeModal.textContent="⛔"
  closeModal.setAttribute('tabindex',"0");
  acceptButton.setAttribute('tabindex',"0");
  modalHead.textContent="Accept cookies"
  openmodal();
  document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
  
    if (!isTabPressed) {
      return;
    }
  
    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
  
  firstFocusableElement.focus();

})



acceptButton.addEventListener('click',closemodal);
closeModal.addEventListener('click',closemodal);

//end of modal

//Start Search

function search() {
  console.log("Search entered")
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 5000);
}

//End Search


