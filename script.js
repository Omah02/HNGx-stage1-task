document.addEventListener("DOMContentLoaded", function() {
    // Slack Name
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = "Fahidat Moyosola Saadallah";

    // Current Day of the Week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayIndex = new Date().getDay();
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = daysOfWeek[currentDayIndex];

    // Current UTC Time
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentUTCTimeMillis = Date.now();
    currentUTCTimeElement.textContent = currentUTCTimeMillis.toString();
});
