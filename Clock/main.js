document.addEventListener("DOMContentLoaded", () => {
    const UI = {
        date: document.querySelector('.date'),
        type: document.querySelector('.type'),
        second: document.querySelector('.hand--seconds'),
        minute: document.querySelector('.hand--minute'),
        hour: document.querySelector('.hand--hours')
    };

    function clock() {
        const now = new Date();
        const date = now.getDate();
        const rawHours = now.getHours(); 
        const seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
        const minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
        const hours = (rawHours % 12 + now.getMinutes() / 60) / 12 * 360; 

        UI.date.textContent = date;
        UI.second.style.transform = `rotate(${seconds}deg)`;
        UI.minute.style.transform = `rotate(${minutes}deg)`;
        UI.hour.style.transform = `rotate(${hours}deg)`;

        // Set AM or PM
        if (rawHours < 12) {
            UI.type.innerHTML = "AM";
        } else {
            UI.type.innerHTML = "PM";
        }

        requestAnimationFrame(clock);
    }

    clock(); // Call the clock function to start the animation
});
