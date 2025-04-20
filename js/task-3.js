const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    const trimInput = inputEl.value.trim();

    outputEl.textContent = trimInput === '' ? 'Anonymous' : trimInput;
});