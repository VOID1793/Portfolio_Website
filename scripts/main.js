/* This is my main JavaScript File. There isn't much here and it is quite basic.*/
if (window.location.pathname.includes('resume.html')) {
    console.log("We are testing the functionality of a JavaScript! This is a personal portfolio website.")

    const datespan = document.getElementById('date-time');
    const time = new Date().toLocaleString();
    const currentcontent = datespan.textContent

    console.log(datespan)
    console.log(time)
    console.log(currentcontent)

    const newcontent = currentcontent.replace('$DATE', time)

    datespan.textContent = newcontent
}
/* This script will play the background music when somebody presses the music button. */
else if (window.location.pathname.includes('career-goals.html')) {
    document.getElementById('play-button').addEventListener('click', function() {
        var music = document.getElementById('music')
        if (music.paused) {
            music.play();
        }
        else {
            music.pause();
        }
    })
}