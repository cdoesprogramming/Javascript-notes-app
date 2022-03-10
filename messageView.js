class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    
    let div = document.createElement('div');
    div.setAttribute('id', 'message'); 
    div.innerText = 'This is a message displayed by JavaScript';
    this.mainContainerEl.append(div)

  }
}

module.exports = MessageView;
