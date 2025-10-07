function startStage(stageNumber) {
  console.log("startStage called with:", stageNumber);
  let difficulty = $("#stage" + stageNumber).attr("gameDiff");

  document.cookie = "difficulty=" + difficulty + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";

  window.open("game.html", "_self");
}

$(document).ready(function () {
  $(".maincontainer").css("opacity", "1");
  displayWordleStats(); // Ensure stats load when document is ready
});

// Getting stats function
function getWordleStats() {
  const statsString = localStorage.getItem("wordleStats");
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

// Display stats function
function displayWordleStats() {
  const stats = getWordleStats();

  $("#games-played").text(stats.gamesPlayed);
  $("#games-won").text(stats.gamesWon);
  $("#win-percentage").text(stats.winPercentage + "%");
  $("#current-streak").text(stats.currentStreak);
  $("#longest-streak").text(stats.longestStreak);
}

