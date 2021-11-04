"use strict";

/*
   Countdown Clock
   Author: Adonis Castro
   Date:   11/28/2020

   Filename: countdown.js

*/

/* Execute the function to run and display the countdown clock */
udpateCountdown();
setInterval("udpateCountdown()", 1000);

/* Function to create and run the countdown clock */
function udpateCountdown() {
	/* Store the current date and time */
	var currentDay = new Date();
	
	/*event date*/
	var eventDate = Date.parse(document.getElementsByTagName("time")[0].dateTime);

	/* Calculate the days until event date */
	var daysLeft = (eventDate - currentDay) / (1000*60*60*24);

	/* Calculate the hours left in the current day */
	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

	/* Calculate the minutes and seconds left in the current hour */
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;


	/* Display the time left until New Year's Eve */
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}