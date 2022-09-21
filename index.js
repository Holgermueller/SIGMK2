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
  console.log(protagonist);
};

const getRandomAction = () => {
  let action = actions[Math.floor(Math.random() * actions.length)];
};

const getRandomWord = () => {
  let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
};

const turnCube = () => {
  const sideToShow = "show-" + document.getElementsByClassName("right").value;
};

const getStoryElements = () => {
  document.getElementById("storyElementsButton");

  getRandomProtagonist();
  getRandomAction();
  getRandomWord();
  turnCube();
};
