/**
 * Created by Aleksandar on 09/07/2017.
 */

function timer() {
    let timer = null;
    let seconds = 0;
    let timerSeconds = $('#seconds');
    let timerMinutes = $('#minutes');
    let timerHours = $('#hours');

    $('#start-timer').on('click', function () {
        clearInterval(timer);
        timer = setInterval(step, 1000);

        function step() {
            seconds++;
            timerSeconds.text(('0' + seconds % 60).slice(-2));
            timerMinutes.text(('0' + Math.trunc((seconds / 60) % 60)).slice(-2));
            timerHours.text(('0' + Math.trunc(seconds / 3600)).slice(-2));
        }
    });

    $('#stop-timer').on('click', function () {
        clearInterval(timer);
    })
}
