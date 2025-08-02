/* This is my main JavaScript File. There isn't much here and it is quite basic.*/

console.log("We are testing the functionality of a JavaScript! This is a personal portfolio website.")

const dateSpan = document.getElementById('dateTime');
const time = new Date().toLocaleString();
const currentContent = dateSpan.textContent

const newContent = currentContent.replace('$DATETIME', time)

dateSpan.textContent = newContent
