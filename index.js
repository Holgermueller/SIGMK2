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
};

const getRandomWord = () => {
  let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
};

const setCube = () => {
  const sideToShow = document.getElementById("cube");
  if (currentClass === "show-right") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-front");
  currentClass = sideToShow;
};

const turnCube = () => {
  const sideToShow = document.getElementById("cube");
  if (currentClass === "show-front") {
    cube.classList.remove(currentClass);
  }
  sideToShow.classList.add("show-right");

  currentClass = sideToShow;
};

const reset = () => {
  setCube();
  console.log("click");
};

const getStoryElements = () => {
  document.getElementById("storyElementsButton");

  getRandomProtagonist();
  getRandomAction();
  getRandomWord();
  turnCube();
};

setCube();
