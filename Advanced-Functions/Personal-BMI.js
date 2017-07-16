/**
 * Created by Aleksandar on 17/07/2017.
 */

function generateChart(name, age, weight, height) {
    let chart = {};
    let heightInMeters=height/100;
    chart.name = name;
    chart.personalInfo = {age: age, weight: weight, height: height};
    let bmi = Math.round((weight / (heightInMeters * heightInMeters)));

    chart.BMI = bmi;

    let status = calculateStatus(bmi);

    chart.status = status;

    if (status === 'obese') {
        chart.recommendation = 'admission required';
    }

    function calculateStatus(bmi) {
        if (bmi < 18.5) {
            return 'underweight'
        }
        else if (bmi < 25) {
            return 'normal'
        }
        else if (bmi < 30) {
            return 'overweight'
        }
        else {
            return 'obese'
        }
    }

    return chart
}

//console.log(generateChart('Peter', 29, 75, 182));
console.log(generateChart('Honey Boo Boo', 9, 57, 137));