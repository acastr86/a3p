"use strict";

/*
   Form utility
   Author: Adonis Castro
   Date:   11/29/2020

   Filename: form.js

*/

/* Show a alert about the form being submited */

window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) {
         alert("Form Submitted");
         return true;
      }
   };
};