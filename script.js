var timer;
var minutes = 25;
var seconds = 0;
var isPaused = true;
var isStudyTimer = false;
var isBreakTimer = false;

function startStudyTimer() {
  if (isPaused) {
    isPaused = false;
    isStudyTimer = true;
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
    timer = setInterval(updateTimer, 1000);
  }
}

function startBreakTimer() {
  if (isPaused) {
    isPaused = false;
    isBreakTimer = true;
    minutes = 5;
    seconds = 0;
    updateTimerDisplay();
    timer = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  isPaused = true;
  clearInterval(timer);
}

function resumeTimer() {
  if (isPaused) {
    isPaused = false;
    timer = setInterval(updateTimer, 1000);
  }
}

function resetTimer() {
  pauseTimer();
  if (isBreakTimer) {
    minutes = 5;
    seconds = 0;
  } else {
    minutes = 25;
    seconds = 0;
  }
  isStudyTimer = false;
  isBreakTimer = false;
  updateTimerDisplay();
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    resetTimer();
    if (isStudyTimer) {
      alert("Study time is up! Time for a short break");
    } else if (isBreakTimer) {
      alert("Break time is up!");
    }
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  var timerElement = document.querySelector(".timer");
  var formattedMinutes = minutes.toString().padStart(2, "0");
  var formattedSeconds = seconds.toString().padStart(2, "0");
  timerElement.textContent = formattedMinutes + ":" + formattedSeconds;
}

function changeColor() {
  var bodyElement = document.querySelector("body");
  var buttons = document.querySelectorAll(".controls button");

  bodyElement.classList.remove("purple-bg");
  bodyElement.classList.remove("purple");
  bodyElement.classList.add("green-bg");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("purple");
    buttons[i].classList.add("green");
  }
}

function changeColorB() {
  var bodyElement = document.querySelector("body");
  var buttons = document.querySelectorAll(".controls button");

  if (bodyElement.classList.contains("green-bg")) {
    bodyElement.classList.remove("green-bg");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("green");
    }
  } else if (bodyElement.classList.contains("purple-bg")) {
    bodyElement.classList.remove("purple-bg");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("purple");
    }
  }
}

function changeColorP() {
  var bodyElement = document.querySelector("body");
  var buttons = document.querySelectorAll(".controls button");

  bodyElement.classList.remove("green-bg");

  bodyElement.classList.add("purple-bg");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("purple");
  }
}

var initialTabTitle = document.title;
var timerValue = "25:00";


setInterval(function () {
  updateTimerDisplay();
  document.title = timerValue + " - " + initialTabTitle;
}, 1000);

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function toggleItem(item) {
  item.classList.toggle("checked");
}

var list = document.getElementById("myUL");

document.addEventListener("DOMContentLoaded", function () {
  var myUL = document.getElementById("myUL");

  myUL.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
      toggleItem(ev.target);
    }

    if (ev.target.classList.contains("close")) {
      var div = ev.target.parentElement;
      div.style.display = "none";
    }
  });

  document.getElementById("addBtn").addEventListener("click", function () {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === "") {
      alert("You must write something!");
    } else {
      myUL.appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  });
});

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function deleteItem(element) {
  var listItem = element.parentElement;
  listItem.style.display = "none";
}

function toggleItem(item) {
  item.classList.toggle("checked");
}

if (item.tagName === "LI") {
  item.classList.toggle("checked");
}

document.addEventListener("DOMContentLoaded", function () {
  var myUL = document.getElementById("myUL");

  myUL.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
      toggleItem(ev.target);
    }
  });
});
