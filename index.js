window.onload = function () {

    let body = document.getElementsByTagName('body')[0];
    let yes_btn = document.getElementsByClassName('pos')[0];
    let no_btn = document.getElementsByClassName('neg')[0];
    let inv = document.getElementById('invite');
    let title = document.getElementById('title');

    yes_btn.onclick = function() {
        body.style.backgroundImage = "url(welldone.jpg)";
        body.style.backgroundSize = window.screen.width + "px " + window.screen.height + "px";
        body.style.backgroundRepeat = "no-repeat";
        title.textContent = "УРА!";
        inv.style.color = "#f00";
        inv.textContent = "УРА!";
        buttons = document.getElementsByTagName('button');
        for(let i=0; i<buttons.length; i++) {
            let self = buttons[i];
            self.style.visibility = 'hidden';
            }
    }

    no_btn.onclick = function() {
        body.style.backgroundColor = "black";
        title.textContent = "Какой же ты всё-таки пидорас!";
        inv.style.color = "#fff";
        inv.textContent = "А я ведь перед сессией отдохнуть хочу, у меня первая стипендия...";
        buttons = document.getElementsByTagName('button');
        for(let i=0; i<buttons.length; i++) {
            let self = buttons[i];
            self.style.visibility = 'hidden';
            }
    }
}