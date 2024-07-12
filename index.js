const slider = document.getElementById('pain-slider');
const output = document.getElementById('slider-value');
const outputValueDisplay = document.getElementById('output-value');
const question1 = document.getElementById('medical-expenses');
const question2 = document.getElementById('loss-of-wages');
const question3 = document.getElementById('future-medical-expenses');

// Display the default slider value
output.textContent = slider.value;

slider.oninput = function () {
    output.textContent = this.value;
    updateOutputValue();
}

function updateOutputValue() {
    const q1 = parseFloat(question1.value) || 0;
    const q2 = parseFloat(question2.value) || 0;
    const q3 = parseFloat(question3.value) || 0;
    const sliderValue = parseFloat(slider.value);

    const questionsSum = (q1 + q2 + q3) * 1.5;

    let multiplier = 1.5;
    if (sliderValue > 2000 && sliderValue <= 5000) {
        multiplier = 2.2;
    } else if (sliderValue > 5000 && sliderValue <= 8000) {
        multiplier = 3.3;
    } else if (sliderValue > 8000) {
        multiplier = 4.4;
    }

    const outputValue = questionsSum * multiplier;
    outputValueDisplay.textContent = outputValue.toFixed(2);
}

function updateSliderValue() {
    const sliderWidth = slider.offsetWidth;
    const value = slider.value;
    const min = slider.min;
    const max = slider.max;
    const newValue = ((value - min) / (max - min)) * 100; // Calculate percentage

    output.textContent = value;
    output.style.left = `calc(${newValue}% - ${output.offsetWidth / 2}px)`;
    updateOutputValue();
}

// Add event listeners
slider.addEventListener('input', updateSliderValue);
question1.addEventListener('input', updateOutputValue);
question2.addEventListener('input', updateOutputValue);
question3.addEventListener('input', updateOutputValue);

// Initial call to set default values
updateSliderValue();
updateOutputValue();
