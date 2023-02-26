import React from 'react';

const hexNum = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f'
];

function genRandomHex() {
    let hex1 = '';
    let hex2 = '';
  
    for (let i = 0; i < 6; i++) {
      hex1 += hexNum[Math.floor(Math.random() * hexNum.length)];
      hex2 += hexNum[Math.floor(Math.random() * hexNum.length)];
    }
  
    const gradient = `linear-gradient(45deg, #${hex1}, #${hex2})`;
  
    document.getElementById('body').style.background = gradient;
    document.getElementById('body').classList.add('bg-transition');
    document.querySelector(".copy-link-input").value = `background: ${gradient}`;
    
  }
  
document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
    const inputField = copyLinkParent.querySelector(".copy-link-input");
    const copyButton = copyLinkParent.querySelector(".copy-link-button");
    const text = inputField.value;
  
    inputField.addEventListener("focus", () => inputField.select());
  
    copyButton.addEventListener("click", () => {
        inputField.select();
        navigator.clipboard.writeText(inputField.value);
      
        inputField.value = "Copied!";
        setTimeout(() => (inputField.value = text), 2000);
      });
      
      
  });
  

function Main() {
  return (
    <>
      <div className="centerContent">
        <h1>Random Gradient Generator</h1>
        <button
          className="btn btn-danger rounded-pill px-5 mt-2"
          onClick={genRandomHex}
        >
          GENERATE
        </button>

        <div class="copy-link">
            <input type="text" class="copy-link-input" readonly />
            <button type="button" class="copy-link-button">
                <span class="fa fa-clipboard"></span>
            </button>
        </div>
      </div>
      <p className='credits'>Made By <b>Yasir Nawaz</b> with <span className='fa fa-heart heartEmoji'></span></p>
      <style>
        {`
          .bg-transition {
            transition: background-color 0.5s ease-in-out;
          }
        `}
      </style>
    </>
  );
}

export default Main;
