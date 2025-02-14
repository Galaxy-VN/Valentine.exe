// JavaScript for typing out Java code line by line in the code box

const codeLines = [
  "public class Love {",
  "    public static void main(String[] args) {",
  "        System.out.println(\"Happy Valentine Lunaby!\");",
  "        System.out.println(\"From XOR Lazy!\");",
  "    }",
  "}"
];

const codeBox = document.getElementById('code-box');

// Function to type out a single line character by character using textContent
function typeLine(lineText, element, callback) {
  let i = 0;
  let currentText = "";
  
  function typeCharacter() {
    if (i < lineText.length) {
      currentText += lineText[i];
      element.textContent = currentText;
      i++;
      setTimeout(typeCharacter, 50);
    } else {
      if (callback) callback();
    }
  }
  
  typeCharacter();
}

// Function to type all lines sequentially
function typeAllLines(index) {
  if (index < codeLines.length) {
    const lineElem = document.createElement('p');
    lineElem.classList.add('code-line');
    codeBox.appendChild(lineElem);
    typeLine(codeLines[index], lineElem, () => {
      typeAllLines(index + 1);
    });
  } else {
    // Once all lines have been typed, append a blinking cursor on its own line
    const cursorElem = document.createElement('span');
    cursorElem.classList.add('cursor');
    cursorElem.textContent = "|";
    const cursorWrapper = document.createElement('p');
    cursorWrapper.classList.add('code-line');
    cursorWrapper.appendChild(cursorElem);
    codeBox.appendChild(cursorWrapper);
  }
}

// Start typing from the first line
typeAllLines(0);