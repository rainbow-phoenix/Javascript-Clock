window.onload = function () {
    let seconds = 00;
    let milliseconds = 00;
    var appendMilliseconds = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var interval;

    buttonStart.onclick = function() {
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(interval);
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        milliseconds = "00";
        seconds = "00"
        appendMilliseconds.innerHTML = milliseconds;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9) {
            appendMilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}