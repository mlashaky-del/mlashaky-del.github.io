// Countdown script extracted from original index.html
(function(){
    function updateCountdown() {
        // Set departure date to January 13, 2027 at midnight
        const departureDate = new Date('2027-01-13T00:00:00').getTime();
        const now = new Date().getTime();
        const timeRemaining = departureDate - now;

        // Calculate time units
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the DOM if elements exist
        var d = document.getElementById('days');
        var h = document.getElementById('hours');
        var m = document.getElementById('minutes');
        var s = document.getElementById('seconds');
        if (d && h && m && s) {
            d.textContent = days;
            h.textContent = hours;
            m.textContent = minutes;
            s.textContent = seconds;
        }

        // Stop the countdown at 0
        if (timeRemaining < 0 && d && h && m && s) {
            d.textContent = '0';
            h.textContent = '0';
            m.textContent = '0';
            s.textContent = '0';
        }
    }

    // Update countdown immediately on load
    updateCountdown();

    // Update countdown every second
    setInterval(updateCountdown, 1000);
})();
