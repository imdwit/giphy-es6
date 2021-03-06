const key = `&api_key=dc6zaTOxFJmzC`;
const giphy = `http://api.giphy.com/v1/gifs/search?q=`

let topics = [
  'cats',
  'dogs',
  'penguins',
  'giraffes',
  'elephants',
  'dragons',
  'hedgehog',
  'frog',
];

class ButtonGroup {
  constructor({handleClick, topics}) {
    this.topics = topics;
    this.$buttons = document.getElementById('buttons');
    this.$buttons.addEventListener('click', e => handleClick(e.target.dataset.topic), false);
    this.renderAll();
  }
  renderOne(topic) {
    return `<button data-topic="${topic.toLowerCase()}">${topic}</button>`
  }
  renderAll() {
    this.$buttons.innerHTML = '';
    this.$buttons.innerHTML = this.topics.map(this.renderOne).join('')
  }
}

class App {
  constructor() {
    this.btnGrp = new ButtonGroup({
      topics,
      handleClick: this.btnClick.bind(this),
    });
  }
  btnClick(topic) {
    fetch(`${giphy}${topic}${key}`)
      .then(res => res.json())
      .then(res => {
        this.gifSet.renderGifs(res.data)
      });
  }

}

new App;
