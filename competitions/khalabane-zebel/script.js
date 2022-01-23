sampleQuestions = {
  question: "123456",
  options: [
    {
      color: "123465",
      id: 0,
    },
    {
      color: "123467",
      id: 1,
    },
    {
      color: "123445",
      id: 2,
    },
    {
      color: "123429",
      id: 3,
    },
  ],
};

game = {
  //gameStates
  userAnswers: {},
  questions: [],

  //required elements
  submitButton: document.querySelector(".SubmitButton"),
  questionBox: document.querySelector(".questionBox"),
  optionsBox: document.querySelector(".optionsBox"),

  answerBoxes: document.querySelectorAll(".answerBox"),
  lighterBox: document.querySelector(".lighterBox"),
  darkerBox: document.querySelector(".darkerBox"),

  //gameInitializer
  initializeGame: function (inputQuestions) {
    this.questions = inputQuestions;
    this.questionInitializer();
    this.handleDragAndDrop();
    this.submitButtonClickListener();
  },

  //mainFunctions
  questionInitializer: function () {
    // add question
    let questionColor = `#${this.questions.question}`;
    game.questionBox.style.backgroundColor = questionColor;

    //  remove extra options
    game.answerBoxes.innerHTML = "";
    game.optionsBox.innerHTML = "";

    // add options
    this.questions.options.forEach((optionItem) => {
      let option = document.createElement("span");
      let attr = document.createAttribute("data-Color");
      attr.value = `#${optionItem.color}`;
      option.setAttributeNode(attr);
      option.style.backgroundColor = attr.value;

      Object.assign(option, {
        className: "option",
        id: optionItem.id,
        draggable: true,
      });
      game.optionsBox.append(option);
    });
  },

  handleDragAndDrop: function () {
    document.querySelectorAll(".option").forEach((option) => {
      option.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        setTimeout(() => {
          e.target.classList.add("hidden");
        }, 0);
      });
      option.addEventListener("dragend", (e) => {
        setTimeout(() => {
          e.target.classList.remove("hidden");
        }, 0);
      });
    });

    // check if optionsBox has childres or not

    this.answerBoxes.forEach((answerBox) => {
      answerBox.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
      answerBox.addEventListener("drop", (e) => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text/plain");
        let draggedElement = document.getElementById(data);
        draggedElement.classList.remove("hidden");
        answerBox.append(draggedElement);

        if (game.optionsBox.children.length === 0) {
          game.submitButton.disabled = false;
          game.submitButton.classList.add("active");
          game.submitButton.classList.remove("inactive");
          game.submitButton.classList.add("submitButton");
          game.submitButton.classList.remove("submitButtonInactive");
        }
      });
    });
  },

  submitButtonClickListener: function () {
    game.submitButton.addEventListener("click", () => {
      this.__setStateAnswers();
      alert(JSON.stringify(game.getAnswers()));
    });
  },
  getAnswers: function () {
    return this.userAnswers;
  },

  //auxiliaryFunctions
  __shorthandRegex: (hexColor) => {
    let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    return hexColor.replace(
      shorthandRegex,
      (m, r, g, b) => r + r + g + g + b + b
    );
  },
  __hexToRgb(hex) {
    hex = game.__shorthandRegex(hex);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return {
      R: parseInt(result[1], 16),
      G: parseInt(result[2], 16),
      B: parseInt(result[3], 16),
    };
  },
  __isDarker(questionColor, optionColor) {
    if (questionColor.R > optionColor.R) {
      return true;
    } else if (questionColor.R < optionColor.R) {
      return false;
    } else if (questionColor.G > optionColor.G) {
      return true;
    } else if (questionColor.G < optionColor.G) {
      return false;
    } else if (questionColor.B > optionColor.B) {
      return true;
    } else if (questionColor.B < optionColor.B) {
      return false;
    }
  },
  __setStateAnswers: function () {
    let stateAnswer = {};
    stateAnswer.question = this.questions.question;
    stateAnswer.answers = [];

    // check lighter box
    let lighterBoxOptions = Array.from(this.lighterBox.children);
    lighterBoxOptions.forEach((item, index) => {
      let itemColor = lighterBoxOptions[index].dataset.color.slice(1);
      let itemId = lighterBoxOptions[index].id;
      stateAnswer.answers.push({
        color: itemColor,
        id: itemId,
        isCorrect: !this.__isDarker(
          this.__hexToRgb(stateAnswer.question),
          this.__hexToRgb(itemColor)
        ),
      });
    });

    // check darker box
    let darkerBoxOptions = Array.from(this.darkerBox.children);
    darkerBoxOptions.forEach((item, index) => {
      let itemColor = darkerBoxOptions[index].dataset.color.slice(1);
      let itemId = darkerBoxOptions[index].id;
      stateAnswer.answers.push({
        color: itemColor,
        id: itemId,
        isCorrect: this.__isDarker(
          this.__hexToRgb(stateAnswer.question),
          this.__hexToRgb(itemColor)
        ),
      });
    });
    this.userAnswers = stateAnswer;
  },
};

game.initializeGame(sampleQuestions);
