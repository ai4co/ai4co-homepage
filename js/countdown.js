// Workshop Countdown Timer
const deadlines = {
    submission: new Date('2026-02-15T23:59:59Z'), // February 15, 2026 AoE
    notification: new Date('2026-03-15T23:59:59Z'), // March 15, 2026 AoE
    cameraReady: new Date('2026-04-01T23:59:59Z'), // April 1, 2026 AoE
    workshop: new Date('2026-04-25T08:00:00Z') // Workshop day (assuming April 25, 2026)
};

function updateCountdown(targetDate, elementId) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    
    const element = document.getElementById(elementId);
    if (!element) return;
    
    if (distance < 0) {
        element.innerHTML = '<span class="countdown-expired">Deadline passed</span>';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    element.innerHTML = `
        <div class="countdown-unit">
            <span class="countdown-number">${days}</span>
            <span class="countdown-label">Days</span>
        </div>
        <div class="countdown-unit">
            <span class="countdown-number">${hours}</span>
            <span class="countdown-label">Hours</span>
        </div>
        <div class="countdown-unit">
            <span class="countdown-number">${minutes}</span>
            <span class="countdown-label">Min</span>
        </div>
        <div class="countdown-unit">
            <span class="countdown-number">${seconds}</span>
            <span class="countdown-label">Sec</span>
        </div>
    `;
}

function initializeCountdowns() {
    // Update all countdown timers
    updateCountdown(deadlines.submission, 'countdown-submission');
    updateCountdown(deadlines.notification, 'countdown-notification');
    updateCountdown(deadlines.cameraReady, 'countdown-camera-ready');
    updateCountdown(deadlines.workshop, 'countdown-workshop');
}

// Update countdowns every second
document.addEventListener('DOMContentLoaded', function() {
    initializeCountdowns();
    setInterval(initializeCountdowns, 1000);
}); 