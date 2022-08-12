class Question {
  constructor() {
    this.title = createElement('h1');
    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here...");
    this.input2 = createInput("").attribute("placeholder", "Enter Correct Option No...");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.button2.hide();
  }

  gameTitle() {
    this.title.html("My Quiz Game");
    this.title.position(windowWidth/2 - 100, 0);
  }

  oneQuestion() {
    this.question.html("Question: What starts and ends with the letter 'E', but has only one letter?");
    this.question.position(100, 100);
  }
  
  ansOptions() {
    this.option1.html("1. Everyone" );
    this.option1.position(120, 140);

    this.option2.html("2. Envelope" );
    this.option2.position(120, 170);

    this.option3.html("3. Estimate" );
    this.option3.position(120, 200);

    this.option4.html("4. Example" );
    this.option4.position(120, 230);
  }

  handleMousePressed() {
    this.button.mousePressed(() => {
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }

  handleMousePressed2() {
    this.button2.mousePressed(() => {
      contestant.updateCount(0);
      quiz.update(0);
      var ref = database.ref("contestants");
      ref.remove();
    })
  }

  display() {
    this.input1.position(windowWidth/2 - 200, 375);
    this.input2.position(windowWidth/2, 375);
    this.button.position(windowWidth/2 - 75, 450);
    this.button2.position(windowWidth/2 + 5, 450);

    this.gameTitle();
    this.oneQuestion();
    this.ansOptions();
    this.handleMousePressed();
    this.handleMousePressed2();
  }
}