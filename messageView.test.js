/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const input = document.querySelector('#message-input');
    input.value = 'Hello';
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const message = document.querySelector('#message');
    expect(message.innerText).toBe('Hello');
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const buttonhideEl = document.querySelector('#hide-message-button');
    buttonhideEl.click();
    expect(document.querySelector('#message')).toBeNull();
  });
});
// it('clicks the button', () => {
//   document.body.innerHTML = fs.readFileSync('./index.html');

//   const view = new MessageView();
//   const buttonEl = document.querySelector('#show-message-button');
//   buttonEl.click();
//   expect(document.querySelector('#message')).not.toBeNull();
// });