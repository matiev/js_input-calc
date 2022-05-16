let inputs = document.querySelectorAll('input'),
    cMaterial = document.querySelectorAll('input[name="aa"]'),
    cRange = document.querySelector('input[name="bb"]'),
    cNumber = document.querySelector('input[name="cc"]'),
    select = document.querySelector('select'),
    cPriceSize = document.querySelector('.calc__price-size'),
    sel = 0;

cRange.addEventListener('input', () => {
    cNumber.value = cRange.value;
});

cNumber.addEventListener('input', () => {
    cRange.value = cNumber.value;
});

cMaterial.forEach(item => {
    if (item.checked) {
        cPriceSize.textContent = item.value * cNumber.value + ' руб.';
    }
});


select.addEventListener('change', event => {
    sel = event.target.value;
    ch();
});

inputs.forEach(input => {
    input.addEventListener('input', ch);
});

function ch() {
    cMaterial.forEach(item => {
        if (item.checked) {
            cPriceSize.textContent = item.value * cNumber.value + +sel + ' руб.';
        }
    });


}
