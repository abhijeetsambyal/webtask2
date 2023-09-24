document.getElementById("showTimeButton").addEventListener("click", showTime);
document.getElementById("showDateButton").addEventListener("click", showDate);

function showTime() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    timeElement.textContent = "Time: " + now.toLocaleTimeString();
}

function showDate() {
    const now = new Date();
    const dateElement = document.getElementById("date");
    dateElement.textContent = "Date: " + now.toLocaleDateString();
}
