// Get the current time
function getCurrentTime() {
  var currentTime = new Date();
  return currentTime.getTime();
}

// Calculate the elapsed time in seconds
function calculateElapsedTimeKFC() {
  var startTime = new Date(2023, 4, 19, 12, 0, 0); // May is represented by 4 (0-indexed)
  var currentTime = getCurrentTime();
  var elapsedTime = Math.floor((currentTime - startTime) / 1000);
  return elapsedTime;
}

// Calculate the elapsed time in seconds
function calculateElapsedTimeWR() {
  var startTime = new Date(2023, 7, 14, 15, 0, 0); 
  var currentTime = getCurrentTime();
  var elapsedTime = Math.floor((currentTime - startTime) / 1000);
  return elapsedTime;
}

// Format the elapsed time in dd:hh:mm:ss format
function formatTime(elapsedTime) {
  var days = Math.floor(elapsedTime / 86400);
  var hours = Math.floor((elapsedTime % 86400) / 3600);
  var minutes = Math.floor((elapsedTime % 3600) / 60);
  var seconds = elapsedTime % 60;

  var formattedTime =
      padZero(days) + " : " +
      padZero(hours) + " : " +
      padZero(minutes) + " : " +
      padZero(seconds);

  return formattedTime;
}


// Add leading zero if the number is less than 10
function padZero(number) {
  return (number < 10) ? "0" + number : number;
}

// Update the timer display
function updateTimer() {
  var elapsedTimeKFC = calculateElapsedTimeKFC();
  var formattedTimeKFC = formatTime(elapsedTimeKFC);
  document.getElementById("kfc-timer").textContent = formattedTimeKFC;

  var elapsedTimeWR = calculateElapsedTimeWR();
  var formattedTimeWR = formatTime(elapsedTimeWR);
  document.getElementById("wr-timer").textContent = formattedTimeWR;
}

// Update the timer every second
setInterval(updateTimer, 1000);
