/**
 * Created by Aleksandar on 08/07/2017.
 */

function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', calculateByDays);
    hoursBtn.addEventListener('click', calculateByHours);
    minutesBtn.addEventListener('click', calculateByMinutes);
    secondsBtn.addEventListener('click', calculateBySeconds);

    function calculateByDays() {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        hours.value = Number(days.value) * 24;
        minutes.value = Number(days.value) * 1440;
        seconds.value = Number(days.value) * 86400;
    }

    function calculateByHours() {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        days.value = Number(hours.value) / 24;
        minutes.value = Number(hours.value) * 60;
        seconds.value = Number(hours.value) * 3600;
    }

    function calculateByMinutes() {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        days.value = Number(minutes.value) / 1440;
        hours.value = Number(minutes.value) / 60;
        seconds.value = Number(minutes.value) * 60;
    }

    function calculateBySeconds() {
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('seconds');

        days.value = Number(seconds.value) / 86400;
        hours.value = Number(seconds.value) / 3600;
        minutes.value = Number(seconds.value) / 60;
    }
}
