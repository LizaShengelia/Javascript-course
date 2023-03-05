const poll = {
  question: 'what is your favorite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  //this generates [0, 0, , 0]. more in the next section
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    //1.1
    const answer = prompt(`${this.question}\n${this.options.join('\n')}
    `);
    //1.2
    if ((Number(answer) && Number(answer)) < this.options.length) {
      this.answers[Number(answer) - 1] += 1;
    }
    this.displayResults();
    this.displayResults('string');
  },

  //3,4
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// 2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//5
const array1 = [5, 2, 3];
const array2 = [1, 5, 3, 9, 6, 1];

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
