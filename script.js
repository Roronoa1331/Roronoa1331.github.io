var endTime = (+localStorage.endTime || 0)
    function setTimer() {
        var duration = +prompt('Nə qədər vaxt tutmaq istəyirsən canım? (dəqiqə)', '1331')
        endTime = localStorage.endTime = duration * 60e3 + Date.now()
        update()
    }
    function resetTimer() {
        endTime = 0
    }
    function toggleControls() {
        document.body.classList.toggle('controls-hidden')
    }
    function update() {
        var timeLeft = endTime - Date.now()
        if (timeLeft < 0) {
            setText('--:--')
        } else {
            var minutes = Math.floor(timeLeft / 60e3)
            var seconds = Math.floor(timeLeft / 1e3) % 60
            setText(`${minutes}:${seconds.toString(10).padStart(2, '0')}`)
        }
    }
    function setText(text) {
        document.getElementById('timer').textContent = text
    }
    setInterval(update, 200)