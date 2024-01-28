
var fCheckBox = document.getElementById('f_selector');
fCheckBox.addEventListener('change', function () { toggleCoopSelection('financial', fCheckBox.checked) });
var lCheckBox = document.getElementById('l_selector');
lCheckBox.addEventListener('change', function () { toggleCoopSelection('legal', lCheckBox.checked) });
var cCheckBox = document.getElementById('c_selector');
cCheckBox.addEventListener('change', function () { toggleCoopSelection('consulting', cCheckBox.checked) });
var iCheckBox = document.getElementById('i_selector');
iCheckBox.addEventListener('change', function () { toggleCoopSelection('integration', iCheckBox.checked) });

function toggleCoopSelection(klasa, isChecked) {
    var selectedDivs = document.querySelectorAll('.' + klasa);
    selectedDivs.forEach(function (element) {

        if (isChecked) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });

}
