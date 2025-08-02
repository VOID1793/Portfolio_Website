/* This is my main JavaScript File. There isn't much here and it is quite basic.*/

console.log("We are testing the functionality of a JavaScript! This is a personal portfolio website.")

const datespan = document.getElementById('date-time');
const time = new Date().toLocaleString();
const currentcontent = datespan.textContent

console.log(datespan)
console.log(time)
console.log(currentcontent)

const newcontent = currentcontent.replace('$DATE', time)

datespan.textContent = newcontent
