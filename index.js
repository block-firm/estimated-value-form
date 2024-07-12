const slider = document.getElementById('pain-slider');
const output = document.getElementById('slider-value');

output.textContent = slider.value;

slider.oninput = function () {
    output.textContent = this.value;
}