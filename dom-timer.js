const style = document.createElement('style');

style.innerHTML = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

#timer {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 40px;
    text-align: center;
    letter-spacing: 8px;
    background: rgba(0, 0, 0, 0.3);
    padding: 30px 60px;
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    min-width: 400px;
}

input[type="button"] {
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.1rem;
    margin: 10px 15px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

input[type="button"]:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

input[type="button"]:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

#stopTimer {
    background-color: #f44336;
}

#stopTimer:hover {
    background-color: #da190b;
}

#resetTimer {
    background-color: #2196F3;
}

#resetTimer:hover {
    background-color: #0b7dda;
}
`;
document.head.appendChild(style);


document.addEventListener('DOMContentLoaded', function() {
    const timer = document.getElementById("timer");
    const start = document.getElementById("startTimer");
    const stop = document.getElementById("stopTimer");
    const reset = document.getElementById("resetTimer");

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timerInterval;

    timer.textContent = "00:00:00";

    function startTimer() {
        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            timer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        seconds = 0;
        minutes = 0;
        hours = 0;
        timer.textContent = "00:00:00";
    }

    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);
});