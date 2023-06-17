var count = 0;
var Rcount = 0,
  Wcount = 0;
var total = 0;
var value = Math.floor(Math.random() * 10);//for generating random id in span
var k = value * 6 + 1;
var start = k;
var i = 60;
var option = 1;
var forScroll = 0;

document.getElementById("input-box").value = "";
// value for the data stored inside the input box
document.getElementById("row1").scrollTo(0, 0);
document.getElementById("row1").scrollBy(0, value * 60);
//for the previous word highlighting 
document.getElementById(k - 1).classList.toggle("highlight");

document.getElementById("input-container").onkeypress = function (event) {
  if (event.which == 32) {
    total++;
    // Toggle between adding and removing a class name from an element with JavaScript.
    document.getElementById(k).classList.toggle("highlight");
    var check = document.getElementById(k - 1).innerText;
    var toCheck = document.getElementById("input-box").value;

    if (k == start) {
      if (toCheck == check) {
        document.getElementById(k - 1).classList.toggle("correct");
        Rcount++;
      } else {
        document.getElementById(k - 1).classList.toggle("wrong");
        Wcount++;
      }
    } else {
      if (toCheck == check) {
        document.getElementById(k - 1).classList.toggle("correct");
        Rcount++;
      } else {
        document.getElementById(k - 1).classList.toggle("wrong");
        Wcount++;
      }
    }

    if (k != 0) {
      document.getElementById(k - 1).classList.remove("highlight");
    }
    k = k + 1;
    count = count + 1;
    if (count == 6) {
      if (forScroll == 0) {
        document.getElementById("row1").scrollBy(0, 60);
        // scrollBy(x-coord, y-coord)
        // The event is fired when the user moves the scrollbar up or down but in this user is not scrolling by hand it is moving down as words are being typed

        count = 0;
        forScroll = 1;
      } else {
        document.getElementById("row1").scrollBy(0, 60);
        count = 0;
      }
    } 
    document.getElementById("input-box").value = "";
  } else if (document.getElementById("input-box").value == " ") {
    document.getElementById("input-box").value = "";
  }
};
// when you just press spacebar it gives value zero to it, as soon as you press space on the word it just goes red
document.getElementById("input-container").onkeyup = () => {
  if (document.getElementById("input-box").value == " ") {
    document.getElementById("input-box").value = "";
  }
};

function onTimer() {
  document.getElementById("mycounter").innerHTML = i;
  i--;
  if (i < 0) {
    i = 0;
    alert("It's Done ! ");
    if (option == 1) {
      document.getElementById("WPM").innerText = String(total) + " WPM";
    } else if (option == 2) {
      document.getElementById("WPM").innerText =
        String(Math.floor(total / 2)) + " WPM";
    }
    document.getElementById("Rwords").innerText = Rcount;
    document.getElementById("Wwords").innerHTML = Wcount;
    document.getElementById("accuracy").innerHTML = String(Math.floor((Rcount * 100) / (Rcount + Wcount))) + " %";
      
  } else {
    setTimeout(onTimer, 1000);
  }
}

var flag = 0;
const startTimer = () => {
  if (flag == 0) {
    flag = 1;
    onTimer();
  }
};

// function one_minute() {
//   if (i <= 0) {
//     alert("Please retake the test to switch option");
//   } else if (i == 120) {
//     document.getElementById("one_button").classList.add("active-button");
//     document.getElementById("one_button").classList.remove("default-button");
//     document.getElementById("two_button").classList.remove("active-button");
//     document.getElementById("two_button").classList.add("default-button");
//     clearTimeout(onTimer);
//     flag = 0;
//     i = 60;
//     document.getElementById("mycounter").innerHTML = i;
//     option = 1;
//   } else {
//     alert("Please complete the test first or retake the test");
//   }
// }

const retake = () => {
  document.location.reload();
};
function Ques1() {
  document.getElementById("Q1").classList.toggle("hide");
  document.getElementById("Ques1Arrow").classList.toggle("fa-angle-down");
  document.getElementById("Ques1Arrow").classList.toggle("fa-angle-up");
}

function Ques2() {
  document.getElementById("Q2").classList.toggle("hide");
  document.getElementById("Ques2Arrow").classList.toggle("fa-angle-up");
  document.getElementById("Ques2Arrow").classList.toggle("fa-angle-down");
}

function Ques3() {
  document.getElementById("Q3").classList.toggle("hide");
  document.getElementById("Ques3Arrow").classList.toggle("fa-angle-up");
  document.getElementById("Ques3Arrow").classList.toggle("fa-angle-down");
}
function Ques4() {
  document.getElementById("Q4").classList.toggle("hide");
  document.getElementById("Ques4Arrow").classList.toggle("fa-angle-up");
  document.getElementById("Ques4Arrow").classList.toggle("fa-angle-down");
}
