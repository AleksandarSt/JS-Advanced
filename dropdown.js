/**
 * Created by Aleksandar on 07/07/2017.
 */

function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.value = newItemValue.value;
    option.textContent = newItemText.value;

    let select = document.getElementById('menu');

    select.appendChild(option);

    newItemText.value = '';
    newItemValue.value = '';
}
