const cube = document.querySelector(".cube");
let currentClass = "";

const protagonists = [
  "Magician",
  "Professor",
  "Farmer",
  "Student",
  "Surfer",
  "Shaman",
  "Jester",
  "Orphan",
  "Explorer",
  "Creator",
  "Lover",
  "Ruler",
  "Caregiver",
  "Warrior",
  "Child",
  "Rebel",
  "Seducer",
  "Thief",
  "Troubadour",
  "Chef",
  "Aritst",
  "Poet",
  "Writer",
  "Novelist",
  "Reporter",
  "Doctor",
  "Sculptor",
  "Monster",
];

const actions = [
  "saves",
  "destroys",
  "eats",
  "discovers",
  "learns",
  "marries",
  "defeats",
  "achieves",
  "loses",
  "restores",
  "fixes",
  "creates",
];

const randomWords = [
  "cheese",
  "royal",
  "ocean",
  "world",
  "kingdom",
  "monster",
  "animal",
  "farm",
  "town",
  "relative",
];

const getRandomProtagonist = () => {
  let protagonist =
    protagonists[Math.floor(Math.random() * protagonists.length)];
  document.getElementById("topRightSide").innerHTML = protagonist;
};

const getRandomAction = () => {
  let action = actions[Math.floor(Math.random() * actions.length)];
  document.getElementById("middleLeftSide").innerHTML = action;
};

const getRandomWord = () => {
  let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  document.getElementById("bottomRightSide").innerHTML = randomWord;
};

const turnCube = () => {
  const sideToShow = document.getElementById("topCube");
  if (currentClass === "show-front") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-right");

  currentClass = sideToShow;
};

const turnMiddleCube = () => {
  const sideToShow = document.getElementById("middleCube");
  if (currentClass === "show-front") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-left");

  currentClass = sideToShow;
};

const turnBottomCube = () => {
  const sideToShow = document.getElementById("bottomCube");
  if (currentClass === "show-front") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-right");

  currentClass = sideToShow;
};

const getStoryElements = () => {
  getRandomProtagonist();
  getRandomAction();
  getRandomWord();
  turnCube();
  turnMiddleCube();
  turnBottomCube();
};

const resetCubes = () => {
  const sideToShow = document.getElementById("topCube");
  const backToFront = document.getElementById("middleCube");
  const sideToReturn = document.getElementById("bottomCube");

  sideToShow.classList.remove("show-right");
  backToFront.classList.remove("show-left");
  sideToReturn.classList.remove("show-right");
};

const toggleButton = () => {
  let text = document.getElementById("button");

  if (text.innerHTML === "Reset") {
    text.innerHTML = "Give Me A Plot!";
    resetCubes();
  } else {
    text.innerHTML = "Reset";
    getStoryElements();
  }
};
