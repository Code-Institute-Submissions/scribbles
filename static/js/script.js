//Global Variables

const goUpBtn = document.getElementById("goUpBtn");

/**
 * When the user scrolls down 
 * 20px from the top of the document
 * show the button.
 */
 window.onscroll = function() {
   scrollFunction();
  };

 /**
  * Scroll function:
  * when the user scrolls the page
  * the button to go up appears. 
  * Otherwise, the button remains invisible. 
  */
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goUpBtn.style.display = "block";
  } else {
    goUpBtn.style.display = "none";
  }
};

/**
 * When the user clicks on the button
 * scroll to the top of the document
 */
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// Event Listener

$("#goUpBtn").click(function () {
  topFunction();
});


/**
 * Search Btn and cancel Search Btn are hidden 
 * by default until the user enters anything in
 * the search field.
 */
$(document).ready(function () {
  $('#searchBtn').hide(true);
  $('#cancelSearch').hide(true);

  $('#searchKey').keyup(function () {
    if ($(this).val().length != 0) {
      $('#searchBtn').show(true);
      $('#cancelSearch').show(true);
    } else {
      $('#searchBtn').hide(true);
      $('#cancelSearch').hide(true);
    }
  })
});