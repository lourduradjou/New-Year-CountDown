const displayDays = document.querySelector('#days')
const displayHours = document.querySelector('#hours')
const displayMinutes = document.querySelector('#minutes')
const displaySeconds = document.querySelector('#seconds')

const refresh = () => {
    const currentYear = new Date().getFullYear()
    const newYear = new Date(`January 1 ${currentYear+1} 00:00:00`)
    const currentDay = new Date();
    const remainingTime = newYear - currentDay;
    const remDays = Math.floor(remainingTime/1000/60/60/24)
    const remHours = Math.floor(remainingTime/1000/60/60%24)
    const remMinutes = Math.floor(remainingTime/1000/60%60)
    const remSeconds = Math.floor(remainingTime/1000%60)

    displayDays.innerHTML = remDays < 10 ? ('0' + remDays) : remDays
    displayHours.innerHTML = remHours < 10 ? ('0' + remHours) : remHours
    displayMinutes.innerHTML = remMinutes < 10 ? ('0' + remMinutes) : remMinutes
    displaySeconds.innerHTML = remSeconds < 10 ? ('0' + remSeconds) : remSeconds
}

setInterval(refresh, 1000)