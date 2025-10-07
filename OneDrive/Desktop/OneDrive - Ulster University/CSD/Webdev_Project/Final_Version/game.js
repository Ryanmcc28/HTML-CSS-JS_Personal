let word = "";
let guess = "";
let turn = "a";
let words = [];
const difficultyString = document.cookie;
const difficulty = difficultyString.split("=")[1];
let approved = false;
let score = 0;
let guesses = 0;

$(document).ready(function () {
  $(".game-container").css("opacity", "1");
});

//This updates the score after an event e.g. user guess
function updateScore() {
  if (score < 0) {
    score = 0;
  }
  $("#score").text("SCORE: " + score);
}

//This changes the form based on the difficulty
switch (difficulty) {
  case "hard":
    $("#e0").hide();
    $("#e1").hide();
    $("#e2").hide();
    $("#e3").hide();
    $("#e4").hide();
    $("#f0").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#f3").hide();
    $("#f4").hide();
    score = 800;
    guesses = 4;
    break;
  case "medium":
    $("#f0").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#f3").hide();
    $("#f4").hide();
    score = 700;
    guesses = 5;
    break;
  default:
    score = 600;
    guesses = 6;
    break;
}
//This gets a random word from words.txt
function getWord() {
  guess = "";
  $("#0").text("");
  $("#1").text("");
  $("#2").text("");
  $("#3").text("");
  $("#4").text("");
  turn = "a";
  $.get("words.txt", function (data) {
    words = data.split("\n");
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
  });
}

//This is a key press event to register the users inputs
$(document).keydown(function (e) {
  if (e.key == "Enter") {
    for (let i = 0; i < words.length; i++) {
      if (words[i] == guess) {
        approved = true;
      }
    }
    if (approved == true) {
      check();
      approved = false;
      //Occurs if word is too short
    } else {
      for (let i = 0; i < guess.length; i++) {
        $("#" + i).css("background-color", "darkorange");
        setTimeout(function () {
          $("#" + i).css("background-color", "gainsboro");
        }, 750);
      }
    }
    return;
  } else if (e.key == "Backspace") {
    guess = guess.slice(0, -1);
  } else {
    if (guess.length < 5 && e.key.length === 1 && e.key != " ") {
      guess += e.key.toLowerCase();
    }
  }
  //Resets the guess inputs
  $("#0").text("");
  $("#1").text("");
  $("#2").text("");
  $("#3").text("");
  $("#4").text("");
  for (let i = 0; i < guess.length; i++) {
    $("#" + i).text(guess[i].toUpperCase());
  }
});
//Checks the guess word against the correct word
function check() {
  if (guess.length < 5) {
    for (let i = guess.length; i < 5; i++) {
      $("#" + i).css("background-color", "darkorange");
      setTimeout(function () {
        $("#" + i).css("background-color", "gainsboro");
      }, 750);
    }
    return;
  }

  for (let i = 0; i < word.length; i++) {
    $("#" + turn + i).text(guess[i].toUpperCase());
    for (let j = 0; j < word.length; j++) {
      if (word[i] == guess[j]) {
        $("#" + turn + j).css("background-color", "yellow");
      }
    }
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[i] == guess[j] && i == j) {
        $("#" + turn + j).css("background-color", "lightgreen");
      }
    }
  }

  guesses -= 1;
  if (guess == word) {
    alert("You won!");
    updateStats(true, 6 - guesses); // Game won localstorage function
    return;
  } else if (guesses == 0) {
    alert("You Lose!");
    updateStats(false); // Game won, pass guesses taken
    score = 0;
    updateScore();
    return;
  }

  guess = "";
  $("#0").text("");
  $("#1").text("");
  $("#2").text("");
  $("#3").text("");
  $("#4").text("");
  score -= 100;
  updateScore();
  if (turn == "a") {
    turn = "b";
  } else if (turn == "b") {
    turn = "c";
  } else if (turn == "c") {
    turn = "d";
  } else if (turn == "d" && (difficulty == "easy" || difficulty == "medium")) {
    turn = "e";
  } else if (turn == "e" && difficulty == "easy") {
    turn = "f";
  }
}
// letter check function
function restart() {
  location.reload();
}

//Starts the game
function start() {
  $("#startButton").hide();
  getWord();
  $("#hint").prop("disabled", false);
  $("#restart").prop("disabled", false);
  updateScore();
}

//Logic for the hint button
function hint() {
  if (score >= 200) {
    for (let i = 0; i < word.length; i++) {
      if ($("#" + "h" + i).text() == "") {
        $("#" + "h" + i).text(word[i].toUpperCase());
        $("#" + "h" + i).css("background-color", "transparent");
        score -= 200;
        updateScore();
        return;
      }
    }
  }
}
//Returns the user to the home page
function back() {
  window.open("index.html", "_self");
}
// 
function getWordleStats() {
  const statsString = localStorage.getItem("wordleStats");
  //checks if statstring is truthy
  return statsString
    ? JSON.parse(statsString)
    : {
        gamesPlayed: 0,
        gamesWon: 0,
        winPercentage: 0,
        currentStreak: 0,
        longestStreak: 0,
      };
}

// Localstorage set
function saveWordleStats(stats) {
  localStorage.setItem("wordleStats", JSON.stringify(stats));
}

// Stats update function
function updateStats(gameWon) {
  const stats = getWordleStats();

  stats.gamesPlayed++;

  if (gameWon) {
    stats.gamesWon++;
    stats.currentStreak++;

    if (stats.currentStreak > stats.longestStreak) {
      stats.longestStreak = stats.currentStreak;
    }
  } else {
    stats.currentStreak = 0; // Resets streak
  }

  stats.winPercentage =
    stats.gamesPlayed > 0
      ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
      : 0;

  saveWordleStats(stats);
}
// Text type-out effect function // 
document.addEventListener("DOMContentLoaded", function () {
  let text =
    "Press start and type a word! Green, and you guessed the correct letter and position, yellow you have the correct letter but in the wrong position!";
  let index = 0;
  let speed = 30; // Adjust speed in milliseconds

  function typeEffect() {
    if (index < text.length) {
      document.getElementById("instructionsText").innerHTML +=
        text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    }
  }

  typeEffect();
});
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
