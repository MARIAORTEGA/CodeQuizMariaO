// var startbutton = document.getElementById("start");
// var questionContainer = document.getElementById("questions");
// var questions = [
//   {
//     question:
//       "JavaScript is NOT one of the three fundamental programming languages of the modern web?",
//     answers: [
//       { text: "TRUE", correct: false },
//       { text: "FALSE", correct: true },
//     ],
//   },
//   {
//     question: "Alerts, prompts, and confirms create a link in the browser when run.",
//     answers: [
//     { text: "TRUE", correct: false },
//     { text: "FALSE", correct: true }
//   ],
// },

// startbutton.addEventListener("click", startGame);

// function startGame() {
//   startbutton.classList.add("hide");
//   questionContainer.classList.remove("hide");
//   setNextQuestion();
// }

// function setNextQuestion() {}

// function selectAnswer() {}

// //timer
// timeLeft = 10;
// function countdown() {
//   timeLeft--;
//   document.getElementById("seconds").innerHTML = String(timeLeft);
//   if (timeLeft > 0) {
//     setTimeout(countdown, 1000);
//   }
// }

// setTimeout(countdown, 1000);

////////////////////////////////////////////
// reference to DOM elements
var time = $("#seconds");
var projectDisplayEl = $("#project-display");
var projectModalEl = $("#project-modal");
var projectFormEl = $("#project-form");
var projectTypeInputEl = $("#project-type-input");
var projectTypeInputEl2 = $("#project-type-input");
var projectTypeInputEl3 = $("#project-type-input");
var projectTypeInputEl4 = $("#project-type-input");
var projectNameInputEl = $("#project-name-input");

//the time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  time.text(rightNow);
}

function printProjectData(type, type, type, type, name) {
  var projectRowEl = $("<tr>");

  var projectTypeTdEl = $("<td>").addClass("p-2").text(type);
  var projectTypeTdEl2 = $("<td>").addClass("p-2").text(type);
  var projectTypeTdEl3 = $("<td>").addClass("p-2").text(type);
  var projectTypeTdEl4 = $("<td>").addClass("p-2").text(type);
  var projectNameTdEl = $("<td>").addClass("p-2").text(name);

  // chaining methods onto new lines to keep code clean
  var totalTdEl = $("<td>")
    .addClass("p-2")
    .text("$" + totalEarnings);

  var deleteProjectBtn = $("<td>")
    .addClass("p-2 delete-project-btn text-center")
    .text("✅ ");

  // listing each `<td>` variable as an argument, so they will be appended in that order
  projectRowEl.append(
    projectTypeTdEl,
    projectTypeTdEl2,
    projectTypeTdEl3,
    projectTypeTdEl4,
    projectNameTdEl,
    deleteProjectBtn
  );

  projectDisplayEl.append(projectRowEl);

  projectModalEl.modal("hide");
}

function handleDeleteProject(event) {
  console.log(event.target);
  var btnClicked = $(event.target);
  btnClicked.parent("tr").remove();
}

// to submit form
function handleProjectFormSubmit(event) {
  event.preventDefault();

  var projectName = projectNameInputEl.val().trim();
  var projectName = projectNameInputEl2.val().trim();
  var projectName = projectNameInputEl3.val().trim();
  var projectName = projectNameInputEl4.val().trim();
  var projectType = projectTypeInputEl.val().trim();

  printProjectData(
    projectName,
    projectName,
    projectName,
    projectName,
    projectType
  );

  projectFormEl[0].reset();
}

projectFormEl.on("submit", handleProjectFormSubmit);
projectDisplayEl.on("click", ".delete-project-btn", handleDeleteProject);

setInterval(displayTime, 1000);
