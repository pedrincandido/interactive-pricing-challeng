const blueEmptySliderBar = 'var(--light-grayish-blue-empty)';
const softCyan = 'var(--soft-cyan)';
const values = [
    { label: `10K`, step: '8' },
    { label: `50K`, step: '12' },
    { label: `100K`, step: '16' },
    { label: `500K`, step: '24' },
    { label: `1M`, step: '36' },
];

const slideValue = document.getElementById('money');
const inputSlider = document.querySelector('input');
const pageViews = document.querySelector('.card__title--blue');

this.updateInputSliderBackground();
this.updatePageViews();
this.activeDiscount();

inputSlider.oninput = (() => {
    this.updatePageViews();
    this.updateInputSliderBackground();
    this.activeDiscount();
});

function activeDiscount() {
    if (document.getElementById('switch-shadow').checked) {
        const obj = values[inputSlider.value];
        slideValue.textContent = `$${obj.step - (obj.step * 0.25)}`;
    } else {
        const obj = values[inputSlider.value];
        slideValue.textContent = `$${obj.step}`;
    }
}

function updateInputSliderBackground() {
    const inputSlider = document.querySelector('input');
    const value = inputSlider.value;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.background = `linear-gradient(to right, ${softCyan} 0%, ${softCyan} ${(value - min) / (max - min) * 100}%, ${blueEmptySliderBar} ${(value - min) / (max - min) * 100}%, ${blueEmptySliderBar} 100%)`
}

function updatePageViews() {
    const obj = values[inputSlider.value];
    pageViews.textContent = `${obj.label} Pageviews`;
}