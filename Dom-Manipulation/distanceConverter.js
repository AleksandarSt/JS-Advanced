/**
 * Created by Aleksandar on 08/07/2017.
 */

function attachEventsListeners() {
    let convert = document.getElementById('convert');

    convert.addEventListener('click', convertUnits);

    function convertUnits() {
        let fromField = document.getElementById('inputDistance');
        let fromUnit = document.getElementById('inputUnits').value;
        let toUnit = document.getElementById('outputUnits').value;
        let output=document.getElementById('outputDistance');
        let valueInMeters = 0;
        let outputValue=0;

        switch (fromUnit) {
            case 'km':
                valueInMeters = Number(fromField.value) * 1000;
                break;
            case 'm':
                valueInMeters = Number(fromField.value) * 1;
                break;
            case 'cm':
                valueInMeters = Number(fromField.value) * 0.01;
                break;
            case 'mm':
                valueInMeters = Number(fromField.value)* 0.001;
                break;
            case 'mi':
                valueInMeters = Number(fromField.value) * 1609.34;
                break;
            case 'yrd':
                valueInMeters = Number(fromField.value) * 0.9144;
                break;
            case 'ft':
                valueInMeters = Number(fromField.value) * 0.3048;
                break;
            case 'in':
                valueInMeters = Number(fromField.value) * 0.0254;
                break;
        }

        switch (toUnit){
            case 'km':
                outputValue = valueInMeters / 1000;
                break;
            case 'm':
                outputValue = valueInMeters / 1;
                break;
            case 'cm':
                outputValue = valueInMeters / 0.01;
                break;
            case 'mm':
                outputValue = valueInMeters / 0.001;
                break;
            case 'mi':
                outputValue = valueInMeters / 1609.34;
                break;
            case 'yrd':
                outputValue = valueInMeters / 0.9144;
                break;
            case 'ft':
                outputValue = valueInMeters / 0.3048;
                break;
            case 'in':
                outputValue = valueInMeters / 0.0254;
                break;
        }

        output.value=outputValue;
    }
}
