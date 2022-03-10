class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonhideEl = document.querySelector('#hide-message-button');
    this.mainContainerEl = document.querySelector('#main-container');
    
    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.buttonhideEl.addEventListener('click', () => {
      this.hideMessage();
   });
  };

  displayMessage() {
    console.log('Thanks for clicking me!');
    
    let div = document.createElement('div');
    div.setAttribute('id', 'message'); 
    div.innerText = 'This is a message displayed by JavaScript';
    this.mainContainerEl.append(div);
  };

  hideMessage() {
    var myobj = document.getElementById('message');
    myobj.remove();
  };

};

module.exports = MessageView;
